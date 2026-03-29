export const siteConfig = {
  name: "Umair",
  title: "Creative Strategy & Digital Growth Architect",
  description:
    "Creative strategist working at the intersection of storytelling, digital growth, and brand positioning. Led campaigns and content ecosystems across fashion, hospitality, healthcare, and corporate sectors generating millions of organic views and measurable brand growth.",
  email: "umairaziz085@gmail.com",
  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
};

const CL = "https://res.cloudinary.com/dgsjtycgd/image/upload/f_auto,q_auto,w_300";

export const brands = [
  // Fashion & Apparel
  { name: "Klay",           slug: "klay",           sector: "Fashion",    logo: `${CL}/klay-logo_o1p3mw` },
  { name: "Manas",          slug: "manas",          sector: "Fashion",    logo: `${CL}/manas-logo_xbji28` },
  { name: "Sulafah",        slug: "sulafah",        sector: "Fashion",    logo: `${CL}/sulafah-logo_kz7w99` },
  { name: "Zubair Shah",    slug: "zubair-shah",    sector: "Fashion",    logo: `${CL}/Zubair_Shah-logo_yyrm6f` },
  { name: "Shahid Afridi",  slug: "shahid-afridi",  sector: "Fashion",    logo: "/shahidafridi-store-logo.webp" },
  { name: "AFM",            slug: "afm",            sector: "Fashion",    logo: `${CL}/afm-logo_eqsykw`,            fullName: "Artistic Fabric Mills" },
  { name: "Coach",          slug: "coach",          sector: "Fashion",    logo: `${CL}/coach-logo_ojteie` },
  { name: "Stylo",          slug: "stylo",          sector: "Fashion",    logo: `${CL}/Stylo-logo_gc3tym` },
  { name: "Rizwan Beyg",    slug: "rizwan-beyg",    sector: "Fashion",    logo: `${CL}/Rizwanbeyg-logo_camfdd` },
  { name: "Aristovie",      slug: "aristovie",      sector: "Fashion",    logo: `${CL}/aristovie-logo_moynqq` },
  { name: "Princess Polly", slug: "princess-polly", sector: "Fashion",    logo: `${CL}/princesspolly-logo_v8lekb` },
  { name: "Zellbury",       slug: "zellbury",       sector: "Fashion",    logo: `${CL}/Zellbury-logo_hoc9eu` },
  { name: "Kyousf",         slug: "kyousf",         sector: "Fashion",    logo: `${CL}/kyousuf-logo_d32ziq` },
  { name: "Icy",            slug: "icy",            sector: "Fashion",    logo: "/icy-logo.webp" },
  { name: "Burj",           slug: "burj",           sector: "Fashion",    logo: `${CL}/Burj-logo_wg3nqw` },
  { name: "Tapestry",       slug: "tapestry",       sector: "Fashion",    logo: `${CL}/Tapestry-Logo_plbuzy` },
  { name: "Kate Spade NY",  slug: "kate-spade",     sector: "Fashion",    logo: `${CL}/Kate_Spade-NY-Logo_1_ylayfi` },
  // F&B / Hospitality
  { name: "Espresso",       slug: "espresso",       sector: "F&B",        logo: "/espresso-logo.avif" },
  { name: "Chatterbox",     slug: "chatterbox",     sector: "F&B",        logo: `${CL}/Chatterbox-logo_ewtj0v` },
  { name: "Pie in the Sky", slug: "pits",           sector: "F&B",        logo: `${CL}/pieinthesky-logo_rzq0wv`,    fullName: "PITS" },
  { name: "Lucky Foods",    slug: "lucky-foods",    sector: "F&B",        logo: `${CL}/lucky-logo_o1rjlc` },
  // Healthcare & Pharma
  { name: "Dr Seema",       slug: "dr-seema",       sector: "Healthcare", logo: `${CL}/Dr.SeemaSH-logo_bplthx` },
  { name: "Abbott",         slug: "abbott",         sector: "Healthcare", logo: `${CL}/abbott-logo_dw21vy` },
  { name: "Searle",         slug: "searle",         sector: "Healthcare", logo: "/searle-logo-1.png" },
  { name: "BMJ",            slug: "bmj",            sector: "Healthcare", logo: `${CL}/bmj-logo_s0sbng` },
  { name: "Elsevier",       slug: "elsevier",       sector: "Healthcare", logo: `${CL}/Elsevier-logo_h7ss0j` },
  { name: "UpToDate",       slug: "uptodate",       sector: "Healthcare", logo: `${CL}/Uptodate-logo_f0hk4d` },
  { name: "SAS",            slug: "sas",            sector: "Healthcare", logo: `${CL}/SAS-logo_jk9vue` },
  // Media & Publishing
  { name: "Dawn",           slug: "dawn",           sector: "Media",      logo: `${CL}/dawn-logo_j8lbl3` },
  { name: "Images",         slug: "images",         sector: "Media",      logo: `${CL}/images-logo_gsthtl` },
  { name: "KCCI",           slug: "kcci",           sector: "Media",      logo: `${CL}/KCC-logo_svswys` },
  { name: "Fashion As F",   slug: "fashion-as-f",   sector: "Media",      logo: `${CL}/FashionAsF-logo_icvd6x` },
  // Arts & Culture
  { name: "Canvas Gallery", slug: "canvas",         sector: "Arts",       logo: "/canvas-galley-logo.jpg" },
  { name: "Arts Council",   slug: "arts",           sector: "Arts",       logo: "/arts-logo.png" },
  // Corporate & Business
  { name: "Delphi",         slug: "delphi",         sector: "Corporate",  logo: `${CL}/Delphi-logo_kabldy` },
  { name: "MGAT",           slug: "mgat",           sector: "Corporate",  logo: "/mgat-logo.png" },
  { name: "AVS",            slug: "avs",            sector: "Corporate",  logo: `${CL}/AVS-logo_shizaq` },
  { name: "Kupgrade",       slug: "kupgrade",       sector: "Corporate",  logo: "/Kupgrade-logo.png" },
  { name: "Layers",         slug: "layers",         sector: "Corporate",  logo: "/Layers-Logo.png" },
  { name: "Adamjee",        slug: "adamjee",        sector: "Corporate",  logo: `${CL}/adamjee-logo_hexyct` },
  { name: "Gsthering",      slug: "gsthering",      sector: "Corporate",  logo: `${CL}/gathering-logo_uv1ckk` },
];

