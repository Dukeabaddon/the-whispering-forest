/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import HeroSection from './components/HeroSection';
import NewsSection from './components/NewsSection';
import StorySection from './components/StorySection';
import CharactersSection from './components/CharactersSection';
import WorldSection from './components/WorldSection';
import TrailerSection from './components/TrailerSection';
import Footer from './components/Footer';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function App() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const synthNodesRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Web Audio API: Generate an organic, slow-breathing modal sylvan chord
  const startSylvanSoundbed = () => {
    try {
      // Create and resume context
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // Master Gain for smooth volume transitions
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      // Fade in master volume slowly
      masterGain.gain.linearRampToValueAtTime(0.35, ctx.currentTime + 3.0);
      
      // Delay effect line to simulate ancient forest echo reverb
      const delay = ctx.createDelay(1.5);
      delay.delayTime.value = 0.8;
      const feedback = ctx.createGain();
      feedback.gain.value = 0.55;

      // Connect nodes
      masterGain.connect(ctx.destination);
      masterGain.connect(delay);
      delay.connect(feedback);
      feedback.connect(delay);
      feedback.connect(ctx.destination);
      
      gainNodeRef.current = masterGain;

      // Pentatonic/Modal chord notes: E3, A3, B3, E4, F#4 (Ancient mystical key)
      const freqs = [164.81, 220.00, 246.94, 329.63, 369.99];
      const oscillators: OscillatorNode[] = [];

      freqs.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        
        // Soft Triangle and sine waves for peaceful wooden flute/reed synthesis
        osc.type = index % 2 === 0 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Slow breathing LFO-like volume modulator for sylvan pulse
        oscGain.gain.setValueAtTime(0.08, ctx.currentTime);
        
        // Smooth connections
        osc.connect(oscGain);
        oscGain.connect(masterGain);
        
        osc.start();
        oscillators.push(osc);

        // Gentle real-time frequency waving to simulate wind-swayed hollow flutes
        const intervalId = setInterval(() => {
          if (ctx.state === 'running') {
            const time = ctx.currentTime;
            osc.frequency.setValueAtTime(freq + Math.sin(time * 0.8 + index) * 0.7, time);
          }
        }, 150);

        // Store interval on osc object so it can be cleared
        (osc as any).customInterval = intervalId;
      });

      synthNodesRef.current = oscillators;
      setIsAudioPlaying(true);
    } catch (err) {
      console.warn('Web Audio is not supported or was blocked by active play settings:', err);
    }
  };

  const stopSylvanSoundbed = () => {
    const ctx = audioCtxRef.current;
    const masterGain = gainNodeRef.current;
    
    if (ctx && masterGain) {
      // Fade out smoothly before turning off
      masterGain.gain.setValueAtTime(masterGain.gain.value, ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.2);
      
      setTimeout(() => {
        synthNodesRef.current.forEach(osc => {
          try {
            clearInterval((osc as any).customInterval);
            osc.stop();
          } catch (e) {}
        });
        synthNodesRef.current = [];
        ctx.close();
        audioCtxRef.current = null;
        gainNodeRef.current = null;
        setIsAudioPlaying(false);
      }, 1250);
    }
  };

  const toggleSoundbed = () => {
    if (isAudioPlaying) {
      stopSylvanSoundbed();
    } else {
      startSylvanSoundbed();
    }
  };

  // Ensure sounds clean up if navigating away
  useEffect(() => {
    return () => {
      synthNodesRef.current.forEach(osc => {
        clearInterval((osc as any).customInterval);
        try { osc.stop(); } catch(e){}
      });
    };
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-[#0D0D0D] text-[#F4F1EA] font-sans antialiased overflow-x-hidden">
      
      {/* 1. Global Sylvan Background Pollen Particles */}
      <ParticleCanvas />

      {/* 2. Floating Soundbed Play HUD (Top-right corner overlay) */}
      <div className="fixed top-6 right-6 z-40 flex items-center gap-3">
        <button 
          onClick={toggleSoundbed}
          className={`px-4 py-2.5 rounded-full border text-[10px] tracking-[0.25em] font-mono flex items-center gap-2.5 filter backdrop-blur-md select-none transition-all duration-500 cursor-pointer ${
            isAudioPlaying 
              ? 'bg-[#ffe9c9]/10 border-[#C89B5B] text-[#C89B5B] shadow-[0_0_12px_rgba(200,155,91,0.18)]' 
              : 'bg-black/40 border-white/10 hover:border-[#C89B5B]/50 text-white/70'
          }`}
          title="Toggle ancient forest chimes synth"
        >
          {isAudioPlaying ? (
            <>
              <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#C89B5B]" />
              <span>FOREST CHIMES: ON</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 opacity-60" />
              <span>FOREST CHIMES: OFF</span>
            </>
          )}
        </button>

        {/* Small sylvan sigil glow indicator */}
        <div className={`w-2 h-2 rounded-full duration-700 ${
          isAudioPlaying ? 'bg-[#C89B5B] shadow-[0_0_8px_#C89B5B]' : 'bg-transparent'
        }`} />
      </div>

      {/* 3. Theatrical Sequential Story Landing Sections */}
      <HeroSection />
      
      <NewsSection />
      
      <StorySection />
      
      <CharactersSection />
      
      <WorldSection />
      
      <TrailerSection />
      
      <Footer />

    </main>
  );
}
