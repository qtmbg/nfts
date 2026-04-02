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
  Sun,
  Moon,
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
  img: string;
  backImg: string;
  landmark: string;
  description: string;
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

type FAQItem = { q: string; a: string };

/* ───────────────────────────────────────────
   FALLBACK IMAGE
   ─────────────────────────────────────────── */

const FallbackImage = ({ src, alt, className, style, fallbackNode }: FallbackImageProps) => {
  const [hasError, setHasError] = useState(false);
  if (!src || hasError) return <>{fallbackNode}</>;
  return <img src={src} alt={alt} className={className} style={style} onError={() => setHasError(true)} />;
};

/* ───────────────────────────────────────────
   DATA — RIO DE JANEIRO: 6 COLOR-CODED TIERS
   Images: /public/rio-{tier}.png + rio-{tier}-verso.png
   NOTE: diamond images missing — using emerald placeholder
   NOTE: sapphire front uses filename 'rio-sapphire.png' (typo in file)
   ─────────────────────────────────────────── */

const RIO_TIERS: Tier[] = [
  { id: 'bronze',   name: 'Bronze',   price: 25,  color: '#CD7F32', borderColor: '#E8A060', donation: 0.01, editions: 5000, minted: 3200, img: '/rio-bronze.png',  backImg: '/rio-bronze-verso.png',
    landmark: '\u{1F5FF} Cristo Redentor',
    description: 'Standing 38 metres tall atop Corcovado Mountain inside Tijuca National Park, Christ the Redeemer was completed in 1931 after nine years of construction. Designed by French-Polish sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, the Art Deco statue became one of the New Seven Wonders of the World in 2007. Its soapstone and reinforced-concrete form has withstood lightning strikes, tropical storms, and nearly a century of pilgrimage.' },
  { id: 'silver',   name: 'Silver',   price: 50,  color: '#C0C0C0', borderColor: '#D8D8D8', donation: 0.03, editions: 3000, minted: 1800, img: '/rio-silver.png',  backImg: '/rio-silver-verso.png',
    landmark: '\u26F0\uFE0F P\u00e3o de A\u00e7\u00facar (Sugarloaf Mountain)',
    description: 'Rising 396 metres above Guanabara Bay, Sugarloaf is a quartz and granite monolith formed over 600 million years ago during the late Precambrian era. The first cable car ascent was completed in 1912 \u2014 only the third aerial tramway built anywhere in the world. The peak witnessed key moments in Brazilian history, from early Portuguese exploration of the bay in 1502 to its role as a military observation point during the colonial period.' },
  { id: 'gold',     name: 'Gold',     price: 75,  color: '#FFD700', borderColor: '#FFE44D', donation: 0.05, editions: 2000, minted: 1100, img: '/rio-gold.png',    backImg: '/rio-gold-verso.png',
    landmark: '\u{1F3D6}\uFE0F Copacabana & Ipanema',
    description: 'Copacabana\u2019s four-kilometre crescent of sand became world-famous after the Copacabana Palace hotel opened in 1923, drawing international celebrities and diplomats. Its iconic black-and-white Portuguese stone promenade was designed by Roberto Burle Marx. Adjacent Ipanema gained global recognition through the 1962 bossa nova classic \u201CThe Girl from Ipanema,\u201D composed by Ant\u00f4nio Carlos Jobim and Vin\u00edcius de Moraes at the nearby Veloso bar.' },
  { id: 'emerald',  name: 'Emerald',  price: 100, color: '#50C878', borderColor: '#7AE8A0', donation: 0.08, editions: 1000, minted: 480,  img: '/rio-emerald.png', backImg: '/rio-emerald-verso.png',
    landmark: '\u{1F3D8}\uFE0F Rocinha',
    description: 'Established in the 1930s when rural migrants settled the hillside between S\u00e3o Conrado and G\u00e1vea, Rocinha grew into Brazil\u2019s largest favela with an estimated 70,000\u2013100,000 residents. Its vertical urbanisation represents decades of self-built architecture, community organisation, and cultural production. The community has produced notable artists, musicians, and entrepreneurs, and its complex social infrastructure includes schools, clinics, and a thriving local economy.' },
  { id: 'sapphire', name: 'Sapphire', price: 150, color: '#0F52BA', borderColor: '#4080E0', donation: 0.12, editions: 500,  minted: 190,  img: '/rio-sapphire.png', backImg: '/rio-sapphire-verso.png',
    landmark: '\u{1F3A8} Escadaria Selar\u00f3n',
    description: 'Beginning in 1990, Chilean-born artist Jorge Selar\u00f3n dedicated the last 23 years of his life to covering 215 steps connecting Joaquim Silva Street to the convent of Santa Teresa. He affixed over 2,000 tiles sourced from more than 60 countries, transforming a crumbling public staircase into one of the most photographed landmarks in South America. Selar\u00f3n called it \u201Cmy tribute to the Brazilian people,\u201D and the work was never officially commissioned \u2014 it was a singular act of devotion.' },
  { id: 'diamond',  name: 'Diamond',  price: 200, color: '#B9F2FF', borderColor: '#E0F8FF', donation: 0.20, editions: 250,  minted: 60,   img: '/rio-diamond.png', backImg: '/rio-diamond-verso.png',
    landmark: '\u{1F52C} Museu do Amanh\u00e3',
    description: 'Opened in December 2015 at Pra\u00e7a Mau\u00e1 on Rio\u2019s revitalised port waterfront, the Museum of Tomorrow was designed by Spanish architect Santiago Calatrava as part of the Porto Maravilha urban renewal project. The 15,000 m\u00b2 building is engineered for sustainability: its moveable solar spine tracks the sun, rainwater is collected from the bay for cooling, and the structure is designed to return to nature if abandoned. It has welcomed over 4 million visitors since opening.' },
];

const COLLECTIONS: CityCollection[] = [
  {
    id: 'rio',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    emoji: '\u{1F1E7}\u{1F1F7}',
    year: 2012,
    category: 'Cultural Landscape',
    description: 'A lush and elevated collectible shaped by mountain, sea, curve, and sacred presence. Six unique editions honour the Carioca landscape.',
    story: 'Rio brings a different emotional frequency to the atlas: light, elevation, tropical force, and a sense of living spectacle. The Carioca landscape is a place where nature and city become one. Each tier captures a different facet of Rio \u2014 from the golden sunrise on Sugarloaf to the deep sapphire of Guanabara Bay.',
    coords: '22.9068\u00b0S 43.1729\u00b0W',
    tiers: RIO_TIERS,
  },
];

/* ─── ROADMAP ─────────────────────────────── */

