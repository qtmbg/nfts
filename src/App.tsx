import React, { useState, useEffect, type ReactNode } from 'react';
import {
  X,
  ArrowRight,
  Twitter,
  MessageCircle,
  Camera,
  Check,
} from 'lucide-react';

type FallbackImageProps = {
  src?: string | null;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  fallbackNode: ReactNode;
};

type CollectionItem = {
  id: string;
  series: string;
  city: string;
  country: string;
  emoji: string;
  price: string;
  editions: number;
  minted: number;
  status: string;
  coords: string;
  year: number;
  category: string;
  description: string;
  story: string;
  color: string;
  img?: string | null;
  icon?: string;
};

type SiteItem = {
  city: string;
  country: string;
  icon: string;
  color: string;
  accent: string;
  region: string;
  type: string;
  img?: string;
};

// --- ROBUST IMAGE FALLBACK COMPONENT ---
const FallbackImage = ({ src, alt, className, style, fallbackNode }: FallbackImageProps) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return <>{fallbackNode}</>;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setHasError(true)}
    />
  );
};

// --- DATA ---
const COLLECTIONS_DATA: CollectionItem[] = [
  {
    id: 'marrakech',
    series: 'World Drop 01',
    city: 'Marrakech',
    country: 'Morocco',
    emoji: '🇲🇦',
    price: '◎ 0.15 SOL',
    editions: 5000,
    minted: 3760,
    status: 'Live',
    coords: '31.6311°N 7.9811°W',
    year: 1985,
    category: 'Cultural',
    description:
      'A stamp-inspired collectible dedicated to the geometry, color, rhythm, and memory of the medina.',
    story:
      "Marrakech opens the WORLDMARKS series with a collectible built around walls, thresholds, carved detail, and sun-washed mineral tones. It is a tribute to one of the world's most magnetic urban identities.",
    color: '#C24A1E',
    img: '/Marrakech.png',
  },
  {
    id: 'cairo',
    series: 'World Drop 02',
    city: 'Cairo',
    country: 'Egypt',
    emoji: '🇪🇬',
    price: '◎ 0.15 SOL',
    editions: 5000,
    minted: 2199,
    status: 'Live',
    coords: '30.0444°N 31.2357°E',
    year: 1979,
    category: 'Cultural',
    description:
      'A monumental collectible shaped by desert gold, dynastic scale, and architectural continuity.',
    story:
      'Cairo enters the atlas as a city of endurance and awe. The collectible language draws on silhouette, monumentality, and the emotional weight of civilization layered across millennia.',
    color: '#C27F1E',
    img: '/Cairo.png',
  },
  {
    id: 'rio',
    series: 'World Drop 03',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    emoji: '🇧🇷',
    price: '◎ 0.15 SOL',
    editions: 5000,
    minted: 4500,
    status: 'Live',
    coords: '22.9068°S 43.1729°W',
    year: 2012,
    category: 'Cultural',
    description:
      'A lush and elevated collectible shaped by mountain, sea, curve, and sacred presence.',
    story:
      'Rio brings a different emotional frequency to the atlas: light, elevation, tropical force, and a sense of living spectacle. The Carioca landscape is a place where nature and city become one.',
    color: '#1A5C3A',
    img: '/Rio.png',
  },
  {
    id: 'havana',
    series: 'World Drop 04',
    city: 'Havana',
    country: 'Cuba',
    emoji: '🇨🇺',
    price: '◎ 0.15 SOL',
    editions: 5000,
    minted: 1900,
    status: 'Live',
    coords: '23.1136°N 82.3666°W',
    year: 1982,
    category: 'Cultural',
    description:
      'A vintage-modern collectible shaped by façades, sea air, patina, and cultural rhythm.',
    story:
      'Havana is treated as atmosphere made collectible: color memory, urban nostalgia, and architectural charisma. A city that dances between centuries.',
    color: '#1A6E8A',
    img: '/Havana.png',
  },
  {
    id: 'sydney',
    series: 'World Drop 05',
    city: 'Sydney',
    country: 'Australia',
    emoji: '🇦🇺',
    price: '◎ 0.15 SOL',
    editions: 5000,
    minted: 2450,
    status: 'Live',
    coords: '33.8688°S 151.2093°E',
    year: 2007,
    category: 'Cultural',
    description:
      'A striking collectible capturing the iconic sails and deep harbor blues of a modern wonder.',
    story:
      'Sydney enters the atlas as a masterpiece of 20th-century architecture. The collectible reflects its soaring, shell-like structures and the interplay of light and water.',
    color: '#1A4A8A',
    icon: '🌉',
    img: '/Sydney.png',
  },
  {
    id: 'bangkok',
    series: 'World Drop 06',
    city: 'Bangkok',
    country: 'Thailand',
    emoji: '🇹🇭',
    price: '◎ 0.15 SOL',
    editions: 5000,
    minted: 3120,
    status: 'Live',
    coords: '13.7563°N 100.5018°E',
    year: 1991,
    category: 'Cultural',
    description:
      'A vibrant collectible shaped by sacred temples, golden spires, and spiritual continuity.',
    story:
      'Bangkok brings a radiant energy to the atlas. The collectible honors the intricate craftsmanship, golden light, and historic temple complexes of the region.',
    color: '#8B5A1A',
    icon: '🛕',
    img: '/Bangkok.png',
  },
];