export const metrics = [
  {
    value: "5.2M+",
    label: "Organic Views",
    brand: "Espresso",
    description: "Multi-platform content ecosystem driving consistent organic discovery",
  },
  {
    value: "3.9M+",
    label: "Viral Campaign",
    brand: "Chatterbox",
    description: "Narrative-driven campaign that captured cultural conversation",
  },
  {
    value: "3.3M+",
    label: "Organic Reach",
    brand: "Fabio Magazine",
    description: "Editorial strategy positioning Fabio as a digital-first publication",
  },
  {
    value: "150K+",
    label: "Campaign Reach",
    brand: "Delphi",
    description: "Targeted growth campaign with precision audience development",
  },
  {
    value: "31K+",
    label: "Audience Growth",
    brand: "Shahid Afridi Store",
    description: "Community-first approach building a loyal brand audience",
  },
  {
    value: "2K+",
    label: "Monthly Comments",
    brand: "Fabio Magazine",
    description: "Engagement-first content strategy fostering active community",
  },
];

export const services = [
  {
    title: "Creative Strategy",
    description:
      "Building narrative frameworks that give brands a distinct voice and consistent creative direction across all touchpoints.",
    icon: "◈",
    tags: ["Brand Voice", "Narrative Frameworks", "Creative Direction"],
  },
  {
    title: "Content Systems",
    description:
      "Designing scalable content ecosystems that produce consistent, high-quality output without sacrificing creative integrity.",
    icon: "◉",
    tags: ["Content Architecture", "Editorial Planning", "Production Systems"],
  },
  {
    title: "Social Media Growth",
    description:
      "Data-informed growth strategies that build genuine audiences and convert attention into measurable brand equity.",
    icon: "◎",
    tags: ["Audience Development", "Platform Strategy", "Analytics"],
  },
  {
    title: "Campaign Architecture",
    description:
      "End-to-end campaign design from concept to execution — building campaigns that drive cultural conversation.",
    icon: "◇",
    tags: ["Campaign Strategy", "Cross-Platform", "Launch Planning"],
  },
  {
    title: "Short-Form Video Direction",
    description:
      "Directing and producing short-form video content that captures attention in the first three seconds and holds it.",
    icon: "◈",
    tags: ["Reels / TikTok", "Scripting", "Visual Direction"],
  },
  {
    title: "Brand Positioning",
    description:
      "Defining where a brand sits in the market and how it speaks — creating positioning that's both distinctive and defensible.",
    icon: "◉",
    tags: ["Market Positioning", "Brand Identity", "Competitive Analysis"],
  },
];

