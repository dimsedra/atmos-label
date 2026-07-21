export interface SoloSovereigntyProject {
  title: string;
  type: 'Outside Production' | 'Solo Release' | 'Dance Performance' | 'Visual Art';
  description: string;
  year: string;
  audioUrl?: string;
}

export interface MemberProfile {
  id: string;
  slug: string;
  name: string;
  stageName?: string;
  groupId: 'valley' | 'prix';
  groupName: 'VALLEY' | 'PRIX';
  role: string;
  preExistingDiscipline: string;
  archetype: string;
  bio: string;
  scoutingStory: string;
  image: string;
  gallery: string[];
  soloSovereignty: SoloSovereigntyProject[];
  featuredTrack?: {
    title: string;
    duration: string;
    audioUrl?: string;
  };
}

export interface GroupProfile {
  id: 'valley' | 'prix';
  slug: string;
  name: 'VALLEY' | 'PRIX';
  tagline: string;
  memberCount: number;
  soundProfile: string;
  stageVibe: string;
  releasePhilosophy: string;
  heroImage: string;
  members: string[]; // Member IDs
}

export interface DiscographyRelease {
  id: string;
  catalogNumber: string; // e.g. ATM-001 / LP
  title: string;
  artist: string;
  releaseType: 'LP' | 'EP' | 'Single';
  year: string;
  trackCount: number;
  duration: string;
  coverImage: string;
  featuredTrack: string;
  status: 'Released' | 'Upcoming';
}

export const GROUPS: GroupProfile[] = [
  {
    id: 'valley',
    slug: 'valley',
    name: 'VALLEY',
    tagline: 'Pure Momentum — Music nerds who became rockstars without losing the music nerd part.',
    memberCount: 5,
    soundProfile: 'High-octane, rhythm-heavy rock-pop that makes you move before you decide to.',
    stageVibe: 'Unscripted, generous, outward-facing. Real reactions to each other in real time.',
    releasePhilosophy: 'Music arrives when the momentum in the room demands it, rejecting mandatory comeback cycles.',
    heroImage: 'https://images.pexels.com/photos/9085380/pexels-photo-9085380.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&q=90',
    members: ['member-v1', 'member-v2', 'member-v3', 'member-v4', 'member-v5'],
  },
  {
    id: 'prix',
    slug: 'prix',
    name: 'PRIX',
    tagline: 'Fully Alive — Unfiltered internal-external coherence with inhabitant energy.',
    memberCount: 4,
    soundProfile: 'Confident, glossy, self-aware pop with genuine groove and warmth underneath.',
    stageVibe: 'Controlled chaos that coheres because what they share is total presence, not an aesthetic brief.',
    releasePhilosophy: 'Arrives sideways. Unpredictable in format, unmistakable in origin.',
    heroImage: 'https://images.pexels.com/photos/8005245/pexels-photo-8005245.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&q=90',
    members: ['member-p1', 'member-p2', 'member-p3', 'member-p4'],
  },
];