const ALL_SITES: SiteItem[] = [
  { city: 'Marrakech', country: 'Morocco', icon: '🇲🇦', color: '#C24A1E', accent: '#E8A84B', region: 'africa', type: 'cultural', img: '/Marrakech.png' },
  { city: 'Rio de Janeiro', country: 'Brazil', icon: '🇧🇷', color: '#1A5C3A', accent: '#C8A84B', region: 'latin', type: 'cultural', img: '/Rio.png' },
  { city: 'Havana', country: 'Cuba', icon: '🇨🇺', color: '#1A6E8A', accent: '#C8A84B', region: 'latin', type: 'cultural', img: '/Havana.png' },
  { city: 'Sydney', country: 'Australia', icon: '🇦🇺', color: '#1A4A8A', accent: '#E8C8F0', region: 'asia', type: 'cultural', img: '/Sydney.png' },
  { city: 'Cairo', country: 'Egypt', icon: '🇪🇬', color: '#C27F1E', accent: '#F5D78A', region: 'arab', type: 'cultural', img: '/Cairo.png' },
  { city: 'Bangkok', country: 'Thailand', icon: '🇹🇭', color: '#8B5A1A', accent: '#E8C8F0', region: 'asia', type: 'cultural', img: '/Bangkok.png' },
  { city: 'Petra', country: 'Jordan', icon: '🏜️', color: '#8B3A1E', accent: '#E8C87A', region: 'arab', type: 'cultural' },
  { city: 'Venice', country: 'Italy', icon: '🚣', color: '#1A4A8A', accent: '#E8D0A0', region: 'europe', type: 'cultural' },
  { city: 'Machu Picchu', country: 'Peru', icon: '🏔️', color: '#2A5C2A', accent: '#A8C87A', region: 'latin', type: 'mixed' },
  { city: 'Angkor', country: 'Cambodia', icon: '🛕', color: '#5C3A1A', accent: '#E8B87A', region: 'asia', type: 'cultural' },
  { city: 'Stonehenge', country: 'UK', icon: '🪨', color: '#3A3A5C', accent: '#A8A8C8', region: 'europe', type: 'cultural' },
  { city: 'Alhambra', country: 'Spain', icon: '🏯', color: '#8B2A1A', accent: '#E8B07A', region: 'europe', type: 'cultural' },
  { city: 'Versailles', country: 'France', icon: '🌹', color: '#3A2A5C', accent: '#C8A8E8', region: 'europe', type: 'cultural' },
  { city: 'Acropolis', country: 'Greece', icon: '🏛️', color: '#3A5C2A', accent: '#C8E8A8', region: 'europe', type: 'cultural' },
  { city: 'Taj Mahal', country: 'India', icon: '🕌', color: '#2A3A5C', accent: '#A8C8E8', region: 'asia', type: 'cultural' },
  { city: 'Great Wall', country: 'China', icon: '🧱', color: '#5C3A2A', accent: '#E8C8A8', region: 'asia', type: 'cultural' },
  { city: 'Colosseum', country: 'Italy', icon: '🏟️', color: '#5C2A1A', accent: '#E8A87A', region: 'europe', type: 'cultural' },
  { city: 'Chichén Itzá', country: 'Mexico', icon: '🗿', color: '#3A5C3A', accent: '#A8E8A8', region: 'latin', type: 'cultural' },
  { city: 'Dubrovnik', country: 'Croatia', icon: '🌊', color: '#1A3A5C', accent: '#A8C8E8', region: 'europe', type: 'cultural' },
  { city: 'Fez', country: 'Morocco', icon: '🕌', color: '#8B5A1A', accent: '#E8C87A', region: 'africa', type: 'cultural' },
  { city: 'Luang Prabang', country: 'Laos', icon: '🛕', color: '#5C3A8B', accent: '#C8A8E8', region: 'asia', type: 'cultural' },
  { city: 'Lalibela', country: 'Ethiopia', icon: '⛪', color: '#5C2A2A', accent: '#E8A8A8', region: 'africa', type: 'cultural' },
  { city: 'Samarkand', country: 'Uzbekistan', icon: '🕌', color: '#1A5C5C', accent: '#A8E8E8', region: 'asia', type: 'cultural' },
  { city: 'Borobudur', country: 'Indonesia', icon: '🛕', color: '#3A5C1A', accent: '#A8E87A', region: 'asia', type: 'cultural' },
  { city: 'Prague', country: 'Czechia', icon: '🏰', color: '#2A1A5C', accent: '#A8A8E8', region: 'europe', type: 'cultural' },
  { city: 'Kyoto', country: 'Japan', icon: '⛩️', color: '#6B2D8B', accent: '#E8C8F0', region: 'asia', type: 'cultural' },
  { city: 'Istanbul', country: 'Türkiye', icon: '🕌', color: '#1A3A7A', accent: '#C8A84B', region: 'europe', type: 'cultural' },
  { city: 'Cartagena', country: 'Colombia', icon: '🏯', color: '#8B1A3A', accent: '#E8A8C8', region: 'latin', type: 'cultural' },
  { city: 'Valletta', country: 'Malta', icon: '🏛️', color: '#3A5C5C', accent: '#A8E8D0', region: 'europe', type: 'cultural' },
  { city: 'Oaxaca', country: 'Mexico', icon: '🎨', color: '#5C2A5C', accent: '#E8A8E8', region: 'latin', type: 'cultural' },
  { city: 'Kathmandu', country: 'Nepal', icon: '🏔️', color: '#5C3A1A', accent: '#E8B87A', region: 'asia', type: 'cultural' },
  { city: 'Timbuktu', country: 'Mali', icon: '🕌', color: '#8B6A1A', accent: '#E8D07A', region: 'africa', type: 'cultural' },
  { city: 'Hoi An', country: 'Vietnam', icon: '🏮', color: '#8B5A1A', accent: '#E8C87A', region: 'asia', type: 'cultural' },
  { city: 'Bruges', country: 'Belgium', icon: '⛪', color: '#1A3A5C', accent: '#A8C8E8', region: 'europe', type: 'cultural' },
  { city: 'Salzburg', country: 'Austria', icon: '🎼', color: '#2A5C3A', accent: '#A8E8C8', region: 'europe', type: 'cultural' },
  { city: 'Luxor', country: 'Egypt', icon: '🗿', color: '#8B7A1A', accent: '#E8E07A', region: 'arab', type: 'cultural' },
  { city: 'Vilnius', country: 'Lithuania', icon: '⛪', color: '#3A5C2A', accent: '#C8E8A8', region: 'europe', type: 'cultural' },
  { city: 'Kotor', country: 'Montenegro', icon: '🏰', color: '#1A4A5C', accent: '#A8D0E8', region: 'europe', type: 'cultural' },
  { city: 'Bagan', country: 'Myanmar', icon: '🛕', color: '#8B4A1A', accent: '#E8C07A', region: 'asia', type: 'cultural' },
  { city: 'Tikal', country: 'Guatemala', icon: '🌴', color: '#1A5C2A', accent: '#A8E87A', region: 'latin', type: 'mixed' },
];