export interface CaseStudy {
  slug: string;
  brand: string;
  title: string;
  tagline: string;
  sector: string;
  year: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  featured: boolean;
  color: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "espresso-growth",
    brand: "Espresso",
    title: "Building a 5.2M View Content Ecosystem",
    tagline: "From café to cultural institution through strategic content.",
    sector: "Hospitality / Lifestyle",
    year: "2023",
    challenge:
      "Espresso had an established physical presence but lacked digital authority. Despite being a beloved local brand, their social content felt disconnected — product shots with little narrative, no consistent voice, and zero community engagement strategy.",
    strategy:
      "We repositioned Espresso from a café to a lifestyle destination. The strategy centered on three content pillars: atmosphere storytelling, community moments, and product craftsmanship. Each pillar had its own visual language, allowing the brand to be both consistent and varied.",
    execution:
      "We built a 90-day content calendar with weekly hero content, daily micro-content, and monthly campaign activations. Short-form video was prioritized — Reels and TikTok with cinematic production values that made every frame feel intentional. We introduced 'morning ritual' content that placed the brand inside the viewer's daily narrative.",
    results:
      "In 8 months, Espresso's content generated over 5.2M organic views across platforms. Engagement rate increased by 340%. The brand became a reference point for hospitality content in the region.",
    metrics: [
      { value: "5.2M+", label: "Organic Views" },
      { value: "340%", label: "Engagement Increase" },
      { value: "8", label: "Months to Result" },
      { value: "3", label: "Content Pillars" },
    ],
    tags: ["Content Strategy", "Social Growth", "Short-Form Video", "Hospitality"],
    featured: true,
    color: "#c9a96e",
  },
  {
    slug: "chatterbox-campaign",
    brand: "Chatterbox",
    title: "The 3.9M View Viral Campaign",
    tagline: "Turning a product launch into a cultural conversation.",
    sector: "F&B / Entertainment",
    year: "2023",
    challenge:
      "Chatterbox needed a launch campaign that would cut through the noise of a saturated F&B market. The brief was simple: make people talk. The challenge was doing that authentically without relying on paid reach.",
    strategy:
      "We identified a cultural tension point — everyone has opinions about where to eat, but nobody captures those moments. We built a campaign around the idea of 'the conversation that starts at the table.' Authentic, unscripted, relatable.",
    execution:
      "The campaign launched across Instagram and TikTok simultaneously with a series of 15-45 second videos featuring real conversations — humor, debates, recommendations. We used a creator seeding strategy to amplify organic content without it feeling like an ad.",
    results:
      "The campaign generated 3.9M+ views within 30 days. It trended locally, generated hundreds of user-generated responses, and established Chatterbox as the most talked-about F&B brand in the market that quarter.",
    metrics: [
      { value: "3.9M+", label: "Views in 30 Days" },
      { value: "30", label: "Days to Result" },
      { value: "#1", label: "Trending Locally" },
      { value: "500+", label: "UGC Responses" },
    ],
    tags: ["Campaign Strategy", "Viral Content", "Creator Strategy", "F&B"],
    featured: true,
    color: "#8b7355",
  },
  {
    slug: "drseema-healthcare",
    brand: "Dr Seema",
    title: "Building Healthcare Authority Through Content",
    tagline: "Making medical expertise accessible, trustworthy, and shareable.",
    sector: "Healthcare",
    year: "2022",
    challenge:
      "Healthcare content is notoriously difficult — too clinical and you lose the audience, too casual and you lose credibility. Dr Seema needed a content presence that positioned her as the trusted expert while remaining accessible.",
    strategy:
      "We developed an 'expert simplification' framework — taking complex medical topics and creating content that educated without condescending. The strategy prioritized trust-building content that demonstrated expertise through clarity.",
    execution:
      "We created a mixed content format: long-form educational videos, short myth-busting Reels, and patient story narratives (with permission). Each piece was carefully crafted to feel personal, not institutional.",
    results:
      "Dr Seema's digital presence transformed from zero to a trusted voice in healthcare content. Patient inquiries from social media increased significantly, and her content began being shared by other medical professionals.",
    metrics: [
      { value: "10x", label: "Audience Growth" },
      { value: "65%", label: "Reach Increase" },
      { value: "200%", label: "Inquiry Growth" },
      { value: "12", label: "Months Strategy" },
    ],
    tags: ["Healthcare", "Brand Authority", "Educational Content", "Trust Building"],
    featured: false,
    color: "#7a9e87",
  },
  {
    slug: "fabio-media-growth",
    brand: "Fabio Magazine",
    title: "3.3M Reach — Reinventing a Magazine for the Digital Age",
    tagline: "Editorial excellence meets digital strategy.",
    sector: "Media / Publishing",
    year: "2023",
    challenge:
      "Fabio Magazine had a strong print identity but struggled to translate its editorial quality to digital platforms. The content felt like scanned magazine pages rather than native digital experiences.",
    strategy:
      "We developed a 'digital-native editorial' approach — treating each post as its own piece of digital art while maintaining the magazine's premium aesthetic. Content was designed for screens first, not repurposed from print.",
    execution:
      "We redesigned the content pipeline: cover shoots became multi-asset digital campaigns, interviews became episodic video series, and features became interactive carousel experiences. A weekly publishing cadence was established with consistent visual identity.",
    results:
      "Fabio Magazine reached 3.3M organic users, grew its engaged community significantly, and became the reference publication for premium lifestyle content in the market. Monthly comments exceeded 2,000 — a testament to real community engagement.",
    metrics: [
      { value: "3.3M+", label: "Organic Reach" },
      { value: "2K+", label: "Monthly Comments" },
      { value: "400%", label: "Engagement Rate" },
      { value: "6", label: "Months Transformation" },
    ],
    tags: ["Media Strategy", "Editorial Content", "Digital Transformation", "Publishing"],
    featured: true,
    color: "#9b8b7a",
  },
];