export const MEMBERS: MemberProfile[] = [
  // VALLEY Members (5)
  {
    id: 'member-v1',
    slug: 'jiwoo',
    name: 'Jiwoo',
    groupId: 'valley',
    groupName: 'VALLEY',
    role: 'Lead Songwriter & Guitarist',
    preExistingDiscipline: 'Bedroom Producer & Multi-Instrumentalist',
    archetype: 'The Obsessive Craftsman',
    bio: 'Jiwoo spent seven years producing analog synths and bedroom rock demos before ever agreeing to step onto a public stage. Her introversion shapes her creative tension.',
    scoutingStory: 'Found not at a general audition, but through an anonymous Soundcloud tape recorded in a basement studio in Mapo-gu.',
    image: 'https://images.pexels.com/photos/7778885/pexels-photo-7778885.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.pexels.com/photos/7778885/pexels-photo-7778885.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
      'https://images.pexels.com/photos/9771506/pexels-photo-9771506.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    ],
    soloSovereignty: [
      {
        title: 'Mapo Tapes Vol. 2',
        type: 'Solo Release',
        description: 'Independent 6-track instrumental EP produced under her personal moniker.',
        year: '2025',
      },
      {
        title: 'Production for Tokyo Indie Duo',
        type: 'Outside Production',
        description: 'Arranged and mixed lead single "Midnight Crossing" for Japanese R&B act.',
        year: '2026',
      },
    ],
    featuredTrack: {
      title: 'Static & Smoke',
      duration: '03:42',
    },
  },
  {
    id: 'member-v2',
    slug: 'ren',
    name: 'Ren',
    groupId: 'valley',
    groupName: 'VALLEY',
    role: 'Drummer & Percussionist',
    preExistingDiscipline: 'Jazz Fusion & Traditional Percussion',
    archetype: 'Rhythmic Engine',
    bio: 'Trained in jazz drumming from age nine. Ren brings polyrhythmic momentum and raw kinetic energy to every VALLEY live performance.',
    scoutingStory: 'Scouted during a midnight underground jazz session in Hongdae where he was playing solo drum improvisations.',
    image: 'https://images.pexels.com/photos/33635003/pexels-photo-33635003.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.pexels.com/photos/33635003/pexels-photo-33635003.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    ],
    soloSovereignty: [
      {
        title: 'International Drum Festival Showcase',
        type: 'Dance Performance',
        description: 'Solo percussion performance at Seoul International Rhythm Summit.',
        year: '2025',
      },
    ],
    featuredTrack: {
      title: 'Thunderbreak',
      duration: '04:15',
    },
  },
  {
    id: 'member-v3',
    slug: 'sohee',
    name: 'Sohee',
    groupId: 'valley',
    groupName: 'VALLEY',
    role: 'Vocalist & Bassist',
    preExistingDiscipline: 'Indie Rock Bassist & Acoustic Songwriter',
    archetype: 'The Anchoring Resonance',
    bio: 'Former bassist for an independent garage band in Busan. Her warm, grounding basslines form the harmonic spine of VALLEY.',
    scoutingStory: 'Discovered during an acoustic set at a seaside coffee shop in Gwangalli.',
    image: 'https://images.pexels.com/photos/9069676/pexels-photo-9069676.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.pexels.com/photos/9069676/pexels-photo-9069676.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    ],
    soloSovereignty: [
      {
        title: 'Busan Tides (Acoustic Demos)',
        type: 'Solo Release',
        description: 'Self-released acoustic cassette tape celebrating coastal roots.',
        year: '2024',
      },
    ],
    featuredTrack: {
      title: 'Low Frequency Heart',
      duration: '03:18',
    },
  },
  {
    id: 'member-v4',
    slug: 'kai',
    name: 'Kai',
    groupId: 'valley',
    groupName: 'VALLEY',
    role: 'Synthesist & Visual Designer',
    preExistingDiscipline: 'Modular Synthesizer & Graphic Designer',
    archetype: 'The Sound Sculptor',
    bio: 'Designs both the analog synthesizer patches and the grainy tactile visual aesthetic for VALLEY packaging and album covers.',
    scoutingStory: 'Found through a self-published art zine detailing modular synth patch diagrams.',
    image: 'https://images.pexels.com/photos/8221405/pexels-photo-8221405.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.pexels.com/photos/8221405/pexels-photo-8221405.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    ],
    soloSovereignty: [
      {
        title: 'Signal & Grain Zine #04',
        type: 'Visual Art',
        description: 'Independent art zine exhibition in Seongsu-dong.',
        year: '2026',
      },
    ],
    featuredTrack: {
      title: 'Voltage Shift',
      duration: '03:52',
    },
  },
  {
    id: 'member-v5',
    slug: 'minho',
    name: 'Minho',
    groupId: 'valley',
    groupName: 'VALLEY',
    role: 'Lead Vocalist',
    preExistingDiscipline: 'Street Busker & Singer-Songwriter',
    archetype: 'Unfiltered Frontman',
    bio: 'Spent five years busking in cold Seoul winters, developing a raw, expansive vocal range that cuts through heavy guitar riffs without effort.',
    scoutingStory: 'Noticed by an ATMOS scout while performing unamplified on a street corner in Sinchon.',
    image: 'https://images.pexels.com/photos/8005245/pexels-photo-8005245.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.pexels.com/photos/8005245/pexels-photo-8005245.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    ],
    soloSovereignty: [
      {
        title: 'Winter Songs (Live Busking Recording)',
        type: 'Solo Release',
        description: 'Live field recording captured on 1/4-inch tape.',
        year: '2025',
      },
    ],
    featuredTrack: {
      title: 'Glasshouse',
      duration: '03:48',
    },
  },

  // PRIX Members (4)
  {
    id: 'member-p1',
    slug: 'hana',
    name: 'Hana',
    groupId: 'prix',
    groupName: 'PRIX',
    role: 'Performance Leader & Choreographer',
    preExistingDiscipline: 'Contemporary & Street Dance (15 Years)',
    archetype: 'The Kinetic Presence',
    bio: 'Trained for fifteen years in contemporary dance before ever encountering pop music. Her movement is unscripted presence rather than routine sync.',
    scoutingStory: 'Rebuilt her creative practice after walking away from traditional academy contracts that sought to box her movement.',
    image: 'https://images.pexels.com/photos/9771506/pexels-photo-9771506.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.pexels.com/photos/9771506/pexels-photo-9771506.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    ],
    soloSovereignty: [
      {
        title: 'Seoul Biennale Solo Choreography',
        type: 'Dance Performance',
        description: 'Solo contemporary dance piece "Unfiltered Coherence" performed at DDP.',
        year: '2025',
      },
    ],
    featuredTrack: {
      title: 'Velvet Orbit',
      duration: '03:22',
    },
  },
  {
    id: 'member-p2',
    slug: 'yuna',
    name: 'Yuna',
    groupId: 'prix',
    groupName: 'PRIX',
    role: 'Vocalist & Songwriter',
    preExistingDiscipline: '9-Year Trainee System Survivor & Songwriter',
    archetype: 'Resilient Rebuilder',
    bio: 'Carried nine years of a traditional idol trainee system that failed her, rebuilding herself from scratch as an independent songwriter with unmistakable vocal presence.',
    scoutingStory: 'Approached by ATMOS after she released her self-produced manifesto single independent of any agency.',
    image: 'https://images.pexels.com/photos/7778885/pexels-photo-7778885.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.pexels.com/photos/7778885/pexels-photo-7778885.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    ],
    soloSovereignty: [
      {
        title: 'Nine Years Later (Solo Single)',
        type: 'Solo Release',
        description: 'Breakthrough independent single detailing her personal reclamation.',
        year: '2025',
      },
      {
        title: 'Co-writing for Global Pop Act',
        type: 'Outside Production',
        description: 'Vocal production and top-line song credit on London-based pop release.',
        year: '2026',
      },
    ],
    featuredTrack: {
      title: 'No Filter',
      duration: '03:15',
    },
  },
  {
    id: 'member-p3',
    slug: 'chloe',
    name: 'Chloe',
    groupId: 'prix',
    groupName: 'PRIX',
    role: 'Vocalist & Creative Director',
    preExistingDiscipline: 'Fashion Stylist & Electronic Vocalist',
    archetype: 'The Inhabited It-Girl',
    bio: 'It-girl energy that is earned because it is inhabited, not performed. Chloe shapes PRIX visual tone and glossy electronic vocal textures.',
    scoutingStory: 'Met at a film screening in Itaewon where her self-styled aesthetic stood out effortlessly.',
    image: 'https://images.pexels.com/photos/9069676/pexels-photo-9069676.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.pexels.com/photos/9069676/pexels-photo-9069676.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    ],
    soloSovereignty: [
      {
        title: 'Capsule Styling for Independent Label',
        type: 'Visual Art',
        description: 'Creative direction and lookbook styling for Seoul independent fashion label.',
        year: '2026',
      },
    ],
    featuredTrack: {
      title: 'Gloss & Groove',
      duration: '03:30',
    },
  },
  {
    id: 'member-p4',
    slug: 'rae',
    name: 'Rae',
    groupId: 'prix',
    groupName: 'PRIX',
    role: 'Rapper & Producer',
    preExistingDiscipline: 'Underground Hip-Hop Beatmaker',
    archetype: 'The Unfiltered Tongue',
    bio: 'Operates without a filter between internal thought and external rhythm. Her sharp, conversational rap flow anchors PRIX glossy pop with raw warmth.',
    scoutingStory: 'Found through underground cipher recordings in Hongdae club basements.',
    image: 'https://images.pexels.com/photos/8005245/pexels-photo-8005245.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.pexels.com/photos/8005245/pexels-photo-8005245.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    ],
    soloSovereignty: [
      {
        title: 'Cipher Tape 01',
        type: 'Solo Release',
        description: 'Self-produced underground beat tape.',
        year: '2025',
      },
    ],
    featuredTrack: {
      title: 'Sideways Arrival',
      duration: '03:08',
    },
  },
];

