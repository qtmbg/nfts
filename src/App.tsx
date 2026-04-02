import React, { useState, useEffect, type ReactNode } from 'react';
import {
  X,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Check,
  CreditCard,
  Smartphone,
  Wallet,
  Globe,
  Shield,
  Heart,
  MapPin,
  ExternalLink,
} from 'lucide-react';

/* ───────────────────────────────────────────
   TYPES
   ─────────────────────────────────────────── */

type FallbackImageProps = {
  src?: string | null;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  fallbackNode: ReactNode;
};

type Tier = {
  id: string;
  name: string;
  price: number;
  color: string;
  borderColor: string;
  donation: number;
  editions: number;
  minted: number;
};

type CityCollection = {
  id: string;
  city: string;
  country: string;
  emoji: string;
  year: number;
  category: string;
  description: string;
  story: string;
  coords: string;
  img?: string | null;
  tiers: Tier[];
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

type FAQItem = {
  q: string;
  a: string;
};

/* ───────────────────────────────────────────
   FALLBACK IMAGE
   ─────────────────────────────────────────── */

const FallbackImage = ({ src, alt, className, style, fallbackNode }: FallbackImageProps) => {
  const [hasError, setHasError] = useState(false);
  if (!src || hasError) return <>{fallbackNode}</>;
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

/* ───────────────────────────────────────────
   DATA — RIO DE JANEIRO: 6 COLOR-CODED TIERS
   ─────────────────────────────────────────── */

const RIO_TIERS: Tier[] = [
  { id: 'bronze',   name: 'Bronze',   price: 25,  color: '#CD7F32', borderColor: '#E8A060', donation: 0.01, editions: 5000, minted: 3200 },
  { id: 'silver',   name: 'Silver',   price: 50,  color: '#C0C0C0', borderColor: '#D8D8D8', donation: 0.03, editions: 3000, minted: 1800 },
  { id: 'gold',     name: 'Gold',     price: 75,  color: '#FFD700', borderColor: '#FFE44D', donation: 0.05, editions: 2000, minted: 1100 },
  { id: 'emerald',  name: 'Emerald',  price: 100, color: '#50C878', borderColor: '#7AE8A0', donation: 0.08, editions: 1000, minted: 480  },
  { id: 'sapphire', name: 'Sapphire', price: 150, color: '#0F52BA', borderColor: '#4080E0', donation: 0.12, editions: 500,  minted: 190  },
  { id: 'diamond',  name: 'Diamond',  price: 200, color: '#B9F2FF', borderColor: '#E0F8FF', donation: 0.20, editions: 250,  minted: 60   },
];

const COLLECTIONS: CityCollection[] = [
  {
    id: 'rio',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    emoji: '🇧🇷',
    year: 2012,
    category: 'Cultural Landscape',
    description:
      'A lush and elevated collectible shaped by mountain, sea, curve, and sacred presence. Six unique editions honour the Carioca landscape.',
    story:
      'Rio brings a different emotional frequency to the atlas: light, elevation, tropical force, and a sense of living spectacle. The Carioca landscape is a place where nature and city become one. Each tier captures a different facet of Rio — from the golden sunrise on Sugarloaf to the deep sapphire of Guanabara Bay.',
    coords: '22.9068\u00b0S 43.1729\u00b0W',
    img: '/Rio.png',
    tiers: RIO_TIERS,
  },
];

/* ───────────────────────────────────────────
   ROADMAP — CONTINENT CLUSTERS
   ─────────────────────────────────────────── */

const ROADMAP = [
  {
    region: 'Americas',
    emoji: '🌎',
    color: '#50C878',
    cities: [
      { city: 'Rio de Janeiro', country: 'Brazil', status: 'live' as const },
      { city: 'Havana', country: 'Cuba', status: 'upcoming' as const, quarter: 'Q3 2026' },
      { city: 'Machu Picchu', country: 'Peru', status: 'upcoming' as const, quarter: 'Q4 2026' },
      { city: 'Cartagena', country: 'Colombia', status: 'planned' as const, quarter: '2027' },
      { city: "Chich\u00e9n Itz\u00e1", country: 'Mexico', status: 'planned' as const, quarter: '2027' },
      { city: 'Oaxaca', country: 'Mexico', status: 'planned' as const, quarter: '2027' },
    ],
  },
  {
    region: 'Europe',
    emoji: '🌍',
    color: '#0F52BA',
    cities: [
      { city: 'Venice', country: 'Italy', status: 'upcoming' as const, quarter: 'Q3 2026' },
      { city: 'Istanbul', country: 'T\u00fcrkiye', status: 'upcoming' as const, quarter: 'Q4 2026' },
      { city: 'Prague', country: 'Czechia', status: 'planned' as const, quarter: '2027' },
      { city: 'Dubrovnik', country: 'Croatia', status: 'planned' as const, quarter: '2027' },
      { city: 'Alhambra', country: 'Spain', status: 'planned' as const, quarter: '2027' },
      { city: 'Bruges', country: 'Belgium', status: 'planned' as const, quarter: '2027' },
    ],
  },
  {
    region: 'Asia & Oceania',
    emoji: '🌏',
    color: '#FFD700',
    cities: [
      { city: 'Kyoto', country: 'Japan', status: 'upcoming' as const, quarter: 'Q3 2026' },
      { city: 'Bangkok', country: 'Thailand', status: 'upcoming' as const, quarter: 'Q4 2026' },
      { city: 'Angkor', country: 'Cambodia', status: 'planned' as const, quarter: '2027' },
      { city: 'Sydney', country: 'Australia', status: 'planned' as const, quarter: '2027' },
      { city: 'Taj Mahal', country: 'India', status: 'planned' as const, quarter: '2027' },
      { city: 'Borobudur', country: 'Indonesia', status: 'planned' as const, quarter: '2027' },
    ],
  },
  {
    region: 'Africa & Middle East',
    emoji: '🌍',
    color: '#CD7F32',
    cities: [
      { city: 'Marrakech', country: 'Morocco', status: 'upcoming' as const, quarter: 'Q3 2026' },
      { city: 'Cairo', country: 'Egypt', status: 'upcoming' as const, quarter: 'Q4 2026' },
      { city: 'Petra', country: 'Jordan', status: 'planned' as const, quarter: '2027' },
      { city: 'Fez', country: 'Morocco', status: 'planned' as const, quarter: '2027' },
      { city: 'Lalibela', country: 'Ethiopia', status: 'planned' as const, quarter: '2027' },
      { city: 'Timbuktu', country: 'Mali', status: 'planned' as const, quarter: '2027' },
    ],
  },
];

/* ───────────────────────────────────────────
   FAQ — Generated from T&Cs
   ─────────────────────────────────────────── */

const FAQ_DATA: FAQItem[] = [
  {
    q: 'What exactly am I buying?',
    a: 'You are purchasing a digital collectible NFT — a unique, hand-crafted digital stamp honouring a UNESCO World Heritage Site. These are collectibles only, not investments or financial products. No representation is made regarding future value, resale value, or profit potential.',
  },
  {
    q: 'How do I pay?',
    a: 'We accept credit/debit cards, Apple Pay, and Google Pay for a simple checkout experience. If you prefer, you can also connect a crypto wallet as a secondary payment option. All prices are displayed in USD.',
  },
  {
    q: 'Can I get a refund?',
    a: 'All NFT purchases are final and non-refundable once successfully delivered to your wallet. Refunds are only possible if the transaction fails or the NFT is not delivered.',
  },
  {
    q: 'Who operates this platform?',
    a: 'The platform is operated by ParagonPayMarketPlaceGroup Ltd, governed by the laws of England and Wales. Full terms of use are available at the bottom of this page.',
  },
  {
    q: 'Do I need a crypto wallet?',
    a: 'No. You can purchase with a standard credit card, Apple Pay, or Google Pay. A wallet will be created for you to hold your collectible. Advanced users can optionally connect their own Solana-compatible wallet.',
  },
  {
    q: 'What happens to the donation portion?',
    a: 'Each purchase includes a small donation amount that goes into a custodial multi-signature wallet. Once a full collection sells out, crypto donations are sent to UNICEF and fiat donations are sent to the World Heritage Fund. All transactions are publicly verifiable on-chain.',
  },
  {
    q: 'How do I know my donation actually reaches the charities?',
    a: 'The custodial donation wallet address is publicly displayed on our site. Anyone can verify the balance and all outgoing transfers on the blockchain explorer at any time.',
  },
  {
    q: 'What are the different tiers?',
    a: 'Each city collection comes in six colour-coded tiers: Bronze ($25), Silver ($50), Gold ($75), Emerald ($100), Sapphire ($150), and Diamond ($200). The border colour of each NFT image signals which tier it belongs to. Higher tiers have fewer editions, making them more exclusive.',
  },
  {
    q: 'Is there an age requirement?',
    a: 'Yes, users must be at least 18 years old to use the platform, in compliance with applicable laws.',
  },
  {
    q: 'Am I responsible for my wallet security?',
    a: 'Yes. Users are solely responsible for wallet security, private keys, and transactions. The platform facilitates transactions but does not act as a custodian of your assets beyond the initial purchase.',
  },
  {
    q: 'What data do you collect about me?',
    a: 'We collect identity data, contact details, wallet addresses, and transaction history for account creation, transaction processing, and compliance (KYC/AML). We implement appropriate technical safeguards and comply with UK GDPR. You have rights to access, rectification, erasure, and restriction of your data.',
  },
  {
    q: 'Can my account be suspended?',
    a: 'Accounts may be suspended or terminated for breach of the terms of use, including fraud, misuse, or attempts to hack or exploit the platform.',
  },
];

/* ───────────────────────────────────────────
   TERMS & CONDITIONS FULL TEXT
   ─────────────────────────────────────────── */

const TERMS_TEXT = `TERMS & CONDITIONS (PLATFORM TERMS OF USE)
ParagonPayMarketPlaceGroup Ltd
Effective Date: 30 March 2026

1. INTRODUCTION
These Terms govern your use of the platform operated by ParagonPayMarketPlaceGroup Ltd (the "Platform"). By using the Platform, you agree to these Terms.

2. NATURE OF THE PLATFORM
The Platform provides digital collectible NFTs at fixed-price purchases.

IMPORTANT DISCLAIMER: All NFTs are collectibles only, not investments, and not financial products. No representation is made regarding future value, resale value, or profit potential.

3. USER ELIGIBILITY
Users must be at least 18 years old and comply with applicable laws.

4. PURCHASES
NFTs are sold at fixed price. Ownership is transferred upon blockchain confirmation.

5. NO REFUNDS
Once an NFT has been successfully delivered to the user's wallet, all sales are final and non-refundable.

6. WALLET RESPONSIBILITY
Users are solely responsible for wallet security, private keys, and transactions.

7. PLATFORM ROLE
The Platform facilitates transactions, does not guarantee value, and does not act as investment advisor.

8. PROHIBITED USE
Users must not engage in fraud, misuse the platform, or attempt to hack or exploit.

9. LIMITATION OF LIABILITY
The Platform is not liable for loss of value, blockchain failures, or wallet loss.

10. TERMINATION
We may suspend or terminate accounts for breach.

11. GOVERNING LAW
England and Wales.

---

PRIVACY POLICY (UK GDPR)
Effective Date: 30 March 2026

Data Controller: ParagonPayMarketPlaceGroup Ltd
Data Collected: identity data, contact details, wallet addresses, transaction history
Purpose: account creation, transaction processing, compliance (KYC/AML)
Legal Basis: contract performance, legal obligation, legitimate interests
Data Sharing: payment providers, compliance providers, regulators
User Rights: access, rectification, erasure, restriction
Data Retention: as required by law
Security: appropriate technical safeguards implemented

---

KYC / KYB POLICY
Purpose: To prevent money laundering, fraud, and sanctions breaches.
We may require ID verification, proof of address, and business documentation.
Higher-risk users may require enhanced checks. Transactions may be monitored.

---

ACCEPTABLE USE POLICY
Users must not use the platform for illegal purposes, upload unlawful content, or attempt system interference.

---

REFUND POLICY
All NFT purchases are final and non-refundable once successfully delivered to the user's wallet. Refunds only possible if the transaction fails or the NFT is not delivered.

---

RISK DISCLOSURE
Users acknowledge: NFTs are fixed price and strictly not regarded to be held as investments. Blockchain transactions are irreversible. Wallets may be lost. The regulatory environment may change.`;

/* ───────────────────────────────────────────
   EXPLORER SITES
   ─────────────────────────────────────────── */

const ALL_SITES: SiteItem[] = [
  { city: 'Rio de Janeiro', country: 'Brazil', icon: '🇧🇷', color: '#1A5C3A', accent: '#C8A84B', region: 'americas', type: 'cultural', img: '/Rio.png' },
  { city: 'Havana', country: 'Cuba', icon: '🇨🇺', color: '#1A6E8A', accent: '#C8A84B', region: 'americas', type: 'cultural', img: '/Havana.png' },
  { city: 'Machu Picchu', country: 'Peru', icon: '🏔️', color: '#2A5C2A', accent: '#A8C87A', region: 'americas', type: 'mixed' },
  { city: 'Marrakech', country: 'Morocco', icon: '🇲🇦', color: '#C24A1E', accent: '#E8A84B', region: 'africa', type: 'cultural', img: '/Marrakech.png' },
  { city: 'Cairo', country: 'Egypt', icon: '🇪🇬', color: '#C27F1E', accent: '#F5D78A', region: 'africa', type: 'cultural', img: '/Cairo.png' },
  { city: 'Sydney', country: 'Australia', icon: '🇦🇺', color: '#1A4A8A', accent: '#E8C8F0', region: 'asia', type: 'cultural', img: '/Sydney.png' },
  { city: 'Bangkok', country: 'Thailand', icon: '🇹🇭', color: '#8B5A1A', accent: '#E8C8F0', region: 'asia', type: 'cultural', img: '/Bangkok.png' },
  { city: 'Petra', country: 'Jordan', icon: '🏜️', color: '#8B3A1E', accent: '#E8C87A', region: 'africa', type: 'cultural' },
  { city: 'Venice', country: 'Italy', icon: '🚣', color: '#1A4A8A', accent: '#E8D0A0', region: 'europe', type: 'cultural' },
  { city: 'Angkor', country: 'Cambodia', icon: '🛕', color: '#5C3A1A', accent: '#E8B87A', region: 'asia', type: 'cultural' },
  { city: 'Alhambra', country: 'Spain', icon: '🏯', color: '#8B2A1A', accent: '#E8B07A', region: 'europe', type: 'cultural' },
  { city: 'Versailles', country: 'France', icon: '🌹', color: '#3A2A5C', accent: '#C8A8E8', region: 'europe', type: 'cultural' },
  { city: 'Acropolis', country: 'Greece', icon: '🏛️', color: '#3A5C2A', accent: '#C8E8A8', region: 'europe', type: 'cultural' },
  { city: 'Taj Mahal', country: 'India', icon: '🕌', color: '#2A3A5C', accent: '#A8C8E8', region: 'asia', type: 'cultural' },
  { city: 'Great Wall', country: 'China', icon: '🧱', color: '#5C3A2A', accent: '#E8C8A8', region: 'asia', type: 'cultural' },
  { city: 'Colosseum', country: 'Italy', icon: '🏟️', color: '#5C2A1A', accent: '#E8A87A', region: 'europe', type: 'cultural' },
  { city: "Chich\u00e9n Itz\u00e1", country: 'Mexico', icon: '🗿', color: '#3A5C3A', accent: '#A8E8A8', region: 'americas', type: 'cultural' },
  { city: 'Dubrovnik', country: 'Croatia', icon: '🌊', color: '#1A3A5C', accent: '#A8C8E8', region: 'europe', type: 'cultural' },
  { city: 'Fez', country: 'Morocco', icon: '🕌', color: '#8B5A1A', accent: '#E8C87A', region: 'africa', type: 'cultural' },
  { city: 'Kyoto', country: 'Japan', icon: '⛩️', color: '#6B2D8B', accent: '#E8C8F0', region: 'asia', type: 'cultural' },
  { city: 'Istanbul', country: 'T\u00fcrkiye', icon: '🕌', color: '#1A3A7A', accent: '#C8A84B', region: 'europe', type: 'cultural' },
  { city: 'Prague', country: 'Czechia', icon: '🏰', color: '#2A1A5C', accent: '#A8A8E8', region: 'europe', type: 'cultural' },
  { city: 'Cartagena', country: 'Colombia', icon: '🏯', color: '#8B1A3A', accent: '#E8A8C8', region: 'americas', type: 'cultural' },
  { city: 'Oaxaca', country: 'Mexico', icon: '🎨', color: '#5C2A5C', accent: '#E8A8E8', region: 'americas', type: 'cultural' },
  { city: 'Lalibela', country: 'Ethiopia', icon: '⛪', color: '#5C2A2A', accent: '#E8A8A8', region: 'africa', type: 'cultural' },
  { city: 'Timbuktu', country: 'Mali', icon: '🕌', color: '#8B6A1A', accent: '#E8D07A', region: 'africa', type: 'cultural' },
  { city: 'Bruges', country: 'Belgium', icon: '⛪', color: '#1A3A5C', accent: '#A8C8E8', region: 'europe', type: 'cultural' },
  { city: 'Borobudur', country: 'Indonesia', icon: '🛕', color: '#3A5C1A', accent: '#A8E87A', region: 'asia', type: 'cultural' },
  { city: 'Hoi An', country: 'Vietnam', icon: '🏮', color: '#8B5A1A', accent: '#E8C87A', region: 'asia', type: 'cultural' },
  { city: 'Bagan', country: 'Myanmar', icon: '🛕', color: '#8B4A1A', accent: '#E8C07A', region: 'asia', type: 'cultural' },
];

/* ───────────────────────────────────────────
   DONATION WALLET (placeholder — replace with real address)
   ─────────────────────────────────────────── */

const DONATION_WALLET = '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU';

/* ───────────────────────────────────────────
   HERO STAMPS
   ─────────────────────────────────────────── */

const HERO_STAMPS = [
  { id: 'rio-bronze',   color: '#CD7F32', border: '#E8A060', img: '/Rio.png', name: 'BRONZE',   delay: '0s' },
  { id: 'rio-silver',   color: '#C0C0C0', border: '#D8D8D8', img: '/Rio.png', name: 'SILVER',   delay: '0.2s' },
  { id: 'rio-gold',     color: '#FFD700', border: '#FFE44D', img: '/Rio.png', name: 'GOLD',     delay: '0.4s' },
  { id: 'rio-emerald',  color: '#50C878', border: '#7AE8A0', img: '/Rio.png', name: 'EMERALD',  delay: '0.6s' },
  { id: 'rio-sapphire', color: '#0F52BA', border: '#4080E0', img: '/Rio.png', name: 'SAPPHIRE', delay: '0.8s' },
  { id: 'rio-diamond',  color: '#B9F2FF', border: '#E0F8FF', img: '/Rio.png', name: 'DIAMOND',  delay: '1.0s' },
];

/* ═══════════════════════════════════════════
   APP COMPONENT
   ═══════════════════════════════════════════ */

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedTierId, setSelectedTierId] = useState('bronze');
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [donationInfoOpen, setDonationInfoOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [emailJoined, setEmailJoined] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [explorerPage, setExplorerPage] = useState(1);
  const PAGE_SIZE = 18;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const collection = COLLECTIONS[0];
  const selectedTier = collection.tiers.find((t) => t.id === selectedTierId) || collection.tiers[0];
  const tierPct = selectedTier.editions > 0 ? Math.round((selectedTier.minted / selectedTier.editions) * 100) : 0;

  const totalEditions = collection.tiers.reduce((a, t) => a + t.editions, 0);
  const totalMinted = collection.tiers.reduce((a, t) => a + t.minted, 0);
  const totalPct = totalEditions > 0 ? Math.round((totalMinted / totalEditions) * 100) : 0;
  const totalDonations = collection.tiers.reduce((a, t) => a + t.minted * t.donation, 0);

  const handleEmailJoin = () => {
    if (emailInput && emailInput.includes('@')) setEmailJoined(true);
  };

  const filteredExplorer = ALL_SITES.filter((d) => {
    if (activeFilter === 'all') return true;
    if (['cultural', 'natural', 'mixed'].includes(activeFilter)) return d.type === activeFilter;
    return d.region === activeFilter;
  });
  const visibleExplorerSites = filteredExplorer.slice(0, explorerPage * PAGE_SIZE);
  const remainingSites = filteredExplorer.length - visibleExplorerSites.length;

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F0EEE8] font-sans selection:bg-[#C8A84B]/30 overflow-x-hidden">
      {/* ── GLOBAL STYLES ─────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
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
        .tier-card.active { border-color: var(--gold); background: rgba(200,168,75,0.1); box-shadow: 0 0 20px rgba(200,168,75,0.15); }
        .modal-overlay { animation: fadeIn 200ms ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .modal-content { animation: slideUp 300ms ease-out; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}} />

      {/* ══════════════════════════════════════
          NAV — "Buy NFT" primary, no wallet-first
          ══════════════════════════════════════ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 border-b border-[#C8A84B]/20 backdrop-blur-xl transition-all duration-300 ${scrolled ? 'bg-[#0A0A0F]/95 py-3' : 'bg-[#0A0A0F]/85 py-5'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 font-display text-xl tracking-wider">
            <div className="w-9 h-9 nav-logo-mark rounded-full flex items-center justify-center text-xs font-bold text-[#0A0A0F]">W</div>
            WORLDMARKS
          </a>
          <ul className="hidden md:flex gap-9 text-sm font-medium tracking-wide text-[#7A7A9A]">
            <li><a href="#collection" className="hover:text-[#F0EEE8] transition-colors">Collection</a></li>
            <li><a href="#explorer" className="hover:text-[#F0EEE8] transition-colors">Explorer</a></li>
            <li><a href="#donations" className="hover:text-[#F0EEE8] transition-colors">Donations</a></li>
            <li><a href="#roadmap" className="hover:text-[#F0EEE8] transition-colors">Roadmap</a></li>
            <li><a href="#faq" className="hover:text-[#F0EEE8] transition-colors">FAQ</a></li>
          </ul>
          <button
            onClick={() => setPaymentModalOpen(true)}
            className="px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all border bg-[#C8A84B] text-[#0A0A0F] border-[#E8C96A] hover:bg-[#E8C96A] hover:-translate-y-0.5"
          >
            Buy NFT
          </button>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          HERO — mainstream, no crypto framing
          ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 hero-bg"></div>
        <div className="absolute inset-0 hero-grid"></div>

        <div className="relative z-10 text-center w-full max-w-5xl px-6 mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C8A84B]/20 bg-[#C8A84B]/10 text-xs font-semibold tracking-widest uppercase text-[#C8A84B] mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C8A84B] animate-pulse"></div>
            Digital Collectibles &middot; Supporting Heritage Preservation
          </div>

          <h1 className="font-display text-5xl md:text-7xl leading-[1.1] tracking-tight mb-6">
            Collect the World's
            <br />
            <em className="text-[#C8A84B] italic">Greatest Places</em>
          </h1>

          <p className="text-lg md:text-xl text-[#7A7A9A] max-w-2xl mx-auto mb-10 leading-relaxed">
            Each WORLDMARKS collectible is a hand-crafted digital stamp honouring a globally recognised World Heritage Site.
            Beautiful art. Timeless places. Every purchase supports heritage preservation worldwide.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={() => setPaymentModalOpen(true)}
              className="px-8 py-3.5 rounded-xl bg-[#C8A84B] text-[#0A0A0F] font-bold tracking-wide border border-[#E8C96A] hover:bg-[#E8C96A] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(200,168,75,0.3)] transition-all"
            >
              Buy NFT &mdash; From $25
            </button>
            <a
              href="#collection"
              className="px-8 py-3.5 rounded-xl bg-transparent text-[#F0EEE8] font-semibold tracking-wide border border-[#F0EEE8]/25 hover:border-[#F0EEE8]/50 hover:bg-[#F0EEE8]/5 transition-all"
            >
              Explore Collection
            </a>
          </div>

          {/* Hero stamps — 6 tiers of Rio */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 md:gap-6 justify-items-center relative mx-auto w-full">
            {HERO_STAMPS.map((stamp, i) => (
              <div
                key={i}
                className="stamp-float w-[90px] h-[90px] sm:w-[115px] sm:h-[115px] lg:w-[130px] lg:h-[130px] rounded-full border-[3px] flex items-center justify-center relative cursor-pointer overflow-hidden p-0 shrink-0"
                style={{ animationDelay: stamp.delay, borderColor: stamp.border, boxShadow: `0 8px 30px ${stamp.color}66` }}
                onClick={() => { setSelectedTierId(stamp.id.replace('rio-', '')); document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                <FallbackImage
                  src={stamp.img}
                  alt={stamp.name}
                  className="w-full h-full object-cover rounded-full"
                  style={{ filter: `sepia(0.3) hue-rotate(${i * 30}deg)` }}
                  fallbackNode={
                    <div className="w-full h-full rounded-full flex flex-col items-center justify-center relative p-1" style={{ background: `radial-gradient(circle, ${stamp.color} 0%, #0A0A0F 100%)` }}>
                      <div className="absolute inset-1.5 sm:inset-2 rounded-full border border-dashed border-[#C8A84B]/40 pointer-events-none"></div>
                      <div className="font-display text-[7px] sm:text-[10px] font-bold tracking-widest text-center px-1 uppercase text-[#E8C96A] drop-shadow-md leading-tight">{stamp.name}</div>
                    </div>
                  }
                />
                <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-[7px] sm:text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-black/60 text-white/90 whitespace-nowrap">{stamp.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR — USD ─────────────────── */}
      <div className="bg-[#181825] border-y border-[#C8A84B]/20 py-8">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#C8A84B]/20 text-center">
          <div className="p-4"><div className="font-display text-3xl text-[#C8A84B] mb-1">1,248</div><div className="text-xs text-[#7A7A9A] tracking-widest uppercase">Heritage Sites</div></div>
          <div className="p-4"><div className="font-display text-3xl text-[#C8A84B] mb-1">170</div><div className="text-xs text-[#7A7A9A] tracking-widest uppercase">Countries</div></div>
          <div className="p-4"><div className="font-display text-3xl text-[#C8A84B] mb-1">{totalMinted.toLocaleString()}</div><div className="text-xs text-[#7A7A9A] tracking-widest uppercase">Collectibles Sold</div></div>
          <div className="p-4"><div className="font-display text-3xl text-[#C8A84B] mb-1">${totalDonations.toFixed(2)}</div><div className="text-xs text-[#7A7A9A] tracking-widest uppercase">To Preservation</div></div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          COLLECTION — RIO 6 TIERS
          ══════════════════════════════════════ */}
      <section id="collection" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A84B] mb-2">First Drop &mdash; Rio de Janeiro</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.15]">
              Six Editions.<br />One Iconic City.
            </h2>
            <p className="mt-4 text-base text-[#7A7A9A] max-w-[540px] leading-relaxed">
              Each tier captures a different facet of Rio de Janeiro, distinguished by its border colour and edition count. Choose the tier that speaks to you.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-sm text-[#7A7A9A]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#4ADE80]"></span> All tiers live &mdash; Prices in USD
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6 mb-6 items-start">
          {/* Tier selector list */}
          <div className="flex flex-col gap-2.5">
            {collection.tiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setSelectedTierId(tier.id)}
                className={`tier-card rounded-[16px] border border-[#C8A84B]/20 bg-[#181825] p-[14px_18px] text-left w-full hover:border-[#C8A84B]/40 hover:bg-[#C8A84B]/5 transition-all ${selectedTierId === tier.id ? 'active' : ''}`}
              >
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full border-2" style={{ borderColor: tier.color, background: `${tier.color}30` }}></div>
                    <span className="font-display text-[18px] text-[#F0EEE8]">{tier.name}</span>
                  </div>
                  <span className="text-[16px] font-bold text-[#C8A84B]">${tier.price}</span>
                </div>
                <div className="flex justify-between items-center text-[11px] text-[#7A7A9A]">
                  <span>{tier.editions.toLocaleString()} editions &middot; ${tier.donation} donation</span>
                  <span>{tier.minted.toLocaleString()} / {tier.editions.toLocaleString()} sold</span>
                </div>
                <div className="mt-2 h-[3px] bg-[#C8A84B]/15 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${Math.round((tier.minted / tier.editions) * 100)}%`, background: tier.color }}></div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail card */}
          <div className="sticky top-[90px] flex flex-col gap-4">
            <div className="rounded-[20px] border-[3px] bg-[#181825] overflow-hidden shadow-2xl transition-all duration-500" style={{ borderColor: selectedTier.color }}>
              <div className="w-full aspect-square relative group overflow-hidden bg-[#0A0A0F]">
                <FallbackImage
                  src={collection.img}
                  alt={`${collection.city} — ${selectedTier.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  fallbackNode={
                    <div className="w-full h-full flex flex-col items-center justify-center" style={{ background: selectedTier.color }}>
                      <span className="font-display text-3xl text-white/50 mb-2">{collection.emoji}</span>
                      <span className="text-white font-bold">{collection.city}</span>
                    </div>
                  }
                />
                {/* Tier badge overlay */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase" style={{ background: selectedTier.color, color: selectedTier.id === 'diamond' || selectedTier.id === 'silver' ? '#0A0A0F' : '#FFFFFF' }}>
                  {selectedTier.name} Edition
                </div>
              </div>

              <div className="p-6">
                <div className="text-[11px] text-[#7A7A9A] mb-1.5 flex items-center gap-1.5 uppercase tracking-wider"><MapPin className="w-3 h-3" /> {collection.coords}</div>
                <div className="font-display text-3xl mb-1">{collection.emoji} {collection.city}</div>
                <div className="text-sm text-[#7A7A9A] mb-3">{collection.country} &middot; {collection.category} &middot; UNESCO {collection.year}</div>
                <p className="text-sm text-[#7A7A9A] leading-[1.8] mb-5">{collection.story}</p>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-[#0A0A0F] border border-[#C8A84B]/20 rounded-[10px] p-3">
                    <div className="text-[11px] text-[#7A7A9A] mb-1">Price</div>
                    <div className="text-lg font-bold text-[#C8A84B]">${selectedTier.price}</div>
                  </div>
                  <div className="bg-[#0A0A0F] border border-[#C8A84B]/20 rounded-[10px] p-3">
                    <div className="text-[11px] text-[#7A7A9A] mb-1">Edition Size</div>
                    <div className="text-lg font-semibold">{selectedTier.editions.toLocaleString()}</div>
                  </div>
                  <div className="bg-[#0A0A0F] border border-[#C8A84B]/20 rounded-[10px] p-3">
                    <div className="text-[11px] text-[#7A7A9A] mb-1">Donation per NFT</div>
                    <div className="text-lg font-semibold text-[#50C878]">${selectedTier.donation.toFixed(2)}</div>
                  </div>
                  <div className="bg-[#0A0A0F] border border-[#C8A84B]/20 rounded-[10px] p-3">
                    <div className="text-[11px] text-[#7A7A9A] mb-1">Tier</div>
                    <div className="text-lg font-semibold flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ background: selectedTier.color }}></div>
                      {selectedTier.name}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between text-xs text-[#7A7A9A] mb-1.5">
                  <span>Sales progress</span>
                  <span>{selectedTier.minted.toLocaleString()} / {selectedTier.editions.toLocaleString()}</span>
                </div>
                <div className="h-[5px] bg-[#C8A84B]/15 rounded-full overflow-hidden mb-5">
                  <div className="h-full rounded-full transition-all duration-700" style={{ width: `${tierPct}%`, background: selectedTier.color }}></div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setPaymentModalOpen(true)}
                    className="flex-1 py-3 px-6 rounded-full bg-[#C8A84B] text-[#0A0A0F] text-sm font-bold border border-[#E8C96A] hover:bg-[#E8C96A] transition-colors"
                  >
                    Buy This NFT &mdash; ${selectedTier.price}
                  </button>
                </div>
              </div>
            </div>

            {/* Atlas status bar */}
            <div className="rounded-[20px] border border-[#C8A84B]/20 bg-[linear-gradient(135deg,rgba(200,168,75,0.08)_0%,rgba(10,10,15,1)_100%)] p-5 hidden lg:block">
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#C8A84B] mb-1.5">Rio de Janeiro &mdash; All Tiers</div>
                  <div className="text-sm font-semibold text-[#F0EEE8] tracking-wide">
                    {totalMinted.toLocaleString()} <span className="text-[#7A7A9A] font-normal">/ {totalEditions.toLocaleString()} Sold</span>
                  </div>
                </div>
                <div className="text-right w-1/2 max-w-[130px]">
                  <div className="text-[9px] text-[#C8A84B] font-bold uppercase tracking-widest mb-1.5">{totalPct}% Complete</div>
                  <div className="h-[3px] w-full bg-[#C8A84B]/20 rounded-full overflow-hidden">
                    <div className="h-full bg-[#C8A84B] rounded-full transition-all duration-1000" style={{ width: `${totalPct}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DONATION TRANSPARENCY
          ══════════════════════════════════════ */}
      <section id="donations" className="py-24 bg-[#181825] border-t border-[#C8A84B]/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A84B] mb-2">Donation Transparency</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.15]">
              We Celebrate Cities.<br />We Give to Children.
            </h2>
            <p className="mt-4 text-base text-[#7A7A9A] max-w-[440px] leading-[1.8]">
              Every purchase includes a donation that goes toward heritage preservation and children's welfare around the world. Two trusted organisations receive the funds transparently.
            </p>

            {/* Dual donation cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              <div className="p-4 border border-[#0F52BA]/30 rounded-[14px] bg-[#0A0A0F]">
                <div className="text-xs text-[#0F52BA] tracking-[0.1em] uppercase mb-1.5 font-bold">Crypto Donations</div>
                <div className="font-display text-lg text-[#F0EEE8] mb-1">UNICEF</div>
                <div className="text-[12px] text-[#7A7A9A] leading-relaxed">Supporting children living in and around UNESCO World Heritage cities globally.</div>
              </div>
              <div className="p-4 border border-[#50C878]/30 rounded-[14px] bg-[#0A0A0F]">
                <div className="text-xs text-[#50C878] tracking-[0.1em] uppercase mb-1.5 font-bold">Fiat Donations</div>
                <div className="font-display text-lg text-[#F0EEE8] mb-1">World Heritage Fund</div>
                <div className="text-[12px] text-[#7A7A9A] leading-relaxed">Preserving, restoring, and promoting the world's most irreplaceable cultural and natural sites.</div>
              </div>
              <div className="p-4 border border-[#C8A84B]/20 rounded-[14px] bg-[#0A0A0F]">
                <div className="text-xs text-[#C8A84B] tracking-[0.1em] uppercase mb-1.5">How It Works</div>
                <div className="text-[13px] text-[#7A7A9A] leading-relaxed">Donations accumulate in a custodial multi-sig wallet. Once a collection fully sells out, funds are dispersed to the partner charities.</div>
              </div>
              <div className="p-4 border border-[#C8A84B]/20 rounded-[14px] bg-[#0A0A0F]">
                <div className="text-xs text-[#C8A84B] tracking-[0.1em] uppercase mb-1.5">Donation per Tier</div>
                <div className="text-[13px] text-[#7A7A9A] leading-relaxed">
                  Bronze: $0.01 &middot; Silver: $0.03 &middot; Gold: $0.05<br />
                  Emerald: $0.08 &middot; Sapphire: $0.12 &middot; Diamond: $0.20
                </div>
              </div>
            </div>

            {/* Clickable explanation */}
            <button
              onClick={() => setDonationInfoOpen(!donationInfoOpen)}
              className="mt-4 flex items-center gap-2 text-sm text-[#C8A84B] hover:text-[#E8C96A] transition-colors"
            >
              <Heart className="w-4 h-4" />
              Where exactly do donations go?
              {donationInfoOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {donationInfoOpen && (
              <div className="mt-3 p-4 border border-[#C8A84B]/20 rounded-xl bg-[#0A0A0F] text-sm text-[#7A7A9A] leading-relaxed">
                <p className="mb-2">Donations are split based on payment method:</p>
                <ul className="list-disc list-inside space-y-1 mb-3">
                  <li><strong className="text-[#F0EEE8]">Crypto payments</strong> &rarr; UNICEF (they accept cryptocurrency directly). Narrative: supporting children living in UNESCO-recognised cities worldwide.</li>
                  <li><strong className="text-[#F0EEE8]">Card/fiat payments</strong> &rarr; World Heritage Fund (via payment service provider). Focused on preservation, restoration, and promotion of heritage sites.</li>
                </ul>
                <p>Donations are held in a custodial multi-signature wallet until a full collection sells out, then dispersed to the respective organisations. All transactions are publicly verifiable on-chain.</p>
              </div>
            )}
          </div>

          {/* Public ledger + wallet */}
          <div className="border border-[#C8A84B]/20 rounded-[22px] bg-[#0A0A0F] p-7 shadow-2xl">
            <div className="flex justify-between items-start pb-5 border-b border-[#C8A84B]/20 mb-5">
              <div>
                <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A84B] mb-1">Public Ledger</div>
                <div className="font-display text-xl">Donation Tracker</div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C8A84B]/20 bg-[#C8A84B]/10 text-[11px] text-[#C8A84B] tracking-wide">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse"></div> Live
              </div>
            </div>

            <div className="space-y-2">
              {[
                { label: 'Total Collectibles Sold', val: totalMinted.toLocaleString() },
                { label: 'Donation Pool Balance', val: `$${totalDonations.toFixed(2)}`, highlight: true },
                { label: 'Collection Status', val: `${totalPct}% sold — accumulating` },
                { label: 'Dispersal Trigger', val: 'On full collection sell-out' },
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-[10px] border border-[#C8A84B]/10 bg-[#181825]">
                  <span className="text-[13px] text-[#7A7A9A]">{row.label}</span>
                  <span className={`text-[13px] font-semibold ${row.highlight ? 'text-[#50C878]' : 'text-[#F0EEE8]'}`}>{row.val}</span>
                </div>
              ))}
            </div>

            {/* Public wallet address */}
            <div className="mt-4 p-4 border border-[#C8A84B]/20 rounded-[14px] bg-[#181825]">
              <div className="text-[11px] text-[#7A7A9A] uppercase tracking-wider mb-2">Custodial Multi-Sig Wallet</div>
              <div className="flex items-center gap-2">
                <code className="text-[12px] text-[#C8A84B] bg-[#0A0A0F] px-3 py-1.5 rounded-lg border border-[#C8A84B]/20 flex-1 overflow-hidden text-ellipsis whitespace-nowrap font-mono">
                  {DONATION_WALLET}
                </code>
                <a
                  href={`https://explorer.solana.com/address/${DONATION_WALLET}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-3 py-1.5 rounded-lg border border-[#C8A84B]/30 bg-[#C8A84B]/10 text-[#C8A84B] text-[11px] font-bold hover:bg-[#C8A84B]/20 transition-colors flex items-center gap-1"
                >
                  Verify On-Chain <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex gap-2.5 items-start p-4 rounded-[14px] bg-[#C8A84B]/10 border border-[#C8A84B]/20 mt-4">
              <Shield className="w-4 h-4 text-[#C8A84B] shrink-0 mt-0.5" />
              <span className="text-xs text-[#7A7A9A] leading-relaxed">
                All donation transactions are publicly verifiable. The wallet address is a multi-signature custodial wallet — no single party can move funds unilaterally.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS — payment-first, no wallet-first
          ══════════════════════════════════════ */}
      <section id="how" className="py-24 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A84B] mb-2">How It Works</div>
          <h2 className="font-display text-4xl leading-[1.15] mb-12">Three Simple Steps</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-9 rounded-[20px] border border-[#C8A84B]/20 bg-[#181825] hover:border-[#C8A84B]/50 transition-colors relative">
              <div className="font-display text-5xl text-[#C8A84B]/15 mb-3 leading-none">01</div>
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="font-display text-xl mb-3">Choose Your City &amp; Tier</h3>
              <p className="text-sm text-[#7A7A9A] leading-relaxed">Browse our heritage city collections. Each city comes in six colour-coded tiers — pick the edition that speaks to you.</p>
              <div className="hidden md:block absolute right-[-28px] top-1/2 -translate-y-1/2 text-2xl text-[#C8A84B] z-10">&rarr;</div>
            </div>
            <div className="p-9 rounded-[20px] border border-[#C8A84B]/20 bg-[#181825] hover:border-[#C8A84B]/50 transition-colors relative">
              <div className="font-display text-5xl text-[#C8A84B]/15 mb-3 leading-none">02</div>
              <div className="text-3xl mb-4">💳</div>
              <h3 className="font-display text-xl mb-3">Pay Your Way</h3>
              <p className="text-sm text-[#7A7A9A] leading-relaxed">Use credit card, Apple Pay, or Google Pay — just like any online purchase. Crypto wallet connection is also available as an option.</p>
              <div className="hidden md:block absolute right-[-28px] top-1/2 -translate-y-1/2 text-2xl text-[#C8A84B] z-10">&rarr;</div>
            </div>
            <div className="p-9 rounded-[20px] border border-[#C8A84B]/20 bg-[#181825] hover:border-[#C8A84B]/50 transition-colors">
              <div className="font-display text-5xl text-[#C8A84B]/15 mb-3 leading-none">03</div>
              <div className="text-3xl mb-4">✨</div>
              <h3 className="font-display text-xl mb-3">Own Your Collectible</h3>
              <p className="text-sm text-[#7A7A9A] leading-relaxed">Your unique digital stamp is delivered instantly. A portion of your purchase supports heritage preservation and children's welfare worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          EXPLORER
          ══════════════════════════════════════ */}
      <section id="explorer" className="py-24 bg-[#181825] border-y border-[#C8A84B]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A84B] mb-2">Heritage Explorer</div>
          <h2 className="font-display text-4xl leading-[1.15] mb-6">Upcoming Cities</h2>
          <p className="text-base text-[#7A7A9A] max-w-lg mb-8">Preview the full atlas of cities that will join the WORLDMARKS collection over time.</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { key: 'all', label: 'All' },
              { key: 'americas', label: 'Americas' },
              { key: 'europe', label: 'Europe' },
              { key: 'asia', label: 'Asia & Oceania' },
              { key: 'africa', label: 'Africa & Middle East' },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => { setActiveFilter(f.key); setExplorerPage(1); }}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all ${activeFilter === f.key ? 'bg-[#C8A84B] text-[#0A0A0F] border-[#E8C96A]' : 'bg-transparent text-[#7A7A9A] border-[#C8A84B]/20 hover:border-[#C8A84B]/50'}`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {visibleExplorerSites.map((site, i) => (
              <div key={i} className="p-4 border border-[#C8A84B]/15 rounded-[14px] bg-[#0A0A0F] hover:border-[#C8A84B]/40 hover:bg-[#C8A84B]/5 transition-all text-center group cursor-pointer">
                <div className="text-2xl mb-2">{site.icon}</div>
                <div className="text-sm font-semibold text-[#F0EEE8] mb-0.5 group-hover:text-[#C8A84B] transition-colors">{site.city}</div>
                <div className="text-[10px] text-[#7A7A9A]">{site.country}</div>
              </div>
            ))}
          </div>

          {remainingSites > 0 && (
            <div className="text-center mt-6">
              <button onClick={() => setExplorerPage(explorerPage + 1)} className="px-6 py-2 rounded-full border border-[#C8A84B]/20 text-sm text-[#C8A84B] hover:bg-[#C8A84B]/10 transition-colors">
                Show {Math.min(remainingSites, PAGE_SIZE)} more
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════
          ROADMAP — Continent Clusters
          ══════════════════════════════════════ */}
      <section id="roadmap" className="py-24 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A84B] mb-2">Roadmap</div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.15] mb-4">The World Atlas</h2>
          <p className="text-base text-[#7A7A9A] max-w-lg mb-12">City drops organised by continent. New collections launch every quarter as we build the complete heritage atlas.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ROADMAP.map((cluster) => (
              <div key={cluster.region} className="border border-[#C8A84B]/20 rounded-[20px] bg-[#181825] p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-2xl">{cluster.emoji}</div>
                  <div>
                    <div className="font-display text-xl text-[#F0EEE8]">{cluster.region}</div>
                    <div className="text-[11px] text-[#7A7A9A]">{cluster.cities.length} cities planned</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {cluster.cities.map((city, i) => (
                    <div key={i} className="flex justify-between items-center p-3 rounded-[10px] border border-[#C8A84B]/10 bg-[#0A0A0F]">
                      <span className="text-[13px] text-[#F0EEE8]">{city.city}, {city.country}</span>
                      {city.status === 'live' ? (
                        <span className="text-[11px] font-bold text-[#4ADE80] flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] inline-block"></span> LIVE
                        </span>
                      ) : city.status === 'upcoming' ? (
                        <span className="text-[11px] font-semibold text-[#C8A84B]">{city.quarter}</span>
                      ) : (
                        <span className="text-[11px] text-[#7A7A9A]">{city.quarter}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          COLLECTOR LIST + NEXT DROPS
          ══════════════════════════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch">
          <div className="border border-[#C8A84B]/20 rounded-[22px] bg-[#181825] p-9">
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A84B] mb-2">Collector Archive</div>
            <h2 className="font-display text-[28px] leading-[1.2] mb-3">Built for people<br />who collect with taste.</h2>
            <p className="text-[15px] text-[#7A7A9A] leading-[1.8] mb-6">
              WORLDMARKS is designed to feel closer to an elegant stamp collector's cabinet
              than a typical digital marketplace. Build your personal atlas of places, one city at a time.
            </p>
            <ul className="space-y-2.5">
              {[
                'Six colour-coded tiers per city — choose your edition',
                'Pay with card, Apple Pay, Google Pay — or crypto',
                'Every purchase includes a verified charitable donation',
                'Edition provenance and serial number on every piece',
                'Personal archive grows with each new city launch',
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
            <p className="text-sm text-[#7A7A9A] leading-[1.7] mb-4">Get notified when new cities are released and when new chapters of the atlas open.</p>

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
                {emailJoined ? '\u2713 Joined' : 'Join Now'}
              </button>
            </div>
            <div className="text-[11px] text-[#7A7A9A] tracking-wider uppercase mb-6">No spam. Only collection launches and atlas updates.</div>

            <div className="pt-5 border-t border-[#C8A84B]/20">
              <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A84B] mb-2.5">Next Drops</div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs text-[#7A7A9A]"><span>🇲🇦 Marrakech</span><span>Q3 2026</span></div>
                <div className="flex justify-between text-xs text-[#7A7A9A]"><span>🇪🇬 Cairo</span><span>Q3 2026</span></div>
                <div className="flex justify-between text-xs text-[#7A7A9A]"><span>🇯🇵 Kyoto</span><span>Q3 2026</span></div>
                <div className="flex justify-between text-xs text-[#7A7A9A]"><span>🇮🇹 Venice</span><span>Q4 2026</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ — Generated from T&Cs
          ══════════════════════════════════════ */}
      <section id="faq" className="py-24 bg-[#181825] border-t border-[#C8A84B]/20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A84B] mb-2">FAQ</div>
          <h2 className="font-display text-4xl leading-[1.15] mb-12">Frequently Asked Questions</h2>

          <div className="space-y-3">
            {FAQ_DATA.map((faq, i) => (
              <div key={i} className="border border-[#C8A84B]/20 rounded-[14px] bg-[#0A0A0F] overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-[#C8A84B]/5 transition-colors"
                >
                  <span className="text-[15px] font-semibold text-[#F0EEE8] pr-4">{faq.q}</span>
                  {openFaqIndex === i ? <ChevronUp className="w-5 h-5 text-[#C8A84B] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#7A7A9A] shrink-0" />}
                </button>
                {openFaqIndex === i && (
                  <div className="px-5 pb-5 text-sm text-[#7A7A9A] leading-relaxed border-t border-[#C8A84B]/10 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER + T&C link
          ══════════════════════════════════════ */}
      <footer className="py-16 border-t border-[#C8A84B]/20 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2.5 font-display text-xl tracking-wider mb-3">
                <div className="w-9 h-9 nav-logo-mark rounded-full flex items-center justify-center text-xs font-bold text-[#0A0A0F]">W</div>
                WORLDMARKS
              </div>
              <p className="text-sm text-[#7A7A9A] max-w-[300px] leading-relaxed">
                Digital collectibles celebrating the world's greatest heritage sites. Every purchase supports preservation.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
              <div>
                <div className="text-[#C8A84B] font-bold text-xs uppercase tracking-wider mb-3">Collection</div>
                <ul className="space-y-2 text-[#7A7A9A]">
                  <li><a href="#collection" className="hover:text-[#F0EEE8] transition-colors">Rio de Janeiro</a></li>
                  <li><a href="#roadmap" className="hover:text-[#F0EEE8] transition-colors">Roadmap</a></li>
                  <li><a href="#explorer" className="hover:text-[#F0EEE8] transition-colors">Explorer</a></li>
                </ul>
              </div>
              <div>
                <div className="text-[#C8A84B] font-bold text-xs uppercase tracking-wider mb-3">About</div>
                <ul className="space-y-2 text-[#7A7A9A]">
                  <li><a href="#donations" className="hover:text-[#F0EEE8] transition-colors">Donations</a></li>
                  <li><a href="#faq" className="hover:text-[#F0EEE8] transition-colors">FAQ</a></li>
                  <li><a href="#how" className="hover:text-[#F0EEE8] transition-colors">How It Works</a></li>
                </ul>
              </div>
              <div>
                <div className="text-[#C8A84B] font-bold text-xs uppercase tracking-wider mb-3">Legal</div>
                <ul className="space-y-2 text-[#7A7A9A]">
                  <li><button onClick={() => setTermsModalOpen(true)} className="hover:text-[#F0EEE8] transition-colors">Terms &amp; Conditions</button></li>
                  <li><button onClick={() => setTermsModalOpen(true)} className="hover:text-[#F0EEE8] transition-colors">Privacy Policy</button></li>
                  <li><button onClick={() => setTermsModalOpen(true)} className="hover:text-[#F0EEE8] transition-colors">Refund Policy</button></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-[#C8A84B]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#7A7A9A]">
            <div>&copy; 2026 ParagonPayMarketPlaceGroup Ltd. All rights reserved.</div>
            <div className="flex gap-4">
              <button onClick={() => setTermsModalOpen(true)} className="hover:text-[#C8A84B] transition-colors">Terms &amp; Conditions</button>
              <span className="text-[#C8A84B]/30">|</span>
              <button onClick={() => setTermsModalOpen(true)} className="hover:text-[#C8A84B] transition-colors">Privacy Policy</button>
              <span className="text-[#C8A84B]/30">|</span>
              <button onClick={() => setTermsModalOpen(true)} className="hover:text-[#C8A84B] transition-colors">Risk Disclosure</button>
            </div>
          </div>
        </div>
      </footer>

      {/* ══════════════════════════════════════
          PAYMENT MODAL — Card / Apple Pay / Google Pay + crypto secondary
          ══════════════════════════════════════ */}
      {paymentModalOpen && (
        <div className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setPaymentModalOpen(false)}>
          <div className="modal-content w-full max-w-lg bg-[#181825] border border-[#C8A84B]/30 rounded-[24px] p-8 relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setPaymentModalOpen(false)} className="absolute top-5 right-5 text-[#7A7A9A] hover:text-[#F0EEE8] transition-colors">
              <X className="w-5 h-5" />
            </button>

            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8A84B] mb-1">Purchase</div>
            <div className="font-display text-2xl mb-6">Buy Your Collectible</div>

            {/* NFT preview */}
            <div className="flex items-center gap-4 p-4 border border-[#C8A84B]/20 rounded-[14px] bg-[#0A0A0F] mb-6">
              <div className="w-16 h-16 rounded-xl border-2 overflow-hidden shrink-0" style={{ borderColor: selectedTier.color }}>
                <FallbackImage
                  src={collection.img}
                  alt={collection.city}
                  className="w-full h-full object-cover"
                  fallbackNode={<div className="w-full h-full" style={{ background: selectedTier.color }}></div>}
                />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-[#F0EEE8]">{collection.city} &mdash; {selectedTier.name} Edition</div>
                <div className="text-xs text-[#7A7A9A]">Includes ${selectedTier.donation.toFixed(2)} donation</div>
              </div>
              <div className="text-xl font-bold text-[#C8A84B]">${selectedTier.price}</div>
            </div>

            {/* Tier quick-select */}
            <div className="mb-6">
              <div className="text-xs text-[#7A7A9A] mb-2.5">Select Tier</div>
              <div className="grid grid-cols-6 gap-2">
                {collection.tiers.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTierId(t.id)}
                    className={`p-2 rounded-lg border text-center transition-all ${selectedTierId === t.id ? 'border-[#C8A84B] bg-[#C8A84B]/15' : 'border-[#C8A84B]/15 bg-[#0A0A0F] hover:border-[#C8A84B]/40'}`}
                  >
                    <div className="w-4 h-4 rounded-full mx-auto mb-1" style={{ background: t.color }}></div>
                    <div className="text-[10px] text-[#7A7A9A]">${t.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Payment options */}
            <div className="space-y-3 mb-6">
              <div className="text-xs text-[#7A7A9A] uppercase tracking-wider mb-1">Payment Method</div>

              {/* Credit/Debit Card */}
              <button className="w-full flex items-center gap-4 p-4 rounded-[14px] border border-[#C8A84B]/20 bg-[#0A0A0F] hover:border-[#C8A84B]/50 hover:bg-[#C8A84B]/5 transition-all text-left">
                <div className="w-10 h-10 rounded-lg bg-[#C8A84B]/15 flex items-center justify-center"><CreditCard className="w-5 h-5 text-[#C8A84B]" /></div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-[#F0EEE8]">Credit / Debit Card</div>
                  <div className="text-xs text-[#7A7A9A]">Visa, Mastercard, Amex</div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#7A7A9A]" />
              </button>

              {/* Apple Pay */}
              <button className="w-full flex items-center gap-4 p-4 rounded-[14px] border border-[#C8A84B]/20 bg-[#0A0A0F] hover:border-[#C8A84B]/50 hover:bg-[#C8A84B]/5 transition-all text-left">
                <div className="w-10 h-10 rounded-lg bg-[#F0EEE8]/10 flex items-center justify-center"><Smartphone className="w-5 h-5 text-[#F0EEE8]" /></div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-[#F0EEE8]">Apple Pay</div>
                  <div className="text-xs text-[#7A7A9A]">Fast and secure</div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#7A7A9A]" />
              </button>

              {/* Google Pay */}
              <button className="w-full flex items-center gap-4 p-4 rounded-[14px] border border-[#C8A84B]/20 bg-[#0A0A0F] hover:border-[#C8A84B]/50 hover:bg-[#C8A84B]/5 transition-all text-left">
                <div className="w-10 h-10 rounded-lg bg-[#4285F4]/15 flex items-center justify-center"><Globe className="w-5 h-5 text-[#4285F4]" /></div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-[#F0EEE8]">Google Pay</div>
                  <div className="text-xs text-[#7A7A9A]">Fast and secure</div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#7A7A9A]" />
              </button>

              {/* Crypto wallet — secondary/advanced */}
              <div className="pt-3 border-t border-[#C8A84B]/10">
                <div className="text-[10px] text-[#7A7A9A] uppercase tracking-wider mb-2">Advanced</div>
                <button className="w-full flex items-center gap-4 p-4 rounded-[14px] border border-[#C8A84B]/10 bg-[#0A0A0F] hover:border-[#C8A84B]/30 hover:bg-[#C8A84B]/5 transition-all text-left opacity-80 hover:opacity-100">
                  <div className="w-10 h-10 rounded-lg bg-[#9945FF]/15 flex items-center justify-center"><Wallet className="w-5 h-5 text-[#9945FF]" /></div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#F0EEE8]">Connect Crypto Wallet</div>
                    <div className="text-xs text-[#7A7A9A]">Phantom, Backpack, Solflare</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#7A7A9A]" />
                </button>
              </div>
            </div>

            <div className="text-[10px] text-[#7A7A9A] text-center leading-relaxed">
              By purchasing, you agree to our{' '}
              <button onClick={() => { setPaymentModalOpen(false); setTermsModalOpen(true); }} className="text-[#C8A84B] hover:underline">Terms &amp; Conditions</button>.
              All prices in USD. NFTs are collectibles only, not investments.
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════
          TERMS & CONDITIONS MODAL
          ══════════════════════════════════════ */}
      {termsModalOpen && (
        <div className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setTermsModalOpen(false)}>
          <div className="modal-content w-full max-w-2xl bg-[#181825] border border-[#C8A84B]/30 rounded-[24px] p-8 relative max-h-[85vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setTermsModalOpen(false)} className="absolute top-5 right-5 text-[#7A7A9A] hover:text-[#F0EEE8] transition-colors sticky">
              <X className="w-5 h-5" />
            </button>

            <div className="font-display text-2xl mb-6 text-[#C8A84B]">Terms &amp; Conditions</div>
            <pre className="whitespace-pre-wrap text-sm text-[#7A7A9A] leading-relaxed font-sans">
              {TERMS_TEXT}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
