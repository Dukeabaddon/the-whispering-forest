export interface NewsItem {
  id: string;
  date: string;
  category: 'ANNOUNCEMENT' | 'BLU-RAY' | 'EVENT' | 'MUSIC' | 'VISUAL' | 'ON AIR' | 'OAD' | 'SEASON 1';
  titleEN: string;
  titleJP: string;
  content: string;
  link?: string;
}

export interface Character {
  id: string;
  nameEN: string;
  nameJP: string;
  titleJP: string;
  role: string;
  description: string;
  quoteJP: string;
  quoteEN: string;
  voiceActorEN: string;
  voiceActorJP: string;
  image: string;
  accentColor: string;
  traits: string[];
}

export interface LoreItem {
  id: string;
  titleEN: string;
  titleJP: string;
  summary: string;
  description: string;
  quote: string;
}
