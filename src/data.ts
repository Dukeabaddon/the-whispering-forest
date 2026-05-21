import { NewsItem, Character, LoreItem } from './types';

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    date: '2026.05.20',
    category: 'VISUAL',
    titleEN: 'Teaser Visual Release - The Thorn Mage and the Sleigh Beggy',
    titleJP: '第2弾キービジュアル解禁「棘の魔法使いと夜の愛し仔」',
    content: 'The official visual website has updated with our second key teaser art. Designed by the chief animator, it showcases Chise Hatori leaning towards the enigmatic Elias Ainsworth in the shimmering dusk.'
  },
  {
    id: 'news-2',
    date: '2026.05.14',
    category: 'MUSIC',
    titleEN: 'Opening Theme "Here" performed by JUNNA, Music by Junichi Matsumoto',
    titleJP: '主題歌決定：JUNNA「Here」・音楽は松本淳一が担当',
    content: 'We are proud to announce the musical direction. JUNNA delivers a powerful performance with "Here", coupled with atmospheric compositions from Junichi Matsumoto that capture the haunting beauty of Oxfordshire.'
  },
  {
    id: 'news-3',
    date: '2026.04.28',
    category: 'BLU-RAY',
    titleEN: 'Limited Premium Edition Blu-ray Volume 1 Box Art Unveiled',
    titleJP: 'BD＆DVD第1巻 豪華三方背BOXジャケットイラスト公開',
    content: 'Volume 1 includes an exclusive 64-page fantasy artbook, a replica of Chise’s green obsidian protective talisman, and director’s cut commentary.'
  },
  {
    id: 'news-4',
    date: '2026.04.15',
    category: 'EVENT',
    titleEN: 'Exhibition at Kyoto Ancient Shrine - Original Canvas Displays',
    titleJP: '京都の古刹にて特別絵画展：手書き美術背景の全貌',
    content: 'A limited historical canvas showcase. Visitors can walk through illuminated forest backgrounds painted by hand with traditional watercolor and film grain overlays.'
  }
];

export const CHARACTERS: Character[] = [
  {
    id: 'chise',
    nameEN: 'Chise Hatori',
    nameJP: '羽鳥チセ',
    titleJP: '夜の愛し仔 — 影の魔法使いの弟子',
    role: 'THE VESSEL',
    description: 'A quiet, red-haired young girl known as a "Sleigh Beggy" — a rare entity possessing immense magical capacity but a body that decays under its load. Having sold herself at an auction to find a home, she enters a deep pact with Elias Ainsworth, becoming both his apprentice and future bride.',
    quoteJP: '「私には、帰る場所なんて、どこにもなかった……でも今は……」',
    quoteEN: '“I never had a place to return to... but now, as a mage’s apprentice, I might have found a home.”',
    voiceActorJP: 'Atsumi Tanezaki (種﨑敦美)',
    voiceActorEN: 'Sarah Wiedenheft',
    image: 'https://nxsnjqfqtwiaoedulnpr.supabase.co/storage/v1/object/public/tag-images/characters/8c46f315-4fbb-467f-8480-5e812d660734/1773864740027.png',
    accentColor: '#9C4B4B', // Muted Crimson
    traits: ['Sleigh Beggy', 'Red Hair', 'Mage Apprentice', 'Ancient Pact']
  },
  {
    id: 'elias',
    nameEN: 'Elias Ainsworth',
    nameJP: 'エリアス・エインズワース',
    titleJP: '影の魔法使い — 骨頭の魔術師',
    role: 'THE ANCIENT MAGE',
    description: 'An ancient, towering shadow-weaver and non-human mage residing in a quaint British manor. Bearing the head of a canine skull with curving horns and clothed in formal Victorian robes, he is a creature of dual nature — both childishly innocent and frighteningly monstrous.',
    quoteJP: '「私はお前を、私の弟子、そして花嫁にするつもりだよ。」',
    quoteEN: '“I intend to make you my apprentice, and in time, perhaps my bride.”',
    voiceActorJP: 'Ryota Takeuchi (竹内良太)',
    voiceActorEN: 'Brian Mathis',
    image: 'https://preview.redd.it/elias-ainsworth-from-ancient-magus-bride-v0-22kbtkurj8ke1.jpg?width=640&crop=smart&auto=webp&s=17e0cb2349711fc8a7b2b69a864569ed3a44140f',
    accentColor: '#2F4633', // Moss Green
    traits: ['Shadow Wood Magic', 'Canine Skull', 'Victorian Robes', 'Ancient Pact']
  },
  {
    id: 'silky',
    nameEN: 'Lady Silver',
    nameJP: 'シルバーレディ',
    titleJP: '旧い館の守り手 — 銀の君 (シルキー)',
    role: 'THE HOUSEKEEPER',
    description: 'The silent, beautiful housekeeper of Elias\'s English cottage. Originally a banshee seeking a home, she was transformed into a brownie by a spriggan. Dressed in elegant Edwardian gowns, she takes pride in managing the household chore-work with perfection and warmth.',
    quoteJP: '「（静かに一礼をし、暖かな焼き立てのスコーンを差し出す。）」',
    quoteEN: '“(Gently bows, offering freshly baked scones over steaming tea.)”',
    voiceActorJP: 'Aya Endo (遠藤綾)',
    voiceActorEN: 'Rachel Glass',
    image: 'https://i.pinimg.com/736x/fc/59/0b/fc590b718c24fa30afa08c5652b7510f.jpg',
    accentColor: '#C89B5B', // Ember Gold
    traits: ['Edwardian Gown', 'Silent Brownie', 'Scone Baker', 'Cottage Guard']
  }
];