const ROADMAP = [
  { region: 'Americas', emoji: '\u{1F30E}', color: '#50C878', cities: [
    { city: 'Rio de Janeiro', country: 'Brazil', status: 'live' as const },
    { city: 'Havana', country: 'Cuba', status: 'upcoming' as const, quarter: 'Q3 2026' },
    { city: 'Machu Picchu', country: 'Peru', status: 'upcoming' as const, quarter: 'Q4 2026' },
    { city: 'Cartagena', country: 'Colombia', status: 'planned' as const, quarter: '2027' },
    { city: 'Chich\u00e9n Itz\u00e1', country: 'Mexico', status: 'planned' as const, quarter: '2027' },
    { city: 'Oaxaca', country: 'Mexico', status: 'planned' as const, quarter: '2027' },
  ]},
  { region: 'Europe', emoji: '\u{1F30D}', color: '#0F52BA', cities: [
    { city: 'Venice', country: 'Italy', status: 'upcoming' as const, quarter: 'Q3 2026' },
    { city: 'Istanbul', country: 'T\u00fcrkiye', status: 'upcoming' as const, quarter: 'Q4 2026' },
    { city: 'Prague', country: 'Czechia', status: 'planned' as const, quarter: '2027' },
    { city: 'Dubrovnik', country: 'Croatia', status: 'planned' as const, quarter: '2027' },
    { city: 'Alhambra', country: 'Spain', status: 'planned' as const, quarter: '2027' },
    { city: 'Bruges', country: 'Belgium', status: 'planned' as const, quarter: '2027' },
  ]},
  { region: 'Asia & Oceania', emoji: '\u{1F30F}', color: '#FFD700', cities: [
    { city: 'Kyoto', country: 'Japan', status: 'upcoming' as const, quarter: 'Q3 2026' },
    { city: 'Bangkok', country: 'Thailand', status: 'upcoming' as const, quarter: 'Q4 2026' },
    { city: 'Angkor', country: 'Cambodia', status: 'planned' as const, quarter: '2027' },
    { city: 'Sydney', country: 'Australia', status: 'planned' as const, quarter: '2027' },
    { city: 'Taj Mahal', country: 'India', status: 'planned' as const, quarter: '2027' },
    { city: 'Borobudur', country: 'Indonesia', status: 'planned' as const, quarter: '2027' },
  ]},
  { region: 'Africa & Middle East', emoji: '\u{1F30D}', color: '#CD7F32', cities: [
    { city: 'Marrakech', country: 'Morocco', status: 'upcoming' as const, quarter: 'Q3 2026' },
    { city: 'Cairo', country: 'Egypt', status: 'upcoming' as const, quarter: 'Q4 2026' },
    { city: 'Petra', country: 'Jordan', status: 'planned' as const, quarter: '2027' },
    { city: 'Fez', country: 'Morocco', status: 'planned' as const, quarter: '2027' },
    { city: 'Lalibela', country: 'Ethiopia', status: 'planned' as const, quarter: '2027' },
    { city: 'Timbuktu', country: 'Mali', status: 'planned' as const, quarter: '2027' },
  ]},
];

/* ─── FAQ ─────────────────────────────────── */

const FAQ_DATA: FAQItem[] = [
  { q: 'What exactly am I buying?', a: 'You are purchasing a digital collectible NFT \u2014 a unique, hand-crafted digital stamp honouring a UNESCO World Heritage Site. These are collectibles only, not investments or financial products. No representation is made regarding future value, resale value, or profit potential.' },
  { q: 'How do I pay?', a: 'We accept credit/debit cards, Apple Pay, and Google Pay for a simple checkout experience. If you prefer, you can also connect a crypto wallet as a secondary payment option. All prices are displayed in USD.' },
  { q: 'Can I get a refund?', a: 'All NFT purchases are final and non-refundable once successfully delivered to your wallet. Refunds are only possible if the transaction fails or the NFT is not delivered.' },
  { q: 'Who operates this platform?', a: 'The platform is operated by ParagonPayMarketPlaceGroup Ltd, governed by the laws of England and Wales. Full terms of use are available at the bottom of this page.' },
  { q: 'Do I need a crypto wallet?', a: 'No. You can purchase with a standard credit card, Apple Pay, or Google Pay. A wallet will be created for you to hold your collectible. Advanced users can optionally connect their own Solana-compatible wallet.' },
  { q: 'What happens to the donation portion?', a: 'Each purchase includes a small donation amount that goes into a custodial multi-signature wallet. Once a full collection sells out, crypto donations are sent to UNICEF and fiat donations are sent to the World Heritage Fund. All transactions are publicly verifiable on-chain.' },
  { q: 'How do I know my donation actually reaches the charities?', a: 'The custodial donation wallet address is publicly displayed on our site. Anyone can verify the balance and all outgoing transfers on the blockchain explorer at any time.' },
  { q: 'What are the different tiers?', a: 'Each city collection comes in six colour-coded tiers: Bronze ($25), Silver ($50), Gold ($75), Emerald ($100), Sapphire ($150), and Diamond ($200). The border colour of each NFT image signals which tier it belongs to. Higher tiers have fewer editions, making them more exclusive.' },
  { q: 'Is there an age requirement?', a: 'Yes, users must be at least 18 years old to use the platform, in compliance with applicable laws.' },
  { q: 'Am I responsible for my wallet security?', a: 'Yes. Users are solely responsible for wallet security, private keys, and transactions. The platform facilitates transactions but does not act as a custodian of your assets beyond the initial purchase.' },
  { q: 'What data do you collect about me?', a: 'We collect identity data, contact details, wallet addresses, and transaction history for account creation, transaction processing, and compliance (KYC/AML). We implement appropriate technical safeguards and comply with UK GDPR. You have rights to access, rectification, erasure, and restriction of your data.' },
  { q: 'Can my account be suspended?', a: 'Accounts may be suspended or terminated for breach of the terms of use, including fraud, misuse, or attempts to hack or exploit the platform.' },
];

/* ─── T&C TEXT ────────────────────────────── */

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
Once an NFT has been successfully delivered to the user\u2019s wallet, all sales are final and non-refundable.

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
All NFT purchases are final and non-refundable once successfully delivered to the user\u2019s wallet. Refunds only possible if the transaction fails or the NFT is not delivered.

---