const HERO_STAMPS = [
  { id: 'rio', color: '#1A5C3A', border: '#C8A84B', img: '/Rio.png', name: 'RIO DE JANEIRO', delay: '0s' },
  { id: 'cairo', color: '#C27F1E', border: '#F5D78A', img: '/Cairo.png', name: 'CAIRO', delay: '0.4s' },
  { id: 'marrakech', color: '#C24A1E', border: '#E8A84B', img: '/Marrakech.png', name: 'MARRAKECH', delay: '1.2s' },
  { id: 'havana', color: '#1A6E8A', border: '#C8A84B', img: '/Havana.png', name: 'HAVANA', delay: '0.8s' },
  { id: 'sydney', color: '#1A4A8A', border: '#E8C8F0', img: '/Sydney.png', name: 'SYDNEY', delay: '0.2s' },
  { id: 'bangkok', color: '#8B5A1A', border: '#E8C8F0', img: '/Bangkok.png', name: 'BANGKOK', delay: '0.6s' },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [mintModalOpen, setMintModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');

    const [activeCollectionId, setActiveCollectionId] = useState('marrakech');
  const [activeFilter, setActiveFilter] = useState('all');
  const [explorerPage, setExplorerPage] = useState(1);
  const [emailJoined, setEmailJoined] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const PAGE_SIZE = 18;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMint = (city: string) => {
    setSelectedCity(city);
    setMintModalOpen(true);
  };

  const connectWallet = () => {
    setWalletConnected(true);
    setWalletModalOpen(false);
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setExplorerPage(1);
  };

  const handleEmailJoin = () => {
    if (emailInput && emailInput.includes('@')) {
      setEmailJoined(true);
    }
  };

  const filteredExplorer = ALL_SITES.filter((d) => {
    if (activeFilter === 'all') return true;
    if (['cultural', 'natural', 'mixed'].includes(activeFilter)) return d.type === activeFilter;
    return d.region === activeFilter;
  });

  const visibleExplorerSites = filteredExplorer.slice(0, explorerPage * PAGE_SIZE);
  const remainingSites = filteredExplorer.length - visibleExplorerSites.length;

  const activeCollection =
    COLLECTIONS_DATA.find((c) => c.id === activeCollectionId) || COLLECTIONS_DATA[0];
  const activePct = activeCollection?.editions
    ? Math.round((activeCollection.minted / activeCollection.editions) * 100)
    : 0;

  const totalEditions = COLLECTIONS_DATA.reduce((acc, c) => acc + c.editions, 0);
  const totalMinted = COLLECTIONS_DATA.reduce((acc, c) => acc + c.minted, 0);
  const totalPct = totalEditions > 0 ? Math.round((totalMinted / totalEditions) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F0EEE8] font-sans selection:bg-[#C8A84B]/30 overflow-x-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          --gold: #C8A84B;
          --gold-light: #E8C96A;
          --gold-dark: #9A7C2E;
          --ink: #0A0A0F;
          --surface-2: #181825;
          --border: rgba(200,168,75,0.2);
        }
        .font-display { font-family: 'Georgia', 'Times New Roman', serif; }
        .nav-logo-mark { background: conic-gradient(from 0deg, var(--gold-dark), var(--gold), var(--gold-light), var(--gold), var(--gold-dark)); }
        .hero-bg {
          background: radial-gradient(ellipse 80% 60% at 50% 30%, rgba(200,168,75,0.08) 0%, transparent 70%),
                      radial-gradient(ellipse 50% 50% at 20% 80%, rgba(26,92,58,0.15) 0%, transparent 60%),
                      radial-gradient(ellipse 40% 50% at 80% 70%, rgba(194,74,30,0.12) 0%, transparent 60%);
        }
        .hero-grid {
          background-image: linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%);
        }
        .stamp-float { animation: floatStamp 4s ease-in-out infinite; }
        @keyframes floatStamp { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        .stamp-float:hover { animation-play-state: paused; transform: scale(1.08) rotate(-3deg); }
        .pledge-badge {
          background: conic-gradient(from 0deg, var(--gold-dark) 0%, var(--gold) 30%, var(--gold-light) 50%, var(--gold) 70%, var(--gold-dark) 100%);
          box-shadow: 0 0 80px rgba(200,168,75,0.25);
        }
        .preserve-3d { transform-style: preserve-3d; }
.backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
.rotate-y-180 { transform: rotateY(180deg); }

.flip-card {
  perspective: 800px;
}

.flip-inner {
  transform-style: preserve-3d;
  transition: transform 800ms;
}

.flip-card:hover .flip-inner {
  transform: rotateY(180deg);
}
        .flip-card {
  perspective: 800px;
}

.flip-inner {
  transform-style: preserve-3d;
  transition: transform 800ms;
}

.flip-card:hover .flip-inner {
  transform: rotateY(180deg);
}

.backface-hidden {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
        .col-list-item.active { border-color: var(--gold); background: rgba(200,168,75,0.1); }
      `,
        }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 border-b border-[#C8A84B]/20 backdrop-blur-xl transition-all duration-300 ${scrolled ? 'bg-[#0A0A0F]/95 py-3' : 'bg-[#0A0A0F]/85 py-5'}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 font-display text-xl tracking-wider">
            <div className="w-9 h-9 nav-logo-mark rounded-full flex items-center justify-center text-xs font-bold text-[#0A0A0F]">
              W
            </div>
            WORLDMARKS
          </a>
          <ul className="hidden md:flex gap-9 text-sm font-medium tracking-wide text-[#7A7A9A]">
            <li><a href="#collections" className="hover:text-[#F0EEE8] transition-colors">Collections</a></li>
            <li><a href="#explorer" className="hover:text-[#F0EEE8] transition-colors">Explorer</a></li>
            <li><a href="#preservation" className="hover:text-[#F0EEE8] transition-colors">Preservation</a></li>
            <li><a href="#roadmap" className="hover:text-[#F0EEE8] transition-colors">Roadmap</a></li>
          </ul>
          <button
            onClick={() => setWalletModalOpen(true)}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all border ${
              walletConnected
                ? 'bg-[#C8A84B]/15 text-[#C8A84B] border-[#C8A84B]/30'
                : 'bg-[#C8A84B] text-[#0A0A0F] border-[#E8C96A] hover:bg-[#E8C96A] hover:-translate-y-0.5'
            }`}
          >
            {walletConnected ? '5Xk9…aF3b' : 'Connect Wallet'}
          </button>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 hero-bg"></div>
        <div className="absolute inset-0 hero-grid"></div>

        <div className="relative z-10 text-center w-full max-w-5xl px-6 mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C8A84B]/20 bg-[#C8A84B]/10 text-xs font-semibold tracking-widest uppercase text-[#C8A84B] mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C8A84B] animate-pulse"></div>
            Built on Solana · Supporting Preservation
          </div>

          <h1 className="font-display text-5xl md:text-7xl leading-[1.1] tracking-tight mb-6">
            Collect the World's
            <br />
            <em className="text-[#C8A84B] italic">Greatest Places</em>
          </h1>

          <p className="text-lg md:text-xl text-[#7A7A9A] max-w-2xl mx-auto mb-10 leading-relaxed">
            Each WORLDMARKS NFT is a hand-crafted digital stamp honoring a globally recognized World Heritage Site.
            Pure collectibles. Timeless beauty. Every mint supports independent heritage preservation.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="#collections"
              className="px-8 py-3.5 rounded-xl bg-[#C8A84B] text-[#0A0A0F] font-bold tracking-wide border border-[#E8C96A] hover:bg-[#E8C96A] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(200,168,75,0.3)] transition-all"
            >
              Explore Collections
            </a>
            <button
              onClick={() => setWalletModalOpen(true)}
              className="px-8 py-3.5 rounded-xl bg-transparent text-[#F0EEE8] font-semibold tracking-wide border border-[#F0EEE8]/25 hover:border-[#F0EEE8]/50 hover:bg-[#F0EEE8]/5 transition-all"
            >
              Connect Wallet
            </button>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 md:gap-6 justify-items-center relative mx-auto w-full">
            {HERO_STAMPS.map((stamp, i) => (
              <div
                key={i}
                className="stamp-float w-[90px] h-[90px] sm:w-[115px] sm:h-[115px] lg:w-[130px] lg:h-[130px] rounded-full border-[3px] flex items-center justify-center relative cursor-pointer overflow-hidden p-0 shrink-0"
                style={{
                  animationDelay: stamp.delay,
                  borderColor: stamp.border,
                  boxShadow: `0 8px 30px ${stamp.color}66`,
                }}
              >
                <FallbackImage
                  src={stamp.img}
                  alt={stamp.name}
                  className="w-full h-full object-cover rounded-full"
                  fallbackNode={
                    <div
                      className="w-full h-full rounded-full flex flex-col items-center justify-center relative p-1"
                      style={{ background: `radial-gradient(circle, ${stamp.color} 0%, #0A0A0F 100%)` }}
                    >
                      <div className="absolute inset-1.5 sm:inset-2 rounded-full border border-dashed border-[#C8A84B]/40 pointer-events-none"></div>
                      <div className="font-display text-[7px] sm:text-[10px] font-bold tracking-widest text-center px-1 uppercase text-[#E8C96A] drop-shadow-md leading-tight">
                        {stamp.name}
                      </div>
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#181825] border-y border-[#C8A84B]/20 py-8">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#C8A84B]/20 text-center">
          <div className="p-4"><div className="font-display text-3xl text-[#C8A84B] mb-1">1,248</div><div className="text-xs text-[#7A7A9A] tracking-widest uppercase">Heritage Sites</div></div>
          <div className="p-4"><div className="font-display text-3xl text-[#C8A84B] mb-1">170</div><div className="text-xs text-[#7A7A9A] tracking-widest uppercase">Countries</div></div>
          <div className="p-4"><div className="font-display text-3xl text-[#C8A84B] mb-1">4,281</div><div className="text-xs text-[#7A7A9A] tracking-widest uppercase">Stamps Minted</div></div>
          <div className="p-4"><div className="font-display text-3xl text-[#C8A84B] mb-1">$8,420</div><div className="text-xs text-[#7A7A9A] tracking-widest uppercase">To Preservation</div></div>
        </div>
      </div>

      <section id="collections" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A84B] mb-2">Featured Collections</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.15]">
              A City Atlas Built
              <br />
              as a Collectible Series
            </h2>
            <p className="mt-4 text-base text-[#7A7A9A] max-w-[540px] leading-relaxed">
              Each release has its own visual identity, edition count, and narrative.
              Select a city to preview the stamp, read its story, and enter the mint.
            </p>
          </div>
          <a href="#explorer" className="mt-4 md:mt-0 text-sm font-bold text-[#C8A84B] flex items-center gap-2 group hover:gap-3 transition-all">
            View All Sites <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6 mb-6 items-start">
          <div className="flex flex-col gap-2.5">
            {COLLECTIONS_DATA.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCollectionId(c.id)}
                className={`col-list-item rounded-[16px] border border-[#C8A84B]/20 bg-[#181825] p-[14px_18px] text-left w-full hover:border-[#C8A84B]/40 hover:bg-[#C8A84B]/5 ${activeCollectionId === c.id ? 'active border-[#C8A84B] bg-[#C8A84B]/10 shadow-[0_0_20px_rgba(200,168,75,0.1)]' : ''}`}
              >
                <div className="flex justify-between items-start mb-0.5">
                  <div className="text-[9px] tracking-[0.18em] uppercase text-[#C8A84B]">{c.series}</div>
                  {c.status === 'Live' && <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>}
                </div>
                <div className="font-display text-[20px] mb-0.5 text-[#F0EEE8]">{c.emoji} {c.city}</div>
                <div className="text-[11px] text-[#7A7A9A] mb-1.5">{c.country} · {c.category} · {c.year}</div>
                <div className="text-[12px] text-[#7A7A9A] leading-[1.6] line-clamp-2">{c.description}</div>
                <div className="flex justify-between items-center mt-2.5 pt-2.5 border-t border-[#C8A84B]/10">
                  <span className="text-[12px] font-bold text-[#C8A84B]">{c.price}</span>
                  <span className="text-[10px] text-[#7A7A9A] tracking-wider">{c.minted.toLocaleString()} / {c.editions.toLocaleString()}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="sticky top-[90px] flex flex-col gap-4">
            <div className="rounded-[20px] border border-[#C8A84B]/20 bg-[#181825] overflow-hidden shadow-2xl">
              <div className="w-full aspect-square relative group overflow-hidden bg-[#0A0A0F]">
                <FallbackImage
                  src={activeCollection?.img}
                  alt={activeCollection?.city}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  fallbackNode={
                    <div className="w-full h-full flex flex-col items-center justify-center" style={{ background: activeCollection?.color }}>
                      <span className="font-display text-3xl text-white/50 mb-2">Image Not Found</span>
                      <span className="text-white font-bold">{activeCollection?.city}</span>
                    </div>
                  }
                />
              </div>
              <div className="p-6">
                <div className="text-[11px] text-[#7A7A9A] mb-1.5 flex items-center gap-1.5 uppercase tracking-wider">📍 {activeCollection?.coords}</div>
                <div className="font-display text-3xl mb-2.5">{activeCollection?.city}</div>
                <p className="text-sm text-[#7A7A9A] leading-[1.8] mb-5">{activeCollection?.story}</p>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-[#0A0A0F] border border-[#C8A84B]/20 rounded-[10px] p-3">
                    <div className="text-[11px] text-[#7A7A9A] mb-1">Mint Price</div>
                    <div className="text-sm font-semibold text-[#C8A84B]">{activeCollection?.price}</div>
                  </div>
                  <div className="bg-[#0A0A0F] border border-[#C8A84B]/20 rounded-[10px] p-3">
                    <div className="text-[11px] text-[#7A7A9A] mb-1">Edition Size</div>
                    <div className="text-sm font-semibold">{activeCollection?.editions.toLocaleString()}</div>
                  </div>
                  <div className="bg-[#0A0A0F] border border-[#C8A84B]/20 rounded-[10px] p-3">
                    <div className="text-[11px] text-[#7A7A9A] mb-1">Preservation</div>
                    <div className="text-sm font-semibold">Heritage Fund</div>
                  </div>
                  <div className="bg-[#0A0A0F] border border-[#C8A84B]/20 rounded-[10px] p-3">
                    <div className="text-[11px] text-[#7A7A9A] mb-1">Status</div>
                    <div className="text-sm font-semibold text-[#4ADE80]">{activeCollection?.status} ●</div>
                  </div>
                </div>

                <div className="flex justify-between text-xs text-[#7A7A9A] mb-1.5">
                  <span>Mint progress</span>
                  <span>{activeCollection?.minted.toLocaleString()} / {activeCollection?.editions.toLocaleString()}</span>
                </div>
                <div className="h-[5px] bg-[#C8A84B]/15 rounded-full overflow-hidden mb-5">
                  <div className="h-full rounded-full transition-all duration-700" style={{ width: `${activePct}%`, background: activeCollection?.color }}></div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => openMint(activeCollection?.city ?? '')}
                    className="flex-1 py-3 px-6 rounded-full bg-[#C8A84B] text-[#0A0A0F] text-sm font-bold border border-[#E8C96A] hover:bg-[#E8C96A] transition-colors"
                  >
                    Mint This Stamp
                  </button>
                  <button className="py-3 px-6 rounded-full bg-transparent text-[#F0EEE8] text-sm font-semibold border border-[#F0EEE8]/20 hover:border-[#F0EEE8]/40 hover:bg-[#F0EEE8]/5 transition-colors">
                    View Archive
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-[20px] border border-[#C8A84B]/20 bg-[linear-gradient(135deg,rgba(200,168,75,0.08)_0%,rgba(10,10,15,1)_100%)] p-5 hidden lg:block relative overflow-hidden shadow-lg">
              <div className="flex justify-between items-end relative z-10">
                <div>
                  <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#C8A84B] mb-1.5">Genesis Atlas Status</div>
                  <div className="text-sm font-semibold text-[#F0EEE8] tracking-wide">
                    {totalMinted.toLocaleString()} <span className="text-[#7A7A9A] font-normal">/ {totalEditions.toLocaleString()} Stamps Minted</span>
                  </div>
                </div>
                <div className="text-right w-1/2 max-w-[130px]">
                  <div className="text-[9px] text-[#C8A84B] font-bold uppercase tracking-widest mb-1.5">{totalPct}% Preserved</div>
                  <div className="h-[3px] w-full bg-[#C8A84B]/20 rounded-full overflow-hidden">
                    <div className="h-full bg-[#C8A84B] rounded-full transition-all duration-1000" style={{ width: `${totalPct}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="py-24 bg-[#181825] border-t border-[#C8A84B]/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A84B] mb-2">Impact</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.15]">
              A Visible
              <br />
              Contribution Layer
            </h2>
            <p className="mt-4 text-base text-[#7A7A9A] max-w-[440px] leading-[1.8]">
              WORLDMARKS is not built on financial promises. The value lies in collecting
              extraordinary places and supporting a transparent donation model tied to primary sales volume.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              <div className="p-4 border border-[#C8A84B]/20 rounded-[14px] bg-[#0A0A0F]">
                <div className="text-xs text-[#C8A84B] tracking-[0.1em] uppercase mb-1.5">Contribution Rule</div>
                <div className="text-[13px] text-[#7A7A9A] leading-relaxed">A dedicated portion of primary mint revenue is allocated to an independent preservation donation pool</div>
              </div>
              <div className="p-4 border border-[#C8A84B]/20 rounded-[14px] bg-[#0A0A0F]">
                <div className="text-xs text-[#C8A84B] tracking-[0.1em] uppercase mb-1.5">Collector Clarity</div>
                <div className="text-[13px] text-[#7A7A9A] leading-relaxed">Totals and transfers displayed in a public ledger — no ambiguity</div>
              </div>
              <div className="p-4 border border-[#C8A84B]/20 rounded-[14px] bg-[#0A0A0F]">
                <div className="text-xs text-[#C8A84B] tracking-[0.1em] uppercase mb-1.5">Public Record</div>
                <div className="text-[13px] text-[#7A7A9A] leading-relaxed">Contribution history recorded on-chain with visible receipt entries per transfer</div>
              </div>
              <div className="p-4 border border-[#C8A84B]/20 rounded-[14px] bg-[#0A0A0F]">
                <div className="text-xs text-[#C8A84B] tracking-[0.1em] uppercase mb-1.5">Positioning</div>
                <div className="text-[13px] text-[#7A7A9A] leading-relaxed">Collectible-first experience — the donation is supporting context, not a promise</div>
              </div>
            </div>
          </div>

          <div className="border border-[#C8A84B]/20 rounded-[22px] bg-[#0A0A0F] p-7 shadow-2xl">
            <div className="flex justify-between items-start pb-5 border-b border-[#C8A84B]/20 mb-5">
              <div>
                <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A84B] mb-1">Public Ledger</div>
                <div className="font-display text-xl">Contribution Panel</div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C8A84B]/20 bg-[#C8A84B]/10 text-[11px] text-[#C8A84B] tracking-wide">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse"></div> Live View
              </div>
            </div>

            <div className="space-y-2">
              {[
                { label: 'Gross Primary Sales (SOL)', val: '◎ 642.15 SOL' },
                { label: 'Allocation', val: 'Direct Donation Pool', highlight: true },
                { label: 'Total Allocated', val: '◎ 32.11 SOL (~$8,420)' },
                { label: 'Last Transfer Date', val: '15 Mar 2026' },
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-[10px] border border-[#C8A84B]/10 bg-[#181825]">
                  <span className="text-[13px] text-[#7A7A9A]">{row.label}</span>
                  <span className={`text-[13px] font-semibold ${row.highlight ? 'text-[#C8A84B]' : 'text-[#F0EEE8]'}`}>{row.val}</span>
                </div>
              ))}
              <div className="flex justify-between items-center p-3 rounded-[10px] border border-[#C8A84B]/10 bg-[#181825]">
                <span className="text-[13px] text-[#7A7A9A]">Transfer Receipts</span>
                <span className="text-[13px] font-semibold text-[#C8A84B] cursor-pointer hover:underline">View on Explorer ↗</span>
              </div>
            </div>

            <div className="flex gap-2.5 items-start p-4 rounded-[14px] bg-[#C8A84B]/10 border border-[#C8A84B]/20 mt-4">
              <span className="text-[#C8A84B] shrink-0 mt-0.5">✦</span>
              <span className="text-xs text-[#7A7A9A] leading-relaxed">
                The impact ledger makes the contribution model legible at a glance,
                without distracting from the collectible experience itself. All allocations are verifiable on-chain.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="preservation" className="py-24 border-y border-[#C8A84B]/20 bg-[linear-gradient(135deg,rgba(200,168,75,0.06)_0%,transparent_60%)]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <div className="w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full pledge-badge flex items-center justify-center p-2.5">
              <div className="w-full h-full rounded-full bg-[#0A0A0F] flex flex-col items-center justify-center text-center p-6 border border-[#C8A84B]/20">
                <div className="font-display text-4xl md:text-5xl text-[#C8A84B] leading-none mb-3">🏛️</div>
                <div className="text-xs text-[#7A7A9A] tracking-[0.1em] uppercase">A portion of<br />all mints</div>
                <div className="w-10 h-px bg-[#C8A84B]/30 my-3"></div>
                <div className="text-[10px] text-[#7A7A9A] tracking-[0.08em] uppercase">Independent<br />Heritage<br />Funds</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A84B] mb-2">Preservation</div>
            <h2 className="font-display text-3xl md:text-4xl leading-[1.2] mb-5">Collecting the World.<br />Preserving History.</h2>
            <p className="text-[#7A7A9A] leading-relaxed mb-4">
              WORLDMARKS is a collectible platform rooted in cultural appreciation. A dedicated portion of all primary mint revenue
              is automatically directed to independent heritage preservation funds, supporting the preservation,
              restoration, and promotion of the world's most irreplaceable cultural and natural sites.
            </p>
            <div className="mt-8 border border-[#C8A84B]/20 rounded-xl bg-[#0A0A0F] p-5">
              <div className="text-[11px] font-bold tracking-[0.12em] text-[#7A7A9A] uppercase mb-1">Total Verified Donations</div>
              <div className="font-display text-3xl text-[#C8A84B]">$8,420</div>
              <div className="text-[11px] text-[#7A7A9A] mt-2">Visible and trackable on the public ledger.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch">
          <div className="border border-[#C8A84B]/20 rounded-[22px] bg-[#181825] p-9">
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A84B] mb-2">Collector Archive</div>
            <h2 className="font-display text-[28px] leading-[1.2] mb-3">Built for people<br />who collect with taste.</h2>
            <p className="text-[15px] text-[#7A7A9A] leading-[1.8] mb-6">
              WORLDMARKS is designed to feel closer to an elegant stamp collector's cabinet
              than a typical NFT marketplace. Build your personal atlas of places, one mint at a time.
            </p>
            <ul className="space-y-2.5">
              {[
                'City-specific color palettes — each place owns its signature tone',
                'Stamp front & back — a complete collectible object',
                'Edition provenance & serial number on every piece',
                'Personal archive grows with each new city launch',
                'Calm, premium minting experience — no noise',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 p-3 bg-white/5 border border-[#C8A84B]/20 rounded-[10px] text-sm text-[#F0EEE8]">
                  <Check className="w-4 h-4 text-[#C8A84B] shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-[#C8A84B]/30 rounded-[22px] bg-[#C8A84B]/10 p-9 flex flex-col justify-center">
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A84B] mb-2">Collector List</div>
            <h3 className="font-display text-2xl mb-2.5">Join for upcoming drops.</h3>
            <p className="text-sm text-[#7A7A9A] leading-[1.7] mb-4">
              Get notified when new cities are released and when new chapters of the atlas open.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-2">
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Your email address"
                disabled={emailJoined}
                className="flex-1 p-3 px-5 rounded-full border border-[#C8A84B]/20 bg-[#0A0A0F] text-[#F0EEE8] text-sm min-w-[200px] focus:outline-none focus:border-[#C8A84B]"
              />
              <button
                onClick={handleEmailJoin}
                disabled={emailJoined}
                className={`p-3 px-6 rounded-full text-sm font-bold transition-all whitespace-nowrap ${emailJoined ? 'bg-[#4ADE80] text-black' : 'bg-[#C8A84B] text-[#0A0A0F] hover:bg-[#E8C96A]'}`}
              >
                {emailJoined ? '✓ Joined' : 'Join Now'}
              </button>
            </div>
            <div className="text-[11px] text-[#7A7A9A] tracking-wider uppercase mb-6">No spam. Only collection launches and atlas updates.</div>

            <div className="pt-5 border-t border-[#C8A84B]/20">
              <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A84B] mb-2.5">Next Drops</div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs text-[#7A7A9A]"><span>🇯🇵 Kyoto — World Drop 07</span><span>Q3 2026</span></div>
                <div className="flex justify-between text-xs text-[#7A7A9A]"><span>🇹🇷 Istanbul — World Drop 08</span><span>Q3 2026</span></div>
                <div className="flex justify-between text-xs text-[#7A7A9A]"><span>🇵🇪 Machu Picchu — World Drop 09</span><span>Q4 2026</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="py-24 bg-[#181825]">
        <div className="max-w-7xl mx-auto px-6">
          <div>
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A84B] mb-2">How It Works</div>
            <h2 className="font-display text-4xl leading-[1.15] mb-12">Three Steps to<br />Own a Piece of History</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-9 rounded-[20px] border border-[#C8A84B]/20 bg-[#0A0A0F] hover:border-[#C8A84B]/50 transition-colors relative">
              <div className="font-display text-5xl text-[#C8A84B]/15 mb-3 leading-none">01</div>
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="font-display text-xl mb-3">Connect Your Wallet</h3>
              <p className="text-sm text-[#7A7A9A] leading-relaxed">Use any Solana-compatible wallet — Phantom, Backpack, Solflare, or Ledger. No account required, no email needed.</p>
              <div className="hidden md:block absolute right-[-28px] top-1/2 -translate-y-1/2 text-2xl text-[#C8A84B] z-10">→</div>
            </div>
            <div className="p-9 rounded-[20px] border border-[#C8A84B]/20 bg-[#0A0A0F] hover:border-[#C8A84B]/50 transition-colors relative">
              <div className="font-display text-5xl text-[#C8A84B]/15 mb-3 leading-none">02</div>
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="font-display text-xl mb-3">Choose Your Destination</h3>
              <p className="text-sm text-[#7A7A9A] leading-relaxed">Browse 1,248+ World Heritage Sites across 170 countries. Filter by continent, category, or color palette. Find your place.</p>
              <div className="hidden md:block absolute right-[-28px] top-1/2 -translate-y-1/2 text-2xl text-[#C8A84B] z-10">→</div>
            </div>
            <div className="p-9 rounded-[20px] border border-[#C8A84B]/20 bg-[#0A0A0F] hover:border-[#C8A84B]/50 transition-colors relative">
              <div className="font-display text-5xl text-[#C8A84B]/15 mb-3 leading-none">03</div>
              <div className="text-3xl mb-4">✨</div>
              <h3 className="font-display text-xl mb-3">Mint Your Stamp</h3>
              <p className="text-sm text-[#7A7A9A] leading-relaxed">Mint at 0.15 SOL. Receive a unique serialized digital stamp. A portion of every mint goes directly to independent heritage preservation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- STAMP BACK CONCEPT --- */}
      <section id="design" className="py-24 bg-[#181825] border-t border-[#C8A84B]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div>
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A84B] mb-2">
              Design System
            </div>
            <h2 className="font-display text-4xl leading-[1.15] mb-12">
              Front &amp; Back —
              <br />
              A Complete Collectible
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="mx-auto w-[320px] flip-card">
  <div className="relative w-full h-[320px] rounded-full flip-inner cursor-pointer shadow-2xl">
                
                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden rounded-full border-[3px] border-[#E8A84B] overflow-hidden p-0 bg-[radial-gradient(circle,#C24A1E_0%,#8B300E_100%)] flex items-center justify-center">
                  <FallbackImage
                    src="/Marrakech.png"
                    alt="Marrakech stamp front"
                    className="w-full h-full object-cover rounded-full"
                    fallbackNode={
                      <div className="w-[82%] aspect-square rounded-full border-[3px] border-[#E8A84B] flex flex-col items-center justify-center relative p-3 text-center mx-auto">
                        <div className="absolute inset-[5px] rounded-full border border-dashed border-[#C8A84B]/30 pointer-events-none"></div>
                        <div className="absolute top-[16%] text-[#C8A84B] font-display text-[9px] tracking-[0.15em] font-bold uppercase">
                          CITY OF MARRAKECH
                        </div>
                        <div className="text-5xl mb-1 sepia-[0.3]">🕌</div>
                        <div className="font-display text-[11px] text-[#E8A84B] tracking-[0.12em] uppercase font-bold">
                          Marrakech
                        </div>
                        <div className="text-[7px] text-[#E8A84B]/70 tracking-[0.08em] uppercase mt-1">
                          Embrace The Magic
                        </div>
                        <div className="absolute bottom-[14%] text-[7px] text-[#E8A84B] tracking-[0.06em]">
                          31.6311°N 7.9811°W
                        </div>
                      </div>
                    }
                  />
                </div>

                {/* BACK */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-full border-[3px] border-[#E8A84B] overflow-hidden p-0 bg-[#3A0F02] flex items-center justify-center">
                  <FallbackImage
                    src="/Marrakech-back.png"
                    alt="Marrakech stamp back"
                    className="w-full h-full object-cover rounded-full"
                    fallbackNode={
                      <div className="w-full h-full flex flex-col items-center justify-center text-center p-7 bg-[radial-gradient(circle,#5A1A06_0%,#3A0F02_100%)] relative">
                        <div className="absolute inset-1.5 rounded-full border border-dashed border-[#E8A84B]/30 pointer-events-none"></div>
                        <div className="absolute inset-3.5 rounded-full border border-[#E8A84B]/15 pointer-events-none"></div>

                        <div className="text-4xl opacity-60 mb-2">🏛️</div>
                        <div className="font-display text-[12px] tracking-[0.12em] text-[#E8A84B] uppercase font-bold leading-snug">
                          Medina of
                          <br />
                          Marrakech
                        </div>
                        <div className="w-10 h-px bg-[#E8A84B]/40 my-2"></div>
                        <div className="text-xl text-[#E8A84B] font-display mb-1">1985</div>
                        <div className="text-[9px] tracking-[0.15em] text-[#E8A84B]/60 uppercase">
                          Cultural World Heritage
                        </div>
                        <div className="w-10 h-px bg-[#E8A84B]/40 my-2"></div>
                        <div className="font-display italic text-[10px] text-[#E8C8A0]/70 leading-relaxed max-w-[160px]">
                          "Where the ancient souks whisper tales older than time."
                        </div>
                        <div className="w-10 h-px bg-[#E8A84B]/40 my-2"></div>
                        <div className="text-[9px] tracking-[0.1em] text-[#E8A84B]/50 uppercase mt-1">
                          WORLDMARKS · SOLANA
                        </div>
                        <div className="text-[9px] tracking-[0.1em] text-[#E8A84B]/50 uppercase mt-1">
                          #0142 / 5,000 · Series I
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>

              <div className="text-center text-xs text-[#7A7A9A] tracking-wider mt-5">
                Hover to reveal the back →
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-4 text-[#F0EEE8]">The Back of Every Stamp</h3>
              <p className="text-[#7A7A9A] leading-relaxed mb-6 text-[15px]">
                Each stamp comes with a richly designed reverse — as thoughtfully crafted as the front.
                Matching the city&apos;s signature color, the back carries the full heritage context of the site.
              </p>
              <ul className="space-y-3">
                {[
                  'Heritage Site Name — The exact UNESCO property inscription title',
                  'Inscription Year — When UNESCO recognized the site',
                  'Heritage Category — Cultural, Natural, or Mixed property',
                  'Poetic Inscription — A unique phrase evoking the spirit of the place',
                  'Serial Number — Your edition within the city collection',
                  'City Geometric Border — Pattern inspired by the region visual heritage',
                  'On-chain Provenance — Full metadata stored on Arweave / IPFS',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#7A7A9A]">
                    <span className="text-[#C8A84B] text-[10px] mt-1">◆</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="explorer" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div>
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A84B] mb-2">Site Explorer</div>
            <h2 className="font-display text-4xl leading-[1.15] mb-10">1,248 Sites.<br />Every Continent.</h2>
          </div>

          <div className="flex flex-wrap gap-2.5 mb-10">
            {[
              { id: 'all', label: 'All Sites' },
              { id: 'africa', label: 'Africa' },
              { id: 'asia', label: 'Asia & Pacific' },
              { id: 'europe', label: 'Europe' },
              { id: 'latin', label: 'Latin America' },
              { id: 'arab', label: 'Arab States' },
              { id: 'na', label: 'North America' },
              { id: 'cultural', label: 'Cultural' },
              { id: 'natural', label: 'Natural' },
              { id: 'mixed', label: 'Mixed' },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                className={`px-5 py-2 rounded-full border text-xs font-bold tracking-wide transition-all ${
                  activeFilter === filter.id
                    ? 'border-[#C8A84B] text-[#C8A84B] bg-[#C8A84B]/10'
                    : 'border-[#C8A84B]/20 text-[#7A7A9A] bg-transparent hover:border-[#C8A84B]/50 hover:text-[#C8A84B]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {visibleExplorerSites.length > 0 ? (
              visibleExplorerSites.map((site, i) => (
                <div
                  key={i}
                  onClick={() => openMint(site.city)}
                  className="rounded-xl overflow-hidden border border-[#C8A84B]/20 bg-[#181825] cursor-pointer hover:-translate-y-1 hover:border-[#C8A84B]/40 transition-all"
                >
                  <div className="aspect-square flex items-center justify-center p-3" style={{ background: `linear-gradient(135deg, ${site.color} 0%, ${site.color}88 100%)` }}>
                    <FallbackImage
                      src={site.img}
                      alt={site.city}
                      className="w-[75%] aspect-square rounded-full border-2 object-cover bg-black/10"
                      style={{ borderColor: site.accent }}
                      fallbackNode={
                        <div className="w-[75%] aspect-square rounded-full border-2 flex items-center justify-center text-2xl bg-black/10" style={{ borderColor: site.accent }}>
                          {site.icon}
                        </div>
                      }
                    />
                  </div>
                  <div className="p-2 text-center">
                    <div className="font-display text-[10px] text-[#ddd] mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis">{site.city}</div>
                    <div className="text-[9px] text-[#7A7A9A] whitespace-nowrap overflow-hidden text-ellipsis">{site.country}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-[#7A7A9A] py-10">More sites from this category coming soon.</div>
            )}
          </div>

                    <div className="text-center mt-10">
            <button
              onClick={() => setExplorerPage((p) => p + 1)}
              disabled={remainingSites <= 0}
              className={`px-6 py-2.5 rounded-xl bg-transparent text-sm font-semibold tracking-wide border transition-all inline-flex items-center gap-2 ${
                remainingSites <= 0
                  ? 'border-[#7A7A9A]/30 text-[#7A7A9A]/50 cursor-not-allowed'
                  : 'border-[#F0EEE8]/25 text-[#F0EEE8] hover:border-[#F0EEE8]/50 hover:bg-[#F0EEE8]/5 cursor-pointer'
              }`}
            >
              {remainingSites <= 0
                ? 'All Sites Loaded ✓'
                : `Load More Sites (${remainingSites} remaining) ↓`}
            </button>
          </div>
        </div>
      </section>

      {/* --- ARCHITECTURE --- */}
      <section id="about" className="py-24 bg-[#181825]">
        <div className="max-w-7xl mx-auto px-6">
          <div>
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A84B] mb-2">
              Built to Scale
            </div>
            <h2 className="font-display text-4xl leading-[1.15] mb-12">
              Architecture for
              <br />
              Hundreds of Thousands
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-[20px] border border-[#C8A84B]/20 bg-[#0A0A0F]">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-display text-lg mb-2">Solana Blockchain</h3>
              <p className="text-[13px] text-[#7A7A9A] mb-5">
                Built for scale. Near-zero fees. Sub-second finality.
              </p>
              <ul className="space-y-2">
                {[
                  'Metaplex Token Metadata Standard',
                  'Candy Machine v3 per city collection',
                  'Compressed NFTs (cNFTs) for volume',
                  'On-chain royalties via Metaplex',
                  'Verified collection grouping',
                ].map((item, i) => (
                  <li key={i} className="text-[13px] text-[#7A7A9A] flex gap-2">
                    <span className="text-[#C8A84B]">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-[20px] border border-[#C8A84B]/20 bg-[#0A0A0F]">
              <div className="text-3xl mb-4">🗄️</div>
              <h3 className="font-display text-lg mb-2">Decentralized Storage</h3>
              <p className="text-[13px] text-[#7A7A9A] mb-5">
                Permanent, tamper-proof asset storage.
              </p>
              <ul className="space-y-2">
                {[
                  'Arweave for permanent media storage',
                  'IPFS fallback via NFT.Storage',
                  '1:1 square artwork (2048×2048px)',
                  'Animated variants (APNG / WebP)',
                  'Full JSON metadata on-chain',
                ].map((item, i) => (
                  <li key={i} className="text-[13px] text-[#7A7A9A] flex gap-2">
                    <span className="text-[#C8A84B]">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-[20px] border border-[#C8A84B]/20 bg-[#0A0A0F]">
              <div className="text-3xl mb-4">🔌</div>
              <h3 className="font-display text-lg mb-2">Wallet &amp; Integration</h3>
              <p className="text-[13px] text-[#7A7A9A] mb-5">
                Universal Solana wallet support.
              </p>
              <ul className="space-y-2">
                {[
                  'Phantom, Backpack, Solflare, Ledger',
                  'Wallet Adapter standard',
                  'Magic Eden launchpad listing',
                  'Tensor marketplace integration',
                  'Treasury auto-split for preservation',
                ].map((item, i) => (
                  <li key={i} className="text-[13px] text-[#7A7A9A] flex gap-2">
                    <span className="text-[#C8A84B]">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section id="faq" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A84B] mb-2">
              FAQ
            </div>
            <h2 className="font-display text-4xl leading-[1.15] mb-3">
              Clear Answers
              <br />
              for Serious Collectors.
            </h2>
            <p className="text-base text-[#7A7A9A] leading-[1.7] max-w-[520px]">
              The language stays direct, simple, and grounded in what the platform actually offers.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                q: 'What am I collecting?',
                a: 'Each piece is a unique digital stamp from the WORLDMARKS Heritage series — a visual tribute to an extraordinary place. The focus is collection, cultural appreciation, and digital ownership on Solana.',
              },
              {
                q: 'Is there any promise beyond collecting?',
                a: 'No. WORLDMARKS is built for collectors. There is no promise of profit, resale performance, or future utility. You are collecting a beautifully designed digital artifact — nothing more, nothing less.',
              },
              {
                q: 'How does the preservation donation work?',
                a: 'A dedicated portion of primary mint revenue is allocated to our independent donation pool and transferred to established heritage preservation initiatives. The platform’s Impact Ledger displays total allocations and transfer history publicly — all verifiable on-chain.',
              },
              {
                q: 'Is WORLDMARKS affiliated with UNESCO?',
                a: 'No. WORLDMARKS is a strictly independent, creator-led initiative. We are passionate donors and collectors celebrating global heritage. We have no official ties, partnerships, or affiliations with UNESCO or any government entity. All donations are made independently.'
              },
              {
                q: 'Do I need a crypto wallet?',
                a: 'A Solana wallet (Phantom, Backpack, Solflare) is the simplest path. We also support a beginner-friendly onboarding flow — you can browse the entire archive and collector list without connecting anything.',
              },
              {
                q: 'Why Solana?',
                a: 'Solana’s near-zero transaction fees (~$0.001) and sub-second finality make it the most accessible chain for a global collectibles platform. Compressed NFTs allow us to scale to hundreds of thousands of stamps without compromising collector access.',
              },
            ].map((faq, i) => (
              <div key={i} className="border border-[#C8A84B]/20 rounded-[16px] bg-[#181825] p-6 px-7">
                <div className="font-display text-[1.05rem] mb-2.5 text-[#F0EEE8]">{faq.q}</div>
                <p className="text-[0.875rem] text-[#7A7A9A] leading-[1.8]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ROADMAP --- */}
      <section id="roadmap" className="py-24 max-w-7xl mx-auto px-6 border-t border-[#C8A84B]/20">
        <div>
          <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A84B] mb-2">
            Roadmap
          </div>
          <h2 className="font-display text-4xl leading-[1.15] mb-12">The Journey Ahead</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative mt-8">
          <div className="hidden lg:block absolute top-[20px] left-[12.5%] right-[12.5%] h-px bg-[#C8A84B]/20 z-0"></div>

          <div className="text-center relative z-10 px-4">
            <div className="w-10 h-10 rounded-full border-2 border-[#C8A84B] bg-[#C8A84B]/10 shadow-[0_0_20px_rgba(200,168,75,0.3)] mx-auto flex items-center justify-center text-xs font-bold text-[#C8A84B] mb-4">
              Q2
            </div>
            <div className="text-[10px] text-[#C8A84B] tracking-[0.1em] uppercase mb-2">2026 — Now</div>
            <h3 className="font-display text-[15px] mb-2">Genesis Launch</h3>
            <p className="text-xs text-[#7A7A9A] leading-relaxed">
              6 founding city collections
              <br />
              Marrakech, Rio, Havana, Sydney, Cairo, Bangkok
            </p>
          </div>

          <div className="text-center relative z-10 px-4">
            <div className="w-10 h-10 rounded-full border-2 border-[#C8A84B]/20 bg-[#0A0A0F] mx-auto flex items-center justify-center text-xs font-bold text-[#7A7A9A] mb-4 transition-colors hover:border-[#C8A84B]">
              Q3
            </div>
            <div className="text-[10px] text-[#C8A84B] tracking-[0.1em] uppercase mb-2">2026</div>
            <h3 className="font-display text-[15px] mb-2">World Tour Vol. I</h3>
            <p className="text-xs text-[#7A7A9A] leading-relaxed">
              20 new city collections
              <br />
              Europe &amp; Asia focus
              <br />
              Animated stamp variants
              <br />
              Collector passport feature
            </p>
          </div>

          <div className="text-center relative z-10 px-4">
            <div className="w-10 h-10 rounded-full border-2 border-[#C8A84B]/20 bg-[#0A0A0F] mx-auto flex items-center justify-center text-xs font-bold text-[#7A7A9A] mb-4 transition-colors hover:border-[#C8A84B]">
              Q4
            </div>
            <div className="text-[10px] text-[#C8A84B] tracking-[0.1em] uppercase mb-2">2026</div>
            <h3 className="font-display text-[15px] mb-2">Heritage Atlas</h3>
            <p className="text-xs text-[#7A7A9A] leading-relaxed">
              100+ city collections
              <br />
              Natural heritage series
              <br />
              Physical print program
              <br />
              Preservation partnerships
            </p>
          </div>

          <div className="text-center relative z-10 px-4">
            <div className="w-10 h-10 rounded-full border-2 border-[#C8A84B]/20 bg-[#0A0A0F] mx-auto flex items-center justify-center text-xs font-bold text-[#7A7A9A] mb-4 transition-colors hover:border-[#C8A84B]">
              ∞
            </div>
            <div className="text-[10px] text-[#C8A84B] tracking-[0.1em] uppercase mb-2">2027+</div>
            <h3 className="font-display text-[15px] mb-2">Complete World</h3>
            <p className="text-xs text-[#7A7A9A] leading-relaxed">
              All 1,248 heritage sites
              <br />
              Multi-language support
              <br />
              Collector leaderboards
              <br />
              Heritage travel rewards
            </p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0A0A0F] border-t border-[#C8A84B]/20 pt-16 pb-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 font-display text-xl tracking-wider mb-4">
              <div className="w-9 h-9 nav-logo-mark rounded-full flex items-center justify-center text-xs font-bold text-[#0A0A0F]">
                W
              </div>
              WORLDMARKS
            </div>
            <p className="text-[13px] text-[#7A7A9A] leading-relaxed max-w-[260px] mb-5">
              Digital stamps honouring World Heritage Sites. Built on Solana. Pure collectibles.
              Every mint supports independent heritage preservation globally.
            </p>
            <div className="flex gap-3">
              <button className="w-9 h-9 rounded-lg border border-[#C8A84B]/20 bg-[#181825] flex items-center justify-center text-sm hover:border-[#C8A84B] hover:text-[#C8A84B] transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-lg border border-[#C8A84B]/20 bg-[#181825] flex items-center justify-center text-sm hover:border-[#C8A84B] hover:text-[#C8A84B] transition-colors">
                <Camera className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-lg border border-[#C8A84B]/20 bg-[#181825] flex items-center justify-center text-sm hover:border-[#C8A84B] hover:text-[#C8A84B] transition-colors">
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div>
            <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#C8A84B] mb-4">Explore</div>
            <ul className="space-y-2.5">
              {['Collections', 'All Sites', 'Design System', 'Roadmap'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[13px] text-[#7A7A9A] hover:text-[#F0EEE8] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#C8A84B] mb-4">Learn</div>
            <ul className="space-y-2.5">
              {['World Heritage', 'How to Mint', 'Solana Wallets', 'FAQs'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[13px] text-[#7A7A9A] hover:text-[#F0EEE8] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#C8A84B] mb-4">Legal</div>
            <ul className="space-y-2.5">
              {['Terms of Service', 'Privacy Policy', 'No Investment Advice', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[13px] text-[#7A7A9A] hover:text-[#F0EEE8] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-[#C8A84B]/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-xs text-[#7A7A9A]">© 2026 WORLDMARKS. All rights reserved.</div>
          <div className="text-[11px] text-[#7A7A9A] max-w-[550px] md:text-right leading-relaxed">
            WORLDMARKS NFTs are digital collectibles only. They carry no financial promises, no utility
            guarantees, and no investment value. <strong className="text-[#C8A84B]">WORLDMARKS is an independent collective and is NOT affiliated with, endorsed by, or partnered with UNESCO or any official government heritage organization.</strong> Donations are made voluntarily by the creators to independent preservation funds.
          </div>
        </div>
      </footer>

      {/* --- MODALS --- */}
      {walletModalOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setWalletModalOpen(false)}
        >
          <div
            className="bg-[#181825] border border-[#C8A84B]/20 rounded-[20px] p-9 w-full max-w-[420px] relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setWalletModalOpen(false)}
              className="absolute top-4 right-4 text-[#7A7A9A] hover:text-[#F0EEE8] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="font-display text-[22px] mb-2">Connect Wallet</h2>
            <p className="text-sm text-[#7A7A9A] mb-6">Choose your Solana wallet to start collecting.</p>

            <div className="space-y-2.5">
              {[
                { icon: '👻', name: 'Phantom', sub: 'Most popular', detected: true },
                { icon: '🎒', name: 'Backpack', sub: 'xNFT wallet' },
                { icon: '☀️', name: 'Solflare', sub: 'Web & mobile' },
                { icon: '🔐', name: 'Ledger', sub: 'Hardware wallet' },
              ].map((wallet) => (
                <div
                  key={wallet.name}
                  onClick={connectWallet}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl border border-[#C8A84B]/20 bg-[#0A0A0F] hover:border-[#C8A84B] hover:bg-[#C8A84B]/5 transition-colors cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xl bg-[#181825] group-hover:scale-110 transition-transform">
                    {wallet.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{wallet.name}</div>
                    <div className="text-[11px] text-[#7A7A9A]">{wallet.sub}</div>
                  </div>
                  <div className="ml-auto text-[11px] text-[#7A7A9A] flex items-center gap-1">
                    {wallet.detected ? (
                      <>
                        Detected <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block"></span>
                      </>
                    ) : (
                      '—'
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {mintModalOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setMintModalOpen(false)}
        >
          <div
            className="bg-[#181825] border border-[#C8A84B]/20 rounded-[20px] p-9 w-full max-w-[420px] relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setMintModalOpen(false)}
              className="absolute top-4 right-4 text-[#7A7A9A] hover:text-[#F0EEE8] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="font-display text-[22px] mb-2">Mint — {selectedCity}</h2>
            <p className="text-sm text-[#7A7A9A] mb-6">
              You are about to mint a unique WORLDMARKS stamp. Review details below.
            </p>

            <div className="bg-[#0A0A0F] border border-[#C8A84B]/20 rounded-xl p-5 mb-6">
              <div className="flex justify-between text-[13px] mb-2.5">
                <span className="text-[#7A7A9A]">Mint Price</span>
                <span className="text-[#C8A84B] font-bold">◎ 0.15 SOL</span>
              </div>
              <div className="flex justify-between text-[13px] mb-3">
                <span className="text-[#7A7A9A]">Network Fee</span>
                <span>~0.001 SOL</span>
              </div>
              <div className="h-px bg-[#C8A84B]/20 my-3"></div>
              <div className="flex justify-between text-[13px]">
                <span className="text-[#7A7A9A]">Preservation</span>
                <span className="text-[#C8A84B] font-medium">Portion → Heritage Fund</span>
              </div>
            </div>

            {walletConnected ? (
              <button className="w-full py-3.5 rounded-xl bg-[#C8A84B] text-[#0A0A0F] font-bold tracking-wide border border-[#E8C96A] hover:bg-[#E8C96A] hover:-translate-y-0.5 transition-all">
                Confirm Mint
              </button>
            ) : (
              <button
                onClick={() => {
                  setMintModalOpen(false);
                  setWalletModalOpen(true);
                }}
                className="w-full py-3.5 rounded-xl bg-[#C8A84B] text-[#0A0A0F] font-bold tracking-wide border border-[#E8C96A] hover:bg-[#E8C96A] hover:-translate-y-0.5 transition-all"
              >
                Connect Wallet to Mint
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