export const LORE_ITEMS: LoreItem[] = [
  {
    id: 'sleigh-beggy',
    titleEN: 'Sleigh Beggy',
    titleJP: '夜の愛し仔 （スレイ・ベガ）',
    summary: 'A rare breed of absolute magical catalysts who endlessly generate and attract high concentrations of magical energy from their surroundings.',
    description: 'Often referred to as "unfortunate children," Sleigh Beggys possess an extraordinary capacity to gather and generate mana, making them highly beloved by fairies, spirits, and ancient beasts. However, this non-stop influx of heavy spiritual power places a fatal burden on their physical organs, typically leading to early mortality unless anchored by a protective magic pact or seasoned containment.',
    quote: '“They gather love, they bleed warmth, and they burn bright... but their candles are short.”'
  },
  {
    id: 'neighbours',
    titleEN: 'The Neighbours',
    titleJP: '隣人・妖精たち （ありえる）',
    summary: 'Invisible to common mortals, these are the ancient fairies, elementals, and eldritch entities that co-exist alongside humanity.',
    description: 'Also named "Ariel," "the Good People," or simply "The Neighbours," they populate England\'s ancient misty thickets. They do not hold human standards of morality—while they can offer whimsical blessings or sweet honey-cakes, they are equally prone to leading distracted travelers permanently astray into the eternal dark paths of the fairy world.',
    quote: '“Speak to them with perfect courtesy, Chise. Never accept their food unless you intend to stay forever.”'
  },
  {
    id: 'mages-compact',
    titleEN: "Mage's Compact",
    titleJP: '魔法使いの契約 （めいやく）',
    summary: 'The profound apprentice-bride pact sealed between the towering canine-skulled shadow-weaver Elias Ainsworth and Chise Hatori.',
    description: 'Having sold herself at a secret London auction to escape a life of despair, Chise binds her fate to Elias in exchange for a warm hearth, magical training to manage her Sleigh Beggy condition, and a family home. Through this covenant, Elias learns human sentiment and delicate emotions, while Chise learns to value her own lifespan and find her place in the world.',
    quote: '“I intend to make you my apprentice, and in time, perhaps my bride.”'
  }
];
