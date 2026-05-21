# The Whispering Forest — Anime Landing Page

An atmospheric, cinematic landing page inspired by the mystical, dark fantasy aesthetic of **“The Ancient Magus’ Bride”** (*Mahoutsukai no Yome*). 

This project delivers a premium, theatrical web experience featuring rich visual storytelling, ambient sound synthesis, and immersive motion design.

---

## 🍃 Key Features

- **Storybook Opening Loader:** A custom, slow-cinematic fullscreen page loader featuring a vintage book spread, glowing magic runes, candlelight vignettes, and drifting embers. Supports reduced motion accessibility preferences out of the box.
- **Collapsible Forest Chimes Synth:** An interactive floating sound toggle utilizing the **Web Audio API** to generate organic, slow-breathing modal sylvan chord patterns (pentatonic scale: `E3, A3, B3, E4, F#4`). Includes hover-to-expand width transformations and click-triggered canvas ripples.
- **Parallax Hero Canvas:** A high-impact, volumetric introduction layout with custom-layered artwork, golden backlight blooms, and mouse-tracked perspective shifts.
- **Swaying Hanging Lanterns:** Dynamic, physics-modeled swaying lanterns casting a soft amber glow behind section titles. Shuffled positions on mobile screens prevent text overlap.
- **Interactive Character Codex:** A Victorian-style manuscript interface showcasing character portraits, trait tags, voice actor credits, and hand-written quotes for Chise, Elias, and Silky.
- **Vintage Lore Journal:** A folder-tabbed manuscript spread exploring the deeper elements of the series (*Sleigh Beggy*, *The Neighbours*, *Mage's Compact*).
- **Smooth Section Transitions:** Custom layered gradients, fog offsets, and vignette masks that eliminate container seams to create a continuous, scrollable tapestry.

---

## 🛠️ Built With

- **Framework:** [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/) (imports via `motion/react`)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 🚀 Running Locally

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/The-Whispering-Forest---Anime-Landing-Page.git
   cd The-Whispering-Forest---Anime-Landing-Page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## ☁️ Deploying to Vercel

This project is optimized for direct hosting on [Vercel](https://vercel.com/):

1. **Import the repository** into your Vercel Dashboard.
2. Vercel will automatically detect the **Vite** configuration.
3. Keep the default settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**. Your live cinematic experience will be ready in seconds.