export interface PortfolioItem {
  id: string;
  type: "image" | "video";
  publicId: string; // Cloudinary public ID — replace with your actual IDs
  title: string;
  category: string;
  aspect: "square" | "portrait" | "landscape";
}

export const portfolioItems: PortfolioItem[] = [
  // Replace publicId values with your actual Cloudinary public IDs
  { id: "1", type: "image", publicId: "samples/landscapes/nature-mountains", title: "Espresso — Brand Campaign", category: "Brand Campaign", aspect: "landscape" },
  { id: "2", type: "video", publicId: "samples/elephants", title: "Chatterbox — Launch Film", category: "Short-Form Video", aspect: "portrait" },
  { id: "3", type: "image", publicId: "samples/food/spices", title: "Fabio — Editorial Shoot", category: "Editorial", aspect: "square" },
  { id: "4", type: "image", publicId: "samples/people/kitchen-bar", title: "Chatterbox — Campaign", category: "Campaign", aspect: "portrait" },
  { id: "5", type: "image", publicId: "samples/landscapes/beach-boat", title: "The Monal — Content Series", category: "Content Strategy", aspect: "landscape" },
  { id: "6", type: "video", publicId: "samples/sea-turtle", title: "Espresso — Showreel", category: "Showreel", aspect: "square" },
  { id: "7", type: "image", publicId: "samples/balloons", title: "Fashion Editorial", category: "Fashion", aspect: "portrait" },
  { id: "8", type: "image", publicId: "samples/bike", title: "Fabio — Street Style", category: "Editorial", aspect: "landscape" },
  { id: "9", type: "image", publicId: "samples/cup-on-a-beach", title: "Espresso — Lifestyle", category: "Lifestyle", aspect: "square" },
  { id: "10", type: "image", publicId: "samples/dessert-on-a-plate", title: "Chatterbox — Food Content", category: "F&B", aspect: "portrait" },
  { id: "11", type: "image", publicId: "samples/cloudinary-group", title: "Campaign Reel", category: "Campaign", aspect: "landscape" },
  { id: "12", type: "image", publicId: "samples/woman-on-a-football-field", title: "Delphi Campaign", category: "Corporate", aspect: "portrait" },
];

export const timelineItems = [
  {
    year: "2024",
    title: "Multi-Brand Growth Architecture",
    description: "Led simultaneous growth campaigns across 5+ brands, developing scalable content systems and campaign architecture that consistently delivered millions in organic reach.",
  },
  {
    year: "2023",
    title: "Viral Campaign Execution",
    description: "Designed and executed multiple campaigns including Chatterbox's 3.9M view viral campaign and Espresso's 5.2M view content ecosystem.",
  },
  {
    year: "2022",
    title: "Healthcare & Corporate Strategy",
    description: "Expanded into healthcare and corporate sectors, developing trust-based content frameworks for Dr Seema and corporate brand positioning for AFM.",
  },
  {
    year: "2020",
    title: "Fashion & Lifestyle Focus",
    description: "Established expertise in fashion content strategy, working with Shahid Afridi Clothing and building community-first brand audiences in the fashion sector.",
  },
];