export const DISCOGRAPHY: DiscographyRelease[] = [
  {
    id: 'disc-01',
    catalogNumber: 'ATM-024 / LP',
    title: 'Glasshouse',
    artist: 'VALLEY (feat. Minho & Jiwoo)',
    releaseType: 'LP',
    year: '2026',
    trackCount: 8,
    duration: '31 min',
    coverImage: 'https://images.pexels.com/photos/9085380/pexels-photo-9085380.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&q=90',
    featuredTrack: 'Light Leak (03:48)',
    status: 'Released',
  },
  {
    id: 'disc-02',
    catalogNumber: 'ATM-025 / EP',
    title: 'Velvet Orbit',
    artist: 'PRIX (feat. Hana & Yuna)',
    releaseType: 'EP',
    year: '2026',
    trackCount: 5,
    duration: '18 min',
    coverImage: 'https://images.pexels.com/photos/8005245/pexels-photo-8005245.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&q=90',
    featuredTrack: 'No Filter (03:15)',
    status: 'Released',
  },
  {
    id: 'disc-03',
    catalogNumber: 'ATM-018 / Single',
    title: 'Nine Years Later',
    artist: 'Yuna (PRIX — Solo Sovereignty)',
    releaseType: 'Single',
    year: '2025',
    trackCount: 1,
    duration: '03:45',
    coverImage: 'https://images.pexels.com/photos/7778885/pexels-photo-7778885.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    featuredTrack: 'Nine Years Later',
    status: 'Released',
  },
  {
    id: 'disc-04',
    catalogNumber: 'ATM-012 / LP',
    title: 'Mapo Tapes Vol. 2',
    artist: 'Jiwoo (VALLEY — Solo Sovereignty)',
    releaseType: 'LP',
    year: '2025',
    trackCount: 6,
    duration: '24 min',
    coverImage: 'https://images.pexels.com/photos/33635003/pexels-photo-33635003.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    featuredTrack: 'Basement Echoes',
    status: 'Released',
  },
];
