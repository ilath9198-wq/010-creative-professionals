export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'Architecture' | 'Interior Design' | 'Branding & Identity' | 'Digital & UI/UX' | 'Product Design' | 'Photography';
  discipline: string;
  year: string;
  location: string;
  client: string;
  heroImage: string;
  galleryImages: string[];
  brief: string;
  concept: string;
  approach: string;
  outcome: string;
  awards?: string;
  featured: boolean;
  aspectRatio?: string;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Philosophy' | 'Architecture' | 'Visual Identity' | 'Materiality' | 'Digital Craft';
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  excerpt: string;
  heroImage: string;
  content: string[];
  tags: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  lead: string;
  scope: string[];
  deliverables: string[];
  image: string;
  metrics: string;
}

export interface TeamMember {
  name: string;
  role: string;
  discipline: string;
  image: string;
  bio: string;
}

export const navigationItems = [
  { num: '01', title: 'Studio', subtitle: 'Overview & Philosophy', path: '/', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85' },
  { num: '02', title: 'About Us', subtitle: 'Practice, Team & Ethos', path: '/about', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85' },
  { num: '03', title: 'Creative Services', subtitle: 'Multidisciplinary Offerings', path: '/services', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85' },
  { num: '04', title: 'Architecture', subtitle: 'Monolithic & Spatial Works', path: '/architecture', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85' },
  { num: '05', title: 'Interiors', subtitle: 'Tactile Living & Commercial', path: '/interiors', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85' },
  { num: '06', title: 'Branding & Identity', subtitle: 'Visual Systems & Packaging', path: '/branding', image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85' },
  { num: '07', title: 'Digital & UI/UX', subtitle: 'Interactive Platforms & Web', path: '/digital', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85' },
  { num: '08', title: 'Our Work', subtitle: 'Complete Portfolio Index', path: '/work', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85' },
  { num: '09', title: 'Studio Journal', subtitle: 'Essays, Theory & Notes', path: '/journal', image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=85' },
  { num: '10', title: 'Start a Project', subtitle: 'Inquiries & Collaborations', path: '/contact', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85' },
];

export const studioProjects: Project[] = [
  {
    id: 'proj-01',
    slug: 'solis-pavilion-zurich',
    title: 'Solis Monolithic Pavilion',
    category: 'Architecture',
    discipline: 'Cultural & Residential Architecture',
    year: '2026',
    location: 'Zürich Oberland, Switzerland',
    client: 'Foundation for Contemporary Spatial Arts',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    ],
    brief: 'To design a low-carbon, board-formed concrete pavilion that serves as both a private archive of sculptural maquettes and a seasonal chamber music venue open to alpine natural light.',
    concept: 'Mass as shelter, void as resonance. By carving angled apertures through 60cm thermal mass walls, sunlight traces celestial geometry across rough sandblasted surfaces.',
    approach: 'Local limestone aggregate mixed with fly-ash binder was poured in continuous vertical lifts. Rainwater is channelled into reflective stone basins that cool the interior gallery passively.',
    outcome: 'Shortlisted for European Architecture Biennial 2026. Certified Minergie-A net-zero spatial performance with natural acoustic reverberation of 1.4 seconds.',
    awards: 'Prix Spatial Suisse 2026 • Nominee',
    featured: true,
  },
  {
    id: 'proj-02',
    slug: 'casa-terrazzo-milan',
    title: 'Casa Terrazzo & Mineral Loft',
    category: 'Interior Design',
    discipline: 'Luxury Residential Interior',
    year: '2025',
    location: 'Brera District, Milan, Italy',
    client: 'Private Art Collector',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
    ],
    brief: 'A 380-sqm industrial warehouse conversion requiring unified tactile continuity, bespoke joinery, and an atmosphere of meditative calm in central Milan.',
    concept: 'Seamless monolithic floor surfaces composed of crushed Venetian Verde Alpi and Carrara marble fragments, set against oiled smoked oak and raw patinated brass fixtures.',
    approach: 'Eliminated conventional room partitions in favour of full-height pivot screens crafted from textured fluted cast glass, allowing light to diffuse uninterrupted.',
    outcome: 'Published across Architectural Digest Italia and Domus. Features custom sunken living lounge and integrated acoustic ceiling baffles.',
    awards: 'Milan Design Week Spatial Excellence 2025',
    featured: true,
  },
  {
    id: 'proj-03',
    slug: 'nocturne-parfumerie-paris',
    title: 'Nocturne Botanical Parfumerie',
    category: 'Branding & Identity',
    discipline: 'Visual Identity, Packaging & Editorial',
    year: '2026',
    location: 'Paris & Kyoto',
    client: 'Maison Nocturne Fragrances',
    heroImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=2000&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85',
    ],
    brief: 'Develop an olfactory visual identity and luxury packaging architecture for rare, small-batch botanical perfumes distilled exclusively at twilight.',
    concept: 'Typographic austerity meets tactile paper alchemy. Heavyweight cotton papers embossed with blind micro-debossing, custom typography inspired by early 20th-century botanical compendiums.',
    approach: 'Bottles custom blown from recycled dark amber glass, stoppered with unpolished volcanic basalt stone caps sourced from Kyushu, Japan.',
    outcome: 'Sold out launch collection within 72 hours. Acclaimed as an exemplar of sustainable luxury packaging and bespoke editorial storytelling.',
    awards: 'D&AD Graphite Pencil 2026 • Luxury Packaging',
    featured: true,
  },
  {
    id: 'proj-04',
    slug: 'kroma-design-system-tokyo',
    title: 'KROMA Generative Design System',
    category: 'Digital & UI/UX',
    discipline: 'Design Systems, Web Architecture & Prototyping',
    year: '2026',
    location: 'Tokyo, Japan',
    client: 'Kroma Creative Cloud Platform',
    heroImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=2000&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=85',
    ],
    brief: 'Create an ultra-responsive web environment and generative tokenised UI library for an international network of 14,000 spatial designers and 3D artists.',
    concept: 'Fluid typography scales, high-density dark mode palettes, zero-layout-shift micro-interactions, and real-time WebGL component preview canvases.',
    approach: 'Engineered an open-source headless token architecture connecting Figma, Next.js, and Swift SDKs with sub-50ms render latency across mobile and ultra-wide screens.',
    outcome: '98/100 Lighthouse performance score across all devices. Adopted by over 45 international architectural studios within its first month of release.',
    awards: 'Awwwards Site of the Month • Tokyo Interactive Gold',
    featured: true,
  },
  {
    id: 'proj-05',
    slug: 'nordic-timber-residence',
    title: 'Njord Cross-Laminated Timber Retreat',
    category: 'Architecture',
    discipline: 'Sustainable Residential Architecture',
    year: '2025',
    location: 'Bergen Coastal Archipelago, Norway',
    client: 'The Dahl-Holm Environmental Trust',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
    ],
    brief: 'A carbon-negative coastal sanctuary cantilevering over fjord rock shelves, constructed without heavy earthworks or road grading.',
    concept: 'Pin-point steel stilts anchored directly into bedrock, supporting precision prefabricated Scandinavian spruce CLT cassettes charred using ancient Yakisugi methods.',
    approach: 'Triple-glazed aerogel glass walls provide 360-degree seasonal ocean vistas while resisting gale-force North Atlantic coastal storms.',
    outcome: 'Zero operational carbon footprint. Equipped with geothermal sea-loop heat exchange and rainwater retention roof ecosystems.',
    awards: 'Nordic Eco-Architecture Honour 2025',
    featured: false,
  },
  {
    id: 'proj-06',
    slug: 'arch-lounge-chair-collection',
    title: 'Atelier N°10 Cast Bronze & Wool Armchair',
    category: 'Product Design',
    discipline: 'Limited-Edition Industrial & Furniture Design',
    year: '2026',
    location: 'Zürich & Basel',
    client: 'Gallery Triennale Edition',
    heroImage: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=2000&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
    ],
    brief: 'Design a sculptural lounge chair where architectural proportions of gravity, cantilever, and soft human ergonomics meet.',
    concept: 'A single sand-cast recycled bronze armature holds a floating seat cushioned in un-dyed Swiss alpine virgin wool felt.',
    approach: 'Crafted in collaboration with master bronze casters in St. Gallen. Hand-waxed with beeswax to preserve natural metal patination over generations.',
    outcome: 'Acquired by the Vitra Design Museum archives for the permanent European 21st-century seating collection.',
    awards: 'Red Dot: Best of the Best 2026',
    featured: false,
  },
  {
    id: 'proj-07',
    slug: 'monolith-bookshop-seoul',
    title: 'Monolith Flagship & Reading Library',
    category: 'Interior Design',
    discipline: 'Retail Architecture & Spatial Experience',
    year: '2025',
    location: 'Hannam-dong, Seoul, South Korea',
    client: 'Monolith Publishing Group',
    heroImage: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=2000&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    ],
    brief: 'Create a sanctuary for physical books, rare typography folios, and quiet contemplation in the vibrant heart of Seoul.',
    concept: 'A 9-meter tall monolithic rammed-earth canyon dividing two public floors, with acoustic lime plaster walls dampening urban noise completely.',
    approach: 'Integrated reading alcoves lined in raw walnut and indirect floor washing lights that invite visitors to spend unhurried hours exploring titles.',
    outcome: 'Average visitor dwell time exceeded 42 minutes. Featured on Korean Architecture Broadcast network and Wallpaper* magazine.',
    awards: 'Seoul Design City Laureate 2025',
    featured: false,
  },
  {
    id: 'proj-08',
    slug: 'vellum-identity-geneva',
    title: 'Vellum Private Banking Identity',
    category: 'Branding & Identity',
    discipline: 'Corporate Identity & Print Editorial',
    year: '2026',
    location: 'Geneva, Switzerland',
    client: 'Vellum Asset Management & Heritage Trust',
    heroImage: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=2000&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85',
    ],
    brief: 'Modernise the heritage identity of a 140-year-old Swiss family office without losing dignity, discretion, and architectural integrity.',
    concept: 'Precision typographic monogram with 0.3mm hairline weight adjustments for sub-millimetre hot foil debossing on hand-milled watermarked papers.',
    approach: 'Designed bespoke serif numeral system and secure digital client portal with zero visual noise, celebrating clarity and restraint.',
    outcome: 'Unified brand roll-out across Geneva, Luxembourg, and Singapore headquarters with 100% compliance across private client assets.',
    awards: 'Swiss Graphic Design Society Award 2026',
    featured: false,
  },
];

export const studioJournal: JournalArticle[] = [
  {
    id: 'jrn-01',
    slug: 'the-importance-of-visual-identity',
    title: 'The Architecture of Identity: Why Form Precedes Function in Brand Creation',
    category: 'Visual Identity',
    readTime: '6 min read',
    date: 'February 12, 2026',
    author: {
      name: 'Elena Vance',
      role: 'Principal Creative Director',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=85',
    },
    excerpt: 'Great visual identities are not mere decorative badges. They are spatial enclosures that frame how humans experience memory, value, and emotional weight.',
    heroImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1600&q=85',
    content: [
      'In our studio practice at ATELIER N°10, we frequently challenge the mid-century adage that form follows function. When building durable brands in the 21st century, form does not obediently trail behind utility—form structures perception before function is even deciphered.',
      'Consider the tactile resistance of unprinted 450gsm cotton rag paper, or the exact radius of an extruded aluminium door handle in a flagship gallery. The sensory cognition occurs in microseconds, long before an observer evaluates an argument or reads an editorial mission statement.',
      'When we strip away decorative noise and focus on typographic tension, white space proportions, and material honesty, the identity begins to carry an undeniable architectural presence. It becomes an atmosphere rather than a campaign.',
    ],
    tags: ['Brand Strategy', 'Typography', 'Spatial Theory', 'Editorial Design'],
  },
  {
    id: 'jrn-02',
    slug: 'designing-spaces-that-feel-personal',
    title: 'Designing Spaces That Feel Personal: The Poetics of Domestic Silence',
    category: 'Architecture',
    readTime: '8 min read',
    date: 'January 28, 2026',
    author: {
      name: 'Marcus Thorne',
      role: 'Partner, Lead Architect',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=85',
    },
    excerpt: 'In an era overwhelmed by digital velocity, residential interiors must serve as acoustic and visual sanctuaries capable of grounding the human nervous system.',
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
    content: [
      'We often measure architectural success by square meters or daylight lux calculations. Yet the true quality of a home resides in its quieter moments: how footsteps sound on unlacquered timber, how afternoon shadows stretch across a hand-trowelled plaster wall, and where the eye rests when looking up from a book.',
      'Our approach to spatial planning discards open-concept chaos in favour of choreographed thresholds. Moving between public social rooms and introspective alcoves should feel like turning the pages of an oversized, linen-bound monograph.',
      'By prioritising natural lime, unpolished stone, and acoustic absorption over glossy industrial finishes, we restore domestic dignity. Space ceases to be real estate and becomes a living vessel for quiet contemplation.',
    ],
    tags: ['Residential', 'Acoustics', 'Natural Materials', 'Spatial Living'],
  },
  {
    id: 'jrn-03',
    slug: 'understanding-colour-and-material',
    title: 'Tactile Honesty: Sourcing Raw Minerals and Pigments in Contemporary Craft',
    category: 'Materiality',
    readTime: '5 min read',
    date: 'January 14, 2026',
    author: {
      name: 'Sophia Chen',
      role: 'Head of Interiors & Materials',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=85',
    },
    excerpt: 'Synthetics cannot replicate the patina of time. Why our studio insists on earth-mined ochres, cast bronzes, and local timber grains that age with grace.',
    heroImage: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1600&q=85',
    content: [
      'Every finish sample in our studio library tells an elemental story. When we specify terracotta tiles cured in wood-fired kilns or beeswax-sealed ironmongery, we are designing for the year 2050 as much as the day of project handover.',
      'Contemporary construction often prioritises immaculate uniformity over natural character. Yet perfection is psychologically sterile. The slight surface variation in hand-split slate or the delicate oxidation of untreated bronze gives human beings a visceral connection to geology and craft.',
      'When clients ask why our palettes feel serene, the answer lies in pigment purity. We build harmonies rooted in natural earth tones—warm limestone ivory, river stone charcoal, and muted moss green—creating spaces that never succumb to fleeting trends.',
    ],
    tags: ['Material Research', 'Sustainability', 'Patina', 'Interior Craft'],
  },
  {
    id: 'jrn-04',
    slug: 'the-future-of-digital-design',
    title: 'The Digital Screen as Architectural Canvas: Beyond Flat SaaS Grids',
    category: 'Digital Craft',
    readTime: '7 min read',
    date: 'December 20, 2025',
    author: {
      name: 'Julian Ross',
      role: 'Director of Digital Experiences',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=85',
    },
    excerpt: 'Why digital product design must borrow principles from editorial typography, exhibition curation, and physical spatial choreography.',
    heroImage: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1600&q=85',
    content: [
      'For the past decade, digital design has been held hostage by homogenous design frameworks and cookie-cutter SaaS layouts. Every website begins to look like a marketing dashboard, stripped of poetry, rhythm, and surprise.',
      'At ATELIER N°10, we view the digital screen as an infinite physical gallery. Users do not merely scroll down a column; they traverse a visual exhibition where typographic scale commands attention, white space provides cognitive respite, and transitions behave with mechanical grace.',
      'By applying asymmetric grid compositions, fluid type hierarchies, and purposeful micro-interactions, we transform ephemeral web visits into memorable digital pilgrimages.',
    ],
    tags: ['UI/UX', 'Web Typography', 'Interaction Design', 'Digital Art'],
  },
];

export const studioServices: ServiceItem[] = [
  {
    id: 'srv-arch',
    title: 'Architecture & Spatial Design',
    category: 'Built Environment',
    lead: 'We conceive monolithic, sustainable architecture that synthesises alpine context, thermal efficiency, and sublime natural illumination.',
    scope: [
      'Residential Villas & Private Compounds',
      'Cultural Pavilions & Gallery Spaces',
      'Commercial Headquarter Architecture',
      'Space Planning & Master Feasibility',
      '3D Architectural Visualisation & BIM',
      'Net-Zero Carbon Concept Development',
    ],
    deliverables: [
      'Concept schematic design dossiers',
      'Detailed construction permit drawings',
      'Hyper-realistic physical & digital scale models',
      'Sustainable building envelope calculations',
      'On-site contractor artistic supervision',
    ],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    metrics: 'Over 48,000 m² of built cultural & residential spatial envelope across 6 countries.',
  },
  {
    id: 'srv-interior',
    title: 'Interior Architecture & Curation',
    category: 'Tactile Spaces',
    lead: 'From bespoke penthouse conversions to boutique retail flagships, we sculpt environments with raw materials, custom joinery, and tailored acoustic tranquility.',
    scope: [
      'High-End Residential Interiors',
      'Boutique Hospitality & Hotel Suites',
      'Retail Showrooms & Gallery Flagships',
      'Custom Joinery, Kitchens & Built-in Furniture',
      'Architectural Lighting & Acoustic Schematics',
      'Material Sourcing & Tactile Palette Strategy',
    ],
    deliverables: [
      'Detailed 1:20 interior joinery blueprints',
      'Material sample boards & procurement schedules',
      'Custom furniture & fixture design drawings',
      'Integrated MEP and acoustic coordination plans',
      'Turnkey styling, curation & installation oversight',
    ],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    metrics: '94% of materials sourced sustainably from regional European artisans and certified mills.',
  },
  {
    id: 'srv-branding',
    title: 'Branding & Visual Identity Systems',
    category: 'Brand Architecture',
    lead: 'We craft comprehensive identity systems for luxury, architectural, and cultural institutions that command respect across both physical and digital mediums.',
    scope: [
      'Brand Strategy, Positioning & Naming',
      'Bespoke Wordmarks & Typographic Systems',
      'Packaging Architecture & Luxury Unboxing',
      'Editorial Publications & Monographs',
      'Tactile Stationery & Sustainable Print Collateral',
      'Comprehensive Multi-Language Brand Guidelines',
    ],
    deliverables: [
      'Master brand identity style manual',
      'Vector icon sets and custom typeface pairings',
      'Production-ready print and packaging dies',
      'Full digital asset kits & animation motion guidelines',
      'Environmental signage & architectural wayfinding',
    ],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85',
    metrics: 'Over 35 international design awards including Red Dot, D&AD, and Swiss Design Awards.',
  },
  {
    id: 'srv-digital',
    title: 'Digital & UI/UX Experiences',
    category: 'Interactive Platforms',
    lead: 'We engineer digital destinations that break free from generic templates, delivering breathtaking aesthetics, sub-second performance, and fluid accessibility.',
    scope: [
      'Bespoke Studio & E-Commerce Web Platforms',
      'Interactive Design Systems & Token Architecture',
      'Mobile Application & Tablet Interfaces',
      'Interactive Portfolio & Digital Archives',
      'Creative WebGL & Micro-Interaction Choreography',
      'Headless CMS & High-Speed Next.js Architecture',
    ],
    deliverables: [
      'Interactive high-fidelity Figma prototypes',
      'Component-based design system token libraries',
      'Production-grade responsive web source code',
      'Accessibility audit reports & Lighthouse 95+ scores',
      'Performance-tuned global CDN edge deployment',
    ],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85',
    metrics: '100% bespoke code architecture with zero generic page-builder dependencies.',
  },
  {
    id: 'srv-photo',
    title: 'Photography & Art Direction',
    category: 'Visual Narrative',
    lead: 'High-concept spatial photography, film direction, and still life captures that elevate projects to the pages of international design journals.',
    scope: [
      'Architectural & Interior Location Photography',
      'Still Life Luxury Product & Material Captures',
      'Exhibition & Installation Documentation',
      'Editorial Fashion & Lookbook Art Direction',
      'Cinematic 4K Architectural Short Films',
      'Retouching, Color Grading & Print Pre-press',
    ],
    deliverables: [
      'High-resolution archival RAW & TIFF suites',
      'Curated web-optimised editorial image selections',
      'Exhibition-ready fine art giclée print files',
      'Editorial press release visual kits',
      'Social media motion video loops',
    ],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85',
    metrics: 'Over 120 publications across Domus, Wallpaper*, Elle Décor, and Architectural Digest.',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Elena Vance',
    role: 'Founder & Principal Creative Director',
    discipline: 'Spatial Curation & Brand Identity',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85',
    bio: 'Educated at ETH Zürich and Central Saint Martins, Elena founded ATELIER N°10 to bridge architectural rigor with editorial brand poetics. Her work has been exhibited at the Venice Architecture Biennale.',
  },
  {
    name: 'Marcus Thorne',
    role: 'Partner & Lead Architect',
    discipline: 'Monolithic Architecture & Structural Craft',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85',
    bio: 'Specialising in raw board-formed concrete and mass timber structures, Marcus spent a decade leading public cultural projects across Basel and Oslo before joining the practice.',
  },
  {
    name: 'Sophia Chen',
    role: 'Partner & Head of Interiors',
    discipline: 'Tactile Finishes, Lighting & Furniture',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85',
    bio: 'With a background in fine art sculpture and Milanese interior design, Sophia curates material libraries that celebrate stone patinas, cast metals, and acoustic stillness.',
  },
  {
    name: 'Julian Ross',
    role: 'Director of Digital & Interaction',
    discipline: 'Interactive Web Systems & UI/UX',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85',
    bio: 'Pioneering generative design interfaces and tactile web interactions, Julian ensures that ATELIER N°10’s digital commissions embody the same physical weight as its buildings.',
  },
];

export const studioStats = [
  { value: '14+', label: 'Years of Practice' },
  { value: '62', label: 'Completed Spatial Commissions' },
  { value: '38', label: 'International Design Honors' },
  { value: '100%', label: 'Independent & Partner-Led' },
];

export const studioLocations = [
  {
    city: 'Zürich',
    role: 'Headquarters & Architecture Archive',
    address: 'Neugasse 29, 8005 Zürich, Switzerland',
    phone: '+41 44 280 10 90',
    email: 'zurich@atelier-no10.ch',
  },
  {
    city: 'Milan',
    role: 'Interior Atelier & Material Lab',
    address: 'Via Solferino 14, 20121 Milano, Italy',
    phone: '+39 02 8739 10 20',
    email: 'milano@atelier-no10.ch',
  },
  {
    city: 'Tokyo',
    role: 'Digital & Branding Research Desk',
    address: '5-7-2 Minami-Aoyama, Minato-ku, Tokyo 107-0062',
    phone: '+81 3 6427 10 80',
    email: 'tokyo@atelier-no10.ch',
  },
];