RISK DISCLOSURE
Users acknowledge: NFTs are fixed price and strictly not regarded to be held as investments. Blockchain transactions are irreversible. Wallets may be lost. The regulatory environment may change.`;

/* ─── EXPLORER SITES ──────────────────────── */

const ALL_SITES: SiteItem[] = [
  { city: 'Rio de Janeiro', country: 'Brazil', icon: '\u{1F1E7}\u{1F1F7}', color: '#1A5C3A', accent: '#C8A84B', region: 'americas', type: 'cultural' },
  { city: 'Havana', country: 'Cuba', icon: '\u{1F1E8}\u{1F1FA}', color: '#1A6E8A', accent: '#C8A84B', region: 'americas', type: 'cultural' },
  { city: 'Machu Picchu', country: 'Peru', icon: '\u{1F3D4}\uFE0F', color: '#2A5C2A', accent: '#A8C87A', region: 'americas', type: 'mixed' },
  { city: 'Marrakech', country: 'Morocco', icon: '\u{1F1F2}\u{1F1E6}', color: '#C24A1E', accent: '#E8A84B', region: 'africa', type: 'cultural' },
  { city: 'Cairo', country: 'Egypt', icon: '\u{1F1EA}\u{1F1EC}', color: '#C27F1E', accent: '#F5D78A', region: 'africa', type: 'cultural' },
  { city: 'Sydney', country: 'Australia', icon: '\u{1F1E6}\u{1F1FA}', color: '#1A4A8A', accent: '#E8C8F0', region: 'asia', type: 'cultural' },
  { city: 'Bangkok', country: 'Thailand', icon: '\u{1F1F9}\u{1F1ED}', color: '#8B5A1A', accent: '#E8C8F0', region: 'asia', type: 'cultural' },
  { city: 'Petra', country: 'Jordan', icon: '\u{1F3DC}\uFE0F', color: '#8B3A1E', accent: '#E8C87A', region: 'africa', type: 'cultural' },
  { city: 'Venice', country: 'Italy', icon: '\u{1F6A3}', color: '#1A4A8A', accent: '#E8D0A0', region: 'europe', type: 'cultural' },
  { city: 'Angkor', country: 'Cambodia', icon: '\u{1F6D5}', color: '#5C3A1A', accent: '#E8B87A', region: 'asia', type: 'cultural' },
  { city: 'Alhambra', country: 'Spain', icon: '\u{1F3EF}', color: '#8B2A1A', accent: '#E8B07A', region: 'europe', type: 'cultural' },
  { city: 'Versailles', country: 'France', icon: '\u{1F339}', color: '#3A2A5C', accent: '#C8A8E8', region: 'europe', type: 'cultural' },
  { city: 'Acropolis', country: 'Greece', icon: '\u{1F3DB}\uFE0F', color: '#3A5C2A', accent: '#C8E8A8', region: 'europe', type: 'cultural' },
  { city: 'Taj Mahal', country: 'India', icon: '\u{1F54C}', color: '#2A3A5C', accent: '#A8C8E8', region: 'asia', type: 'cultural' },
  { city: 'Great Wall', country: 'China', icon: '\u{1F9F1}', color: '#5C3A2A', accent: '#E8C8A8', region: 'asia', type: 'cultural' },
  { city: 'Colosseum', country: 'Italy', icon: '\u{1F3DF}\uFE0F', color: '#5C2A1A', accent: '#E8A87A', region: 'europe', type: 'cultural' },
  { city: 'Chich\u00e9n Itz\u00e1', country: 'Mexico', icon: '\u{1F5FF}', color: '#3A5C3A', accent: '#A8E8A8', region: 'americas', type: 'cultural' },
  { city: 'Dubrovnik', country: 'Croatia', icon: '\u{1F30A}', color: '#1A3A5C', accent: '#A8C8E8', region: 'europe', type: 'cultural' },
  { city: 'Fez', country: 'Morocco', icon: '\u{1F54C}', color: '#8B5A1A', accent: '#E8C87A', region: 'africa', type: 'cultural' },
  { city: 'Kyoto', country: 'Japan', icon: '\u26E9\uFE0F', color: '#6B2D8B', accent: '#E8C8F0', region: 'asia', type: 'cultural' },
  { city: 'Istanbul', country: 'T\u00fcrkiye', icon: '\u{1F54C}', color: '#1A3A7A', accent: '#C8A84B', region: 'europe', type: 'cultural' },
  { city: 'Prague', country: 'Czechia', icon: '\u{1F3F0}', color: '#2A1A5C', accent: '#A8A8E8', region: 'europe', type: 'cultural' },
  { city: 'Cartagena', country: 'Colombia', icon: '\u{1F3EF}', color: '#8B1A3A', accent: '#E8A8C8', region: 'americas', type: 'cultural' },
  { city: 'Oaxaca', country: 'Mexico', icon: '\u{1F3A8}', color: '#5C2A5C', accent: '#E8A8E8', region: 'americas', type: 'cultural' },
  { city: 'Lalibela', country: 'Ethiopia', icon: '\u26EA', color: '#5C2A2A', accent: '#E8A8A8', region: 'africa', type: 'cultural' },
  { city: 'Timbuktu', country: 'Mali', icon: '\u{1F54C}', color: '#8B6A1A', accent: '#E8D07A', region: 'africa', type: 'cultural' },
  { city: 'Bruges', country: 'Belgium', icon: '\u26EA', color: '#1A3A5C', accent: '#A8C8E8', region: 'europe', type: 'cultural' },
  { city: 'Borobudur', country: 'Indonesia', icon: '\u{1F6D5}', color: '#3A5C1A', accent: '#A8E87A', region: 'asia', type: 'cultural' },
  { city: 'Hoi An', country: 'Vietnam', icon: '\u{1F3EE}', color: '#8B5A1A', accent: '#E8C87A', region: 'asia', type: 'cultural' },
  { city: 'Bagan', country: 'Myanmar', icon: '\u{1F6D5}', color: '#8B4A1A', accent: '#E8C07A', region: 'asia', type: 'cultural' },
];

const DONATION_WALLET = '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU';

/* ═══════════════════════════════════════════
   APP
   ═══════════════════════════════════════════ */

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
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

  /* Theme palette */
  const dk = darkMode;
  const bg    = dk ? '#0A0A0F' : '#F8F6F1';
  const bg2   = dk ? '#181825' : '#FFFFFF';
  const tx    = dk ? '#F0EEE8' : '#1A1A2E';
  const tx2   = dk ? '#7A7A9A' : '#6B6B80';
  const bd    = dk ? 'rgba(200,168,75,0.2)' : 'rgba(200,168,75,0.25)';
  const cardBg = dk ? '#0A0A0F' : '#FFFFFF';
  const gold  = dk ? '#C8A84B' : '#9A7C2E';
  const goldLight = dk ? '#E8C96A' : '#C8A84B';
  const inputBg = dk ? '#0A0A0F' : '#FFFFFF';

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

  const handleEmailJoin = () => { if (emailInput && emailInput.includes('@')) setEmailJoined(true); };

  const filteredExplorer = ALL_SITES.filter((d) => {
    if (activeFilter === 'all') return true;
    if (['cultural', 'natural', 'mixed'].includes(activeFilter)) return d.type === activeFilter;
    return d.region === activeFilter;
  });
  const visibleExplorerSites = filteredExplorer.slice(0, explorerPage * PAGE_SIZE);
  const remainingSites = filteredExplorer.length - visibleExplorerSites.length;

  /* color fallback node builder */
  const colorFallback = (color: string, label: string) => (
    <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: `radial-gradient(circle, ${color} 0%, ${bg} 100%)` }}>
      <span className="font-display text-[9px] font-bold tracking-widest uppercase drop-shadow-md" style={{ color: goldLight }}>{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen font-sans selection:bg-[#C8A84B]/30 overflow-x-hidden transition-colors duration-300" style={{ background: bg, color: tx }}>

      {/* ── GLOBAL STYLES ──────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        .font-display { font-family: 'Georgia', 'Times New Roman', serif; }
        .nav-logo-mark { background: conic-gradient(from 0deg, #9A7C2E, #C8A84B, #E8C96A, #C8A84B, #9A7C2E); }
        .hero-bg {
          background: radial-gradient(ellipse 80% 60% at 50% 30%, rgba(200,168,75,0.08) 0%, transparent 70%),
                      radial-gradient(ellipse 50% 50% at 20% 80%, rgba(26,92,58,0.15) 0%, transparent 60%),
                      radial-gradient(ellipse 40% 50% at 80% 70%, rgba(194,74,30,0.12) 0%, transparent 60%);
        }
        .hero-grid {
          background-image: linear-gradient(${bd} 1px, transparent 1px), linear-gradient(90deg, ${bd} 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%);
        }

        /* ── FLIP CARD ──────────────────────── */
        .flip-coin { perspective: 900px; }
        .flip-coin-inner {
          transform-style: preserve-3d;
          transition: transform 0.7s cubic-bezier(0.4, 0.0, 0.2, 1);
        }
        .flip-coin:hover .flip-coin-inner { transform: rotateY(180deg); }
        .flip-face { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .flip-back { transform: rotateY(180deg); }

        /* ── HERO FLOAT ─────────────────────── */
        .stamp-float { animation: floatStamp 4s ease-in-out infinite; }
        @keyframes floatStamp { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        .stamp-float:hover { animation-play-state: paused; }

        /* ── COLLECTION FLIP ────────────────── */
        .detail-flip { perspective: 1200px; }
        .detail-flip-inner {
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
        }
        .detail-flip:hover .detail-flip-inner { transform: rotateY(180deg); }

        .tier-card.active { border-color: ${gold}; background: rgba(200,168,75,0.1); box-shadow: 0 0 20px rgba(200,168,75,0.15); }
        .modal-overlay { animation: fadeIn 200ms ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .modal-content { animation: slideUp 300ms ease-out; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}} />

      {/* ═══════ NAV ═══════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 backdrop-blur-xl transition-all duration-300" style={{ borderBottom: `1px solid ${bd}`, background: dk ? (scrolled ? 'rgba(10,10,15,0.95)' : 'rgba(10,10,15,0.85)') : (scrolled ? 'rgba(248,246,241,0.95)' : 'rgba(248,246,241,0.85)'), padding: scrolled ? '12px 24px' : '20px 24px' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 font-display text-xl tracking-wider" style={{ color: tx }}>
            <div className="w-9 h-9 nav-logo-mark rounded-full flex items-center justify-center text-xs font-bold text-[#0A0A0F]">W</div>
            WORLDMARKS
          </a>
          <ul className="hidden md:flex gap-9 text-sm font-medium tracking-wide" style={{ color: tx2 }}>
            <li><a href="#collection" className="hover:opacity-80 transition-opacity">Collection</a></li>
            <li><a href="#explorer" className="hover:opacity-80 transition-opacity">Explorer</a></li>
            <li><a href="#donations" className="hover:opacity-80 transition-opacity">Donations</a></li>
            <li><a href="#roadmap" className="hover:opacity-80 transition-opacity">Roadmap</a></li>
            <li><a href="#faq" className="hover:opacity-80 transition-opacity">FAQ</a></li>
          </ul>
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 rounded-full flex items-center justify-center border transition-all hover:scale-110"
              style={{ borderColor: bd, background: dk ? 'rgba(200,168,75,0.1)' : 'rgba(200,168,75,0.15)' }}
              title={dk ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dk ? <Sun className="w-4 h-4" style={{ color: gold }} /> : <Moon className="w-4 h-4" style={{ color: gold }} />}
            </button>
            <button
              onClick={() => setPaymentModalOpen(true)}
              className="px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all border hover:-translate-y-0.5"
              style={{ background: gold, color: '#0A0A0F', borderColor: goldLight }}
            >
              Buy NFT
            </button>
          </div>
        </div>
      </nav>

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 hero-bg"></div>
        <div className="absolute inset-0 hero-grid"></div>
        <div className="relative z-10 text-center w-full max-w-5xl px-6 mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase mb-8" style={{ borderColor: bd, background: `${gold}15`, color: gold }}>
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: gold }}></div>
            Digital Collectibles &middot; Supporting Heritage Preservation
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1.1] tracking-tight mb-6">
            Collect <span style={{ color: gold }}>NFT</span> of the World's<br />Greatest Places
          </h1>

          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: tx2 }}>
            Hand-crafted digital stamps honouring UNESCO World Heritage Sites.
            Beautiful art. Timeless places. Every purchase supports heritage preservation.
          </p>

          {/* ── BIG HERO COIN — flips on hover ── */}
          <div className="flex justify-center mb-10">
            <div className="flip-coin w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] cursor-pointer" onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="flip-coin-inner relative w-full h-full">
                {/* FRONT */}
                <div className="flip-face absolute inset-0 rounded-full border-[4px] overflow-hidden" style={{ borderColor: goldLight, boxShadow: `0 20px 60px ${gold}44, 0 0 120px ${gold}22` }}>
                  <FallbackImage
                    src="/rio-hero.png"
                    alt="WORLDMARKS Hero Coin"
                    className="w-full h-full object-cover rounded-full"
                    fallbackNode={<div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: `radial-gradient(circle, ${gold} 0%, ${bg} 100%)` }}><span className="font-display text-2xl" style={{ color: goldLight }}>WORLDMARKS</span></div>}
                  />
                </div>
                {/* BACK */}
                <div className="flip-face flip-back absolute inset-0 rounded-full border-[4px] overflow-hidden" style={{ borderColor: goldLight, boxShadow: `0 20px 60px ${gold}44, 0 0 120px ${gold}22` }}>
                  <FallbackImage
                    src="/rio-hero-verso.png"
                    alt="WORLDMARKS Hero Coin Back"
                    className="w-full h-full object-cover rounded-full"
                    fallbackNode={<div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: `radial-gradient(circle, ${gold} 0%, ${bg} 100%)` }}><span className="font-display text-2xl" style={{ color: goldLight }}>VERSO</span></div>}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button onClick={() => setPaymentModalOpen(true)} className="px-8 py-3.5 rounded-xl font-bold tracking-wide border hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(200,168,75,0.3)] transition-all" style={{ background: gold, color: '#0A0A0F', borderColor: goldLight }}>
              Buy NFT &mdash; From $25
            </button>
            <a href="#collection" className="px-8 py-3.5 rounded-xl font-semibold tracking-wide border transition-all hover:opacity-80" style={{ borderColor: `${tx}40`, color: tx }}>
              Explore Collection
            </a>
          </div>

          {/* Small tier coins row */}
          <div className="grid grid-cols-6 gap-3 sm:gap-4 md:gap-6 justify-items-center max-w-4xl mx-auto">
            {RIO_TIERS.map((tier) => (
              <div
                key={tier.id}
                className="flip-coin w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px] cursor-pointer"
                onClick={() => { setSelectedTierId(tier.id); document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                <div className="flip-coin-inner relative w-full h-full">
                  <div className="flip-face absolute inset-0 rounded-full border-2 overflow-hidden" style={{ borderColor: tier.borderColor, boxShadow: `0 4px 15px ${tier.color}44` }}>
                    <FallbackImage src={tier.img} alt={tier.name} className="w-full h-full object-cover rounded-full" fallbackNode={colorFallback(tier.color, tier.name)} />
                  </div>
                  <div className="flip-face flip-back absolute inset-0 rounded-full border-2 overflow-hidden" style={{ borderColor: tier.borderColor, boxShadow: `0 4px 15px ${tier.color}44` }}>
                    <FallbackImage src={tier.backImg} alt={`${tier.name} back`} className="w-full h-full object-cover rounded-full" fallbackNode={colorFallback(tier.color, 'VERSO')} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-center gap-4 text-[9px] sm:text-[10px] tracking-widest uppercase" style={{ color: tx2 }}>
            {RIO_TIERS.map((tier) => (
              <span key={tier.id} className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full inline-block" style={{ background: tier.color }}></span>
                {tier.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ STATS BAR ═══════ */}
      <div className="py-8" style={{ background: bg2, borderTop: `1px solid ${bd}`, borderBottom: `1px solid ${bd}` }}>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 text-center gap-4">
          {[
            { val: '1,248', label: 'Heritage Sites' },
            { val: '170', label: 'Countries' },
            { val: totalMinted.toLocaleString(), label: 'Collectibles Sold' },
            { val: `$${totalDonations.toFixed(2)}`, label: 'To Preservation' },
          ].map((s, i) => (
            <div key={i} className="p-4">
              <div className="font-display text-3xl mb-1" style={{ color: gold }}>{s.val}</div>
              <div className="text-xs tracking-widest uppercase" style={{ color: tx2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════ COLLECTION — COMPACT LAYOUT + FLIP CARD ═══════ */}
      <section id="collection" className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase mb-2" style={{ color: gold }}>First Drop &mdash; Rio de Janeiro</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.15]">Six Editions.<br />One Iconic City.</h2>
            <p className="mt-3 text-base max-w-[480px] leading-relaxed" style={{ color: tx2 }}>
              Each tier captures a different facet of Rio de Janeiro. Hover to see the back design. Click a tier to explore.
            </p>
          </div>
          <div className="mt-3 md:mt-0 flex items-center gap-2 text-sm" style={{ color: tx2 }}>
            <span className="inline-block w-2 h-2 rounded-full bg-[#4ADE80]"></span> All tiers live &mdash; Prices in USD
          </div>
        </div>

        {/* Tighter 2-col grid */}
        <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-5 items-stretch">
          {/* LEFT: Tier selector — stacked list, fills height */}
          <div className="flex flex-col gap-2.5 justify-between">
            {collection.tiers.map((tier) => {
              const isActive = selectedTierId === tier.id;
              return (
              <button
                key={tier.id}
                onClick={() => setSelectedTierId(tier.id)}
                className={`tier-card rounded-[14px] border p-3.5 text-left w-full transition-all ${isActive ? 'active' : ''}`}
                style={{ borderColor: isActive ? gold : bd, background: isActive ? `${gold}18` : bg2 }}
              >
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-2" style={{ borderColor: tier.color, background: `${tier.color}30` }}></div>
                    <span className="font-display text-[16px]" style={{ color: tx }}>{tier.name}</span>
                  </div>
                  <span className="text-[15px] font-bold" style={{ color: gold }}>${tier.price}</span>
                </div>
                <div className="flex justify-between items-center text-[10px]" style={{ color: tx2 }}>
                  <span>{tier.editions.toLocaleString()} ed. &middot; ${tier.donation} donation</span>
                  <span>{tier.minted.toLocaleString()}/{tier.editions.toLocaleString()}</span>
                </div>
                <div className="mt-1.5 h-[3px] rounded-full overflow-hidden" style={{ background: `${gold}20` }}>
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${Math.round((tier.minted / tier.editions) * 100)}%`, background: tier.color }}></div>
                </div>
                {/* Expanded content when active */}
                {isActive && (
                  <div className="mt-3 pt-3" style={{ borderTop: `1px solid ${bd}` }}>
                    <div className="font-display text-[14px] mb-1.5" style={{ color: tx }}>{tier.landmark}</div>
                    <p className="text-[12px] leading-[1.7]" style={{ color: tx2 }}>{tier.description}</p>
                  </div>
                )}
              </button>
              );
            })}
          </div>

          {/* RIGHT: Detail card with flip */}
          <div className="sticky top-[90px] flex flex-col gap-4">
            <div className="rounded-[20px] border-[3px] overflow-hidden shadow-2xl transition-all duration-500" style={{ borderColor: selectedTier.color, background: bg2 }}>
              {/* Flip image area */}
              <div className="detail-flip w-full aspect-square relative overflow-hidden" style={{ background: cardBg }}>
                <div className="detail-flip-inner relative w-full h-full">
                  {/* FRONT */}
                  <div className="flip-face absolute inset-0">
                    <FallbackImage
                      src={selectedTier.img}
                      alt={`${collection.city} \u2014 ${selectedTier.name}`}
                      className="w-full h-full object-cover"
                      fallbackNode={<div className="w-full h-full flex items-center justify-center" style={{ background: selectedTier.color }}><span className="font-display text-3xl text-white/50">{collection.emoji}</span></div>}
                    />
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase" style={{ background: selectedTier.color, color: selectedTier.id === 'diamond' || selectedTier.id === 'silver' ? '#0A0A0F' : '#FFFFFF' }}>
                      {selectedTier.name} Edition
                    </div>
                  </div>
                  {/* BACK */}
                  <div className="flip-face flip-back absolute inset-0">
                    <FallbackImage
                      src={selectedTier.backImg}
                      alt={`${collection.city} \u2014 ${selectedTier.name} back`}
                      className="w-full h-full object-cover"
                      fallbackNode={<div className="w-full h-full flex items-center justify-center" style={{ background: selectedTier.color }}><span className="font-display text-xl text-white/70">VERSO</span></div>}
                    />
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-black/50 text-white">
                      Back Design
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="text-[11px] mb-1 flex items-center gap-1.5 uppercase tracking-wider" style={{ color: tx2 }}><MapPin className="w-3 h-3" /> {collection.coords}</div>
                <div className="font-display text-2xl mb-1">{selectedTier.landmark}</div>
                <div className="text-sm mb-2" style={{ color: tx2 }}>{collection.city} &middot; {selectedTier.name} Edition &middot; UNESCO {collection.year}</div>
                <p className="text-sm leading-[1.7] mb-4" style={{ color: tx2 }}>{selectedTier.description}</p>

                <div className="grid grid-cols-2 gap-2.5 mb-4">
                  {[
                    { label: 'Price', val: `$${selectedTier.price}`, highlight: true },
                    { label: 'Edition Size', val: selectedTier.editions.toLocaleString() },
                    { label: 'Donation per NFT', val: `$${selectedTier.donation.toFixed(2)}`, green: true },
                    { label: 'Tier', val: selectedTier.name, dot: selectedTier.color },
                  ].map((c, i) => (
                    <div key={i} className="border rounded-[10px] p-2.5" style={{ borderColor: bd, background: cardBg }}>
                      <div className="text-[10px] mb-0.5" style={{ color: tx2 }}>{c.label}</div>
                      <div className="text-base font-semibold flex items-center gap-1.5" style={{ color: c.highlight ? gold : c.green ? '#50C878' : tx }}>
                        {c.dot && <div className="w-3 h-3 rounded-full" style={{ background: c.dot }}></div>}
                        {c.val}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between text-xs mb-1" style={{ color: tx2 }}>
                  <span>Sales progress</span>
                  <span>{selectedTier.minted.toLocaleString()} / {selectedTier.editions.toLocaleString()}</span>
                </div>
                <div className="h-[5px] rounded-full overflow-hidden mb-4" style={{ background: `${gold}20` }}>
                  <div className="h-full rounded-full transition-all duration-700" style={{ width: `${tierPct}%`, background: selectedTier.color }}></div>
                </div>

                <button onClick={() => setPaymentModalOpen(true)} className="w-full py-3 px-6 rounded-full text-sm font-bold border transition-colors" style={{ background: gold, color: '#0A0A0F', borderColor: goldLight }}>
                  Buy This NFT &mdash; ${selectedTier.price}
                </button>
              </div>
            </div>

            {/* Atlas status */}
            <div className="rounded-[16px] border p-4 hidden lg:block" style={{ borderColor: bd, background: `linear-gradient(135deg, ${gold}12 0%, ${bg} 100%)` }}>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-[9px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: gold }}>Rio de Janeiro &mdash; All Tiers</div>
                  <div className="text-sm font-semibold">{totalMinted.toLocaleString()} <span style={{ color: tx2 }}>/ {totalEditions.toLocaleString()} Sold</span></div>
                </div>
                <div className="text-right w-1/3 max-w-[120px]">
                  <div className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: gold }}>{totalPct}%</div>
                  <div className="h-[3px] rounded-full overflow-hidden" style={{ background: `${gold}20` }}>
                    <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${totalPct}%`, background: gold }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ DONATION TRANSPARENCY ═══════ */}
      <section id="donations" className="py-16 md:py-24" style={{ background: bg2, borderTop: `1px solid ${bd}` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 items-stretch">
          <div>
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase mb-2" style={{ color: gold }}>Donation Transparency</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.15]">We Celebrate Cities.<br />We Give to Children.</h2>
            <p className="mt-4 text-sm sm:text-base max-w-[440px] leading-[1.8]" style={{ color: tx2 }}>
              Every purchase includes a donation that goes toward heritage preservation and children's welfare around the world.
            </p>
            <div className="grid grid-cols-1 gap-3 mt-6">
              <div className="p-4 border rounded-[14px]" style={{ borderColor: 'rgba(15,82,186,0.3)', background: cardBg }}>
                <div className="text-xs tracking-[0.1em] uppercase mb-1.5 font-bold text-[#0F52BA]">Crypto Donations</div>
                <div className="font-display text-lg mb-1" style={{ color: tx }}>UNICEF</div>
                <div className="text-[12px] leading-relaxed" style={{ color: tx2 }}>Supporting children living in and around UNESCO World Heritage cities globally.</div>
              </div>
              <div className="p-4 border rounded-[14px]" style={{ borderColor: 'rgba(80,200,120,0.3)', background: cardBg }}>
                <div className="text-xs tracking-[0.1em] uppercase mb-1.5 font-bold text-[#50C878]">Fiat Donations</div>
                <div className="font-display text-lg mb-1" style={{ color: tx }}>World Heritage Fund</div>
                <div className="text-[12px] leading-relaxed" style={{ color: tx2 }}>Preserving, restoring, and promoting the world's most irreplaceable cultural and natural sites.</div>
              </div>
              <div className="p-4 border rounded-[14px]" style={{ borderColor: bd, background: cardBg }}>
                <div className="text-xs tracking-[0.1em] uppercase mb-1.5" style={{ color: gold }}>How It Works</div>
                <div className="text-[13px] leading-relaxed" style={{ color: tx2 }}>Donations accumulate in a custodial multi-sig wallet. Once a collection fully sells out, funds are dispersed to the partner charities.</div>
              </div>
              <div className="p-4 border rounded-[14px]" style={{ borderColor: bd, background: cardBg }}>
                <div className="text-xs tracking-[0.1em] uppercase mb-1.5" style={{ color: gold }}>Donation per Tier</div>
                <div className="text-[13px] leading-relaxed" style={{ color: tx2 }}>Bronze: $0.01 &middot; Silver: $0.03 &middot; Gold: $0.05<br />Emerald: $0.08 &middot; Sapphire: $0.12 &middot; Diamond: $0.20</div>
              </div>
            </div>
            <button onClick={() => setDonationInfoOpen(!donationInfoOpen)} className="mt-4 flex items-center gap-2 text-sm transition-colors" style={{ color: gold }}>
              <Heart className="w-4 h-4" /> Where exactly do donations go?
              {donationInfoOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {donationInfoOpen && (
              <div className="mt-3 p-4 border rounded-xl text-sm leading-relaxed" style={{ borderColor: bd, background: cardBg, color: tx2 }}>
                <p className="mb-2">Donations are split based on payment method:</p>
                <ul className="list-disc list-inside space-y-1 mb-3">
                  <li><strong style={{ color: tx }}>Crypto payments</strong> &rarr; UNICEF (they accept cryptocurrency directly).</li>
                  <li><strong style={{ color: tx }}>Card/fiat payments</strong> &rarr; World Heritage Fund (via payment service provider).</li>
                </ul>
                <p>Donations are held in a custodial multi-signature wallet until a full collection sells out, then dispersed. All transactions are publicly verifiable on-chain.</p>
              </div>
            )}
          </div>

          <div className="border rounded-[16px] sm:rounded-[22px] p-4 sm:p-7 shadow-2xl" style={{ borderColor: bd, background: cardBg }}>
            <div className="flex justify-between items-start pb-5 mb-5" style={{ borderBottom: `1px solid ${bd}` }}>
              <div>
                <div className="text-[11px] font-bold tracking-[0.18em] uppercase mb-1" style={{ color: gold }}>Public Ledger</div>
                <div className="font-display text-xl">Donation Tracker</div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] tracking-wide" style={{ borderColor: bd, background: `${gold}15`, color: gold }}>
                <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse"></div> Live
              </div>
            </div>
            <div className="space-y-2">
              {[
                { label: 'Total Collectibles Sold', val: totalMinted.toLocaleString() },
                { label: 'Donation Pool Balance', val: `$${totalDonations.toFixed(2)}`, hl: true },
                { label: 'Collection Status', val: `${totalPct}% sold \u2014 accumulating` },
                { label: 'Dispersal Trigger', val: 'On full collection sell-out' },
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-[10px] border" style={{ borderColor: `${gold}15`, background: bg2 }}>
                  <span className="text-[13px]" style={{ color: tx2 }}>{row.label}</span>
                  <span className="text-[13px] font-semibold" style={{ color: row.hl ? '#50C878' : tx }}>{row.val}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 border rounded-[14px]" style={{ borderColor: bd, background: bg2 }}>
              <div className="text-[11px] uppercase tracking-wider mb-2" style={{ color: tx2 }}>Custodial Multi-Sig Wallet</div>
              <div className="flex items-center gap-2">
                <code className="text-[12px] px-3 py-1.5 rounded-lg border flex-1 overflow-hidden text-ellipsis whitespace-nowrap font-mono" style={{ color: gold, background: cardBg, borderColor: bd }}>{DONATION_WALLET}</code>
                <a href={`https://explorer.solana.com/address/${DONATION_WALLET}`} target="_blank" rel="noopener noreferrer" className="shrink-0 px-3 py-1.5 rounded-lg border text-[11px] font-bold flex items-center gap-1 transition-colors hover:opacity-80" style={{ borderColor: `${gold}40`, background: `${gold}15`, color: gold }}>
                  Verify <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="flex gap-2.5 items-start p-4 rounded-[14px] border mt-4" style={{ background: `${gold}10`, borderColor: bd }}>
              <Shield className="w-4 h-4 shrink-0 mt-0.5" style={{ color: gold }} />
              <span className="text-xs leading-relaxed" style={{ color: tx2 }}>All donation transactions are publicly verifiable. No single party can move funds unilaterally.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section id="how" className="py-24" style={{ background: bg }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[11px] font-bold tracking-[0.18em] uppercase mb-2" style={{ color: gold }}>How It Works</div>
          <h2 className="font-display text-4xl leading-[1.15] mb-12">Three Simple Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { n: '01', icon: '\u{1F30D}', title: 'Choose Your City & Tier', desc: 'Browse our heritage city collections. Each city comes in six colour-coded tiers \u2014 pick the edition that speaks to you.' },
              { n: '02', icon: '\u{1F4B3}', title: 'Pay Your Way', desc: 'Use credit card, Apple Pay, or Google Pay \u2014 just like any online purchase. Crypto wallet connection is also available.' },
              { n: '03', icon: '\u2728', title: 'Own Your Collectible', desc: 'Your unique digital stamp is delivered instantly. A portion of your purchase supports heritage preservation worldwide.' },
            ].map((step, i) => (
              <div key={i} className="p-9 rounded-[20px] border transition-colors relative" style={{ borderColor: bd, background: bg2 }}>
                <div className="font-display text-5xl mb-3 leading-none" style={{ color: `${gold}25` }}>{step.n}</div>
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="font-display text-xl mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: tx2 }}>{step.desc}</p>
                {i < 2 && <div className="hidden md:block absolute right-[-28px] top-1/2 -translate-y-1/2 text-2xl z-10" style={{ color: gold }}>&rarr;</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ EXPLORER ═══════ */}
      <section id="explorer" className="py-24" style={{ background: bg2, borderTop: `1px solid ${bd}`, borderBottom: `1px solid ${bd}` }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[11px] font-bold tracking-[0.18em] uppercase mb-2" style={{ color: gold }}>Heritage Explorer</div>
          <h2 className="font-display text-4xl leading-[1.15] mb-6">Upcoming Cities</h2>
          <p className="text-base max-w-lg mb-8" style={{ color: tx2 }}>Preview the full atlas of cities that will join the WORLDMARKS collection over time.</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {[{ key: 'all', label: 'All' }, { key: 'americas', label: 'Americas' }, { key: 'europe', label: 'Europe' }, { key: 'asia', label: 'Asia & Oceania' }, { key: 'africa', label: 'Africa & Middle East' }].map((f) => (
              <button key={f.key} onClick={() => { setActiveFilter(f.key); setExplorerPage(1); }} className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all" style={{ background: activeFilter === f.key ? gold : 'transparent', color: activeFilter === f.key ? '#0A0A0F' : tx2, borderColor: activeFilter === f.key ? goldLight : bd }}>
                {f.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {visibleExplorerSites.map((site, i) => (
              <div key={i} className="p-4 border rounded-[14px] transition-all text-center group cursor-pointer hover:opacity-80" style={{ borderColor: `${gold}20`, background: cardBg }}>
                <div className="text-2xl mb-2">{site.icon}</div>
                <div className="text-sm font-semibold mb-0.5 transition-colors" style={{ color: tx }}>{site.city}</div>
                <div className="text-[10px]" style={{ color: tx2 }}>{site.country}</div>
              </div>
            ))}
          </div>
          {remainingSites > 0 && (
            <div className="text-center mt-6">
              <button onClick={() => setExplorerPage(explorerPage + 1)} className="px-6 py-2 rounded-full border text-sm transition-colors hover:opacity-80" style={{ borderColor: bd, color: gold }}>Show {Math.min(remainingSites, PAGE_SIZE)} more</button>
            </div>
          )}
        </div>
      </section>

      {/* ═══════ ROADMAP ═══════ */}
      <section id="roadmap" className="py-24" style={{ background: bg }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[11px] font-bold tracking-[0.18em] uppercase mb-2" style={{ color: gold }}>Roadmap</div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.15] mb-4">The World Atlas</h2>
          <p className="text-base max-w-lg mb-12" style={{ color: tx2 }}>City drops organised by continent. New collections launch every quarter.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ROADMAP.map((cluster) => (
              <div key={cluster.region} className="border rounded-[20px] p-6" style={{ borderColor: bd, background: bg2 }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-2xl">{cluster.emoji}</div>
                  <div>
                    <div className="font-display text-xl">{cluster.region}</div>
                    <div className="text-[11px]" style={{ color: tx2 }}>{cluster.cities.length} cities planned</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {cluster.cities.map((city, i) => (
                    <div key={i} className="flex justify-between items-center p-3 rounded-[10px] border" style={{ borderColor: `${gold}15`, background: cardBg }}>
                      <span className="text-[13px]">{city.city}, {city.country}</span>
                      {city.status === 'live' ? (
                        <span className="text-[11px] font-bold text-[#4ADE80] flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] inline-block"></span> LIVE</span>
                      ) : city.status === 'upcoming' ? (
                        <span className="text-[11px] font-semibold" style={{ color: gold }}>{city.quarter}</span>
                      ) : (
                        <span className="text-[11px]" style={{ color: tx2 }}>{city.quarter}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ COLLECTOR LIST ═══════ */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch">
          <div className="border rounded-[22px] p-9" style={{ borderColor: bd, background: bg2 }}>
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase mb-2" style={{ color: gold }}>Collector Archive</div>
            <h2 className="font-display text-[28px] leading-[1.2] mb-3">Built for people<br />who collect with taste.</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: tx2 }}>WORLDMARKS is designed to feel closer to an elegant stamp collector's cabinet than a typical digital marketplace.</p>
            <ul className="space-y-2.5">
              {['Six colour-coded tiers per city \u2014 choose your edition', 'Pay with card, Apple Pay, Google Pay \u2014 or crypto', 'Every purchase includes a verified charitable donation', 'Edition provenance and serial number on every piece', 'Personal archive grows with each new city launch'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 p-3 border rounded-[10px] text-sm" style={{ borderColor: bd, background: dk ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)' }}>
                  <Check className="w-4 h-4 shrink-0" style={{ color: gold }} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border rounded-[22px] p-9 flex flex-col justify-center" style={{ borderColor: `${gold}40`, background: `${gold}12` }}>
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase mb-2" style={{ color: gold }}>Collector List</div>
            <h3 className="font-display text-2xl mb-2.5">Join for upcoming drops.</h3>
            <p className="text-sm leading-[1.7] mb-4" style={{ color: tx2 }}>Get notified when new cities are released.</p>
            <div className="flex flex-wrap gap-2.5 mb-2">
              <input type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder="Your email address" disabled={emailJoined} className="flex-1 p-3 px-5 rounded-full border text-sm min-w-[200px] focus:outline-none" style={{ borderColor: bd, background: inputBg, color: tx }} />
              <button onClick={handleEmailJoin} disabled={emailJoined} className="p-3 px-6 rounded-full text-sm font-bold transition-all whitespace-nowrap" style={{ background: emailJoined ? '#4ADE80' : gold, color: '#0A0A0F' }}>
                {emailJoined ? '\u2713 Joined' : 'Join Now'}
              </button>
            </div>
            <div className="text-[11px] tracking-wider uppercase mb-6" style={{ color: tx2 }}>No spam. Only collection launches and atlas updates.</div>
            <div className="pt-5" style={{ borderTop: `1px solid ${bd}` }}>
              <div className="text-[11px] font-bold tracking-[0.18em] uppercase mb-2.5" style={{ color: gold }}>Next Drops</div>
              {['\u{1F1F2}\u{1F1E6} Marrakech \u2014 Q3 2026', '\u{1F1EA}\u{1F1EC} Cairo \u2014 Q3 2026', '\u{1F1EF}\u{1F1F5} Kyoto \u2014 Q3 2026', '\u{1F1EE}\u{1F1F9} Venice \u2014 Q4 2026'].map((d, i) => (
                <div key={i} className="text-xs mb-1.5" style={{ color: tx2 }}>{d}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section id="faq" className="py-24" style={{ background: bg2, borderTop: `1px solid ${bd}` }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[11px] font-bold tracking-[0.18em] uppercase mb-2" style={{ color: gold }}>FAQ</div>
          <h2 className="font-display text-4xl leading-[1.15] mb-12">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQ_DATA.map((faq, i) => (
              <div key={i} className="border rounded-[14px] overflow-hidden" style={{ borderColor: bd, background: cardBg }}>
                <button onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)} className="w-full flex justify-between items-center p-5 text-left transition-colors hover:opacity-80">
                  <span className="text-[15px] font-semibold pr-4" style={{ color: tx }}>{faq.q}</span>
                  {openFaqIndex === i ? <ChevronUp className="w-5 h-5 shrink-0" style={{ color: gold }} /> : <ChevronDown className="w-5 h-5 shrink-0" style={{ color: tx2 }} />}
                </button>
                {openFaqIndex === i && (
                  <div className="px-5 pb-5 text-sm leading-relaxed pt-4" style={{ borderTop: `1px solid ${bd}`, color: tx2 }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="py-16" style={{ borderTop: `1px solid ${bd}`, background: bg }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2.5 font-display text-xl tracking-wider mb-3">
                <div className="w-9 h-9 nav-logo-mark rounded-full flex items-center justify-center text-xs font-bold text-[#0A0A0F]">W</div>
                WORLDMARKS
              </div>
              <p className="text-sm max-w-[300px] leading-relaxed" style={{ color: tx2 }}>Digital collectibles celebrating the world's greatest heritage sites.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
              <div>
                <div className="font-bold text-xs uppercase tracking-wider mb-3" style={{ color: gold }}>Collection</div>
                <ul className="space-y-2" style={{ color: tx2 }}>
                  <li><a href="#collection" className="hover:opacity-80">Rio de Janeiro</a></li>
                  <li><a href="#roadmap" className="hover:opacity-80">Roadmap</a></li>
                  <li><a href="#explorer" className="hover:opacity-80">Explorer</a></li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-xs uppercase tracking-wider mb-3" style={{ color: gold }}>About</div>
                <ul className="space-y-2" style={{ color: tx2 }}>
                  <li><a href="#donations" className="hover:opacity-80">Donations</a></li>
                  <li><a href="#faq" className="hover:opacity-80">FAQ</a></li>
                  <li><a href="#how" className="hover:opacity-80">How It Works</a></li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-xs uppercase tracking-wider mb-3" style={{ color: gold }}>Legal</div>
                <ul className="space-y-2" style={{ color: tx2 }}>
                  <li><button onClick={() => setTermsModalOpen(true)} className="hover:opacity-80">Terms &amp; Conditions</button></li>
                  <li><button onClick={() => setTermsModalOpen(true)} className="hover:opacity-80">Privacy Policy</button></li>
                  <li><button onClick={() => setTermsModalOpen(true)} className="hover:opacity-80">Refund Policy</button></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs" style={{ borderTop: `1px solid ${gold}15`, color: tx2 }}>
            <div>&copy; 2026 ParagonPayMarketPlaceGroup Ltd. All rights reserved.</div>
            <div className="flex gap-4">
              <button onClick={() => setTermsModalOpen(true)} className="hover:opacity-80">Terms</button>
              <span style={{ color: `${gold}30` }}>|</span>
              <button onClick={() => setTermsModalOpen(true)} className="hover:opacity-80">Privacy</button>
              <span style={{ color: `${gold}30` }}>|</span>
              <button onClick={() => setTermsModalOpen(true)} className="hover:opacity-80">Risk Disclosure</button>
            </div>
          </div>
        </div>
      </footer>

      {/* ═══════ PAYMENT MODAL ═══════ */}
      {paymentModalOpen && (
        <div className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setPaymentModalOpen(false)}>
          <div className="modal-content w-full max-w-lg border rounded-[24px] p-8 relative max-h-[90vh] overflow-y-auto" style={{ background: bg2, borderColor: `${gold}40` }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setPaymentModalOpen(false)} className="absolute top-5 right-5 transition-colors hover:opacity-60" style={{ color: tx2 }}><X className="w-5 h-5" /></button>
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase mb-1" style={{ color: gold }}>Purchase</div>
            <div className="font-display text-2xl mb-6">Buy Your Collectible</div>

            <div className="flex items-center gap-4 p-4 border rounded-[14px] mb-6" style={{ borderColor: bd, background: cardBg }}>
              <div className="w-16 h-16 rounded-xl border-2 overflow-hidden shrink-0" style={{ borderColor: selectedTier.color }}>
                <FallbackImage src={selectedTier.img} alt={collection.city} className="w-full h-full object-cover" fallbackNode={<div className="w-full h-full" style={{ background: selectedTier.color }}></div>} />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold">{collection.city} &mdash; {selectedTier.name}</div>
                <div className="text-xs" style={{ color: tx2 }}>Includes ${selectedTier.donation.toFixed(2)} donation</div>
              </div>
              <div className="text-xl font-bold" style={{ color: gold }}>${selectedTier.price}</div>
            </div>

            <div className="mb-6">
              <div className="text-xs mb-2.5" style={{ color: tx2 }}>Select Tier</div>
              <div className="grid grid-cols-6 gap-2">
                {collection.tiers.map((t) => (
                  <button key={t.id} onClick={() => setSelectedTierId(t.id)} className="p-2 rounded-lg border text-center transition-all" style={{ borderColor: selectedTierId === t.id ? gold : `${gold}20`, background: selectedTierId === t.id ? `${gold}20` : cardBg }}>
                    <div className="w-4 h-4 rounded-full mx-auto mb-1" style={{ background: t.color }}></div>
                    <div className="text-[10px]" style={{ color: tx2 }}>${t.price}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="text-xs uppercase tracking-wider mb-1" style={{ color: tx2 }}>Payment Method</div>
              {[
                { icon: <CreditCard className="w-5 h-5" style={{ color: gold }} />, bg: `${gold}15`, title: 'Credit / Debit Card', sub: 'Visa, Mastercard, Amex' },
                { icon: <Smartphone className="w-5 h-5" style={{ color: tx }} />, bg: dk ? 'rgba(240,238,232,0.1)' : 'rgba(0,0,0,0.06)', title: 'Apple Pay', sub: 'Fast and secure' },
                { icon: <Globe className="w-5 h-5 text-[#4285F4]" />, bg: 'rgba(66,133,244,0.15)', title: 'Google Pay', sub: 'Fast and secure' },
              ].map((pm, i) => (
                <button key={i} className="w-full flex items-center gap-4 p-4 rounded-[14px] border transition-all text-left hover:opacity-80" style={{ borderColor: bd, background: cardBg }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: pm.bg }}>{pm.icon}</div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold">{pm.title}</div>
                    <div className="text-xs" style={{ color: tx2 }}>{pm.sub}</div>
                  </div>
                  <ArrowRight className="w-4 h-4" style={{ color: tx2 }} />
                </button>
              ))}
              <div className="pt-3" style={{ borderTop: `1px solid ${bd}` }}>
                <div className="text-[10px] uppercase tracking-wider mb-2" style={{ color: tx2 }}>Advanced</div>
                <button className="w-full flex items-center gap-4 p-4 rounded-[14px] border transition-all text-left opacity-80 hover:opacity-100" style={{ borderColor: `${gold}15`, background: cardBg }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(153,69,255,0.15)' }}><Wallet className="w-5 h-5 text-[#9945FF]" /></div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold">Connect Crypto Wallet</div>
                    <div className="text-xs" style={{ color: tx2 }}>Phantom, Backpack, Solflare</div>
                  </div>
                  <ArrowRight className="w-4 h-4" style={{ color: tx2 }} />
                </button>
              </div>
            </div>
            <div className="text-[10px] text-center leading-relaxed" style={{ color: tx2 }}>
              By purchasing, you agree to our <button onClick={() => { setPaymentModalOpen(false); setTermsModalOpen(true); }} style={{ color: gold }} className="hover:underline">Terms &amp; Conditions</button>. All prices in USD. NFTs are collectibles only, not investments.
            </div>
          </div>
        </div>
      )}

      {/* ═══════ T&C MODAL ═══════ */}
      {termsModalOpen && (
        <div className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setTermsModalOpen(false)}>
          <div className="modal-content w-full max-w-2xl border rounded-[24px] p-8 relative max-h-[85vh] overflow-y-auto" style={{ background: bg2, borderColor: `${gold}40` }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setTermsModalOpen(false)} className="absolute top-5 right-5 transition-colors hover:opacity-60 sticky" style={{ color: tx2 }}><X className="w-5 h-5" /></button>
            <div className="font-display text-2xl mb-6" style={{ color: gold }}>Terms &amp; Conditions</div>
            <pre className="whitespace-pre-wrap text-sm leading-relaxed font-sans" style={{ color: tx2 }}>{TERMS_TEXT}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
