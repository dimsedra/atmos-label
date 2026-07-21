export interface WorkItem {
  id: string;
  title: string;
  discipline: string; // e.g. 'Dance Performance', 'Outside Production', 'LP Release', 'Visual Art & Styling', 'Solo Single', 'Analog Sound Design'
  year: string;
  description: string;
  context?: string; // e.g. 'VALLEY Collective', 'Solo Sovereignty', 'Outside Collaboration'
  audioTrack?: {
    title: string;
    duration: string;
  };
  catalogNumber?: string; // e.g. 'ATM-024 / LP'
  coverImage?: string;
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
  works: WorkItem[];
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
  works: WorkItem[];
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
    works: [
      {
        id: 'work-v-01',
        title: 'Glasshouse LP',
        discipline: 'Full Album Release',
        year: '2026',
        context: 'VALLEY Collective',
        catalogNumber: 'ATM-024 / LP',
        description: 'Debut 8-track studio album recorded live on tape in a glass studio in Bukchon.',
        coverImage: 'https://images.pexels.com/photos/9085380/pexels-photo-9085380.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&q=90',
        audioTrack: {
          title: 'Light Leak',
          duration: '03:48',
        },
      },
      {
        id: 'work-v-02',
        title: 'Momentum Live Sessions at DDP',
        discipline: 'Unscripted Concert Performance',
        year: '2025',
        context: 'VALLEY Collective',
        description: 'Unamplified outdoor live performance captured by observational 16mm camera.',
      },
    ],
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
    works: [
      {
        id: 'work-p-01',
        title: 'Velvet Orbit EP',
        discipline: 'EP Release',
        year: '2026',
        context: 'PRIX Collective',
        catalogNumber: 'ATM-025 / EP',
        description: '5-track glossy electronic pop project celebrating unfiltered presence.',
        coverImage: 'https://images.pexels.com/photos/8005245/pexels-photo-8005245.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&q=90',
        audioTrack: {
          title: 'Velvet Orbit',
          duration: '03:22',
        },
      },
      {
        id: 'work-p-02',
        title: 'Sideways Installation & Performance',
        discipline: 'Multi-disciplinary Exhibition',
        year: '2025',
        context: 'PRIX Collective',
        description: 'Tactile fashion and sound installation staged in an abandoned Seongsu warehouse.',
      },
    ],
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
    works: [
      {
        id: 'w-jw-1',
        title: 'Mapo Tapes Vol. 2',
        discipline: 'Solo Instrumental LP',
        year: '2025',
        context: 'Solo Work',
        catalogNumber: 'ATM-012 / LP',
        description: 'Independent 6-track instrumental cassette produced under her personal moniker.',
        audioTrack: {
          title: 'Static & Smoke',
          duration: '03:42',
        },
      },
      {
        id: 'w-jw-2',
        title: 'Glasshouse LP (Guitar & Production)',
        discipline: 'Full Album Release',
        year: '2026',
        context: 'VALLEY Collective',
        catalogNumber: 'ATM-024 / LP',
        description: 'Lead guitar arrangements and synth production for VALLEY debut LP.',
      },
      {
        id: 'w-jw-3',
        title: 'Production for Tokyo Indie Duo',
        discipline: 'Outside Audio Production',
        year: '2026',
        context: 'Outside Collaboration',
        description: 'Arranged and mixed lead single "Midnight Crossing" for Japanese R&B act.',
      },
    ],
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
    bio: 'Trained in jazz drumming from age nine. Ren brings polyrhythmic momentum and raw kinetic energy to every performance.',
    scoutingStory: 'Scouted during a midnight underground jazz session in Hongdae where he was playing solo drum improvisations.',
    image: 'https://images.pexels.com/photos/33635003/pexels-photo-33635003.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.pexels.com/photos/33635003/pexels-photo-33635003.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    ],
    works: [
      {
        id: 'w-rn-1',
        title: 'Seoul International Rhythm Summit',
        discipline: 'Percussion Solo Performance',
        year: '2025',
        context: 'Solo Performance',
        description: 'Solo polyrhythmic drum improvisation performed live at Seoul Rhythm Summit.',
      },
      {
        id: 'w-rn-2',
        title: 'Thunderbreak Single',
        discipline: 'Collective Single',
        year: '2026',
        context: 'VALLEY Collective',
        description: 'Rhythm-driven lead single featuring experimental 7/8 drum patterns.',
        audioTrack: {
          title: 'Thunderbreak',
          duration: '04:15',
        },
      },
    ],
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
    works: [
      {
        id: 'w-[#1]',
        title: 'Busan Tides (Acoustic Demos)',
        discipline: 'Solo Acoustic Release',
        year: '2024',
        context: 'Solo Work',
        description: 'Self-released cassette tape celebrating coastal roots and acoustic bass.',
        audioTrack: {
          title: 'Low Frequency Heart',
          duration: '03:18',
        },
      },
    ],
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
    works: [
      {
        id: 'w-k-1',
        title: 'Signal & Grain Zine #04',
        discipline: 'Visual Art & Publication',
        year: '2026',
        context: 'Solo Work',
        description: 'Independent art zine exhibition and print run in Seongsu-dong.',
      },
      {
        id: 'w-k-2',
        title: 'Voltage Shift Sound Design',
        discipline: 'Analog Sound Design',
        year: '2026',
        context: 'VALLEY Collective',
        audioTrack: {
          title: 'Voltage Shift',
          duration: '03:52',
        },
        description: 'Custom modular synthesizer patch design for live soundscapes.',
      },
    ],
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
    works: [
      {
        id: 'w-mh-1',
        title: 'Winter Songs (Live Busking Recording)',
        discipline: 'Field Recording Album',
        year: '2025',
        context: 'Solo Work',
        description: 'Live unamplified street recording captured on 1/4-inch analog tape.',
        audioTrack: {
          title: 'Glasshouse',
          duration: '03:48',
        },
      },
    ],
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
    works: [
      {
        id: 'w-hn-1',
        title: 'Seoul Biennale Solo Choreography',
        discipline: 'Contemporary Dance Performance',
        year: '2025',
        context: 'Solo Performance',
        description: 'Solo contemporary dance piece "Unfiltered Coherence" performed live at DDP.',
      },
      {
        id: 'w-hn-2',
        title: 'Velvet Orbit EP (Performance Direction)',
        discipline: 'EP Release & Movement',
        year: '2026',
        context: 'PRIX Collective',
        catalogNumber: 'ATM-025 / EP',
        description: 'Lead performance direction and vocal arrangement for PRIX EP.',
        audioTrack: {
          title: 'Velvet Orbit',
          duration: '03:22',
        },
      },
    ],
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
    works: [
      {
        id: 'w-yn-1',
        title: 'Nine Years Later',
        discipline: 'Solo Single Release',
        year: '2025',
        context: 'Solo Work',
        catalogNumber: 'ATM-018 / Single',
        description: 'Breakthrough independent single detailing her personal reclamation.',
        audioTrack: {
          title: 'Nine Years Later',
          duration: '03:45',
        },
      },
      {
        id: 'w-yn-2',
        title: 'Co-writing for Global Pop Act',
        discipline: 'Outside Songwriting Credit',
        year: '2026',
        context: 'Outside Production',
        description: 'Vocal production and top-line song credit on London-based pop release.',
      },
      {
        id: 'w-yn-3',
        title: 'No Filter Track',
        discipline: 'Collective Single',
        year: '2026',
        context: 'PRIX Collective',
        audioTrack: {
          title: 'No Filter',
          duration: '03:15',
        },
        description: 'Lead single co-written with Rae for PRIX.',
      },
    ],
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
    works: [
      {
        id: 'w-cl-1',
        title: 'Capsule Styling for Independent Label',
        discipline: 'Fashion Styling & Creative Direction',
        year: '2026',
        context: 'Visual Art',
        description: 'Creative direction and lookbook styling for Seoul independent fashion label.',
      },
      {
        id: 'w-cl-2',
        title: 'Gloss & Groove Track',
        discipline: 'Electronic Vocal Performance',
        year: '2026',
        context: 'PRIX Collective',
        audioTrack: {
          title: 'Gloss & Groove',
          duration: '03:30',
        },
        description: 'Electronic vocal textures for PRIX.',
      },
    ],
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
    works: [
      {
        id: 'w-ra-1',
        title: 'Cipher Tape 01',
        discipline: 'Underground Beat Tape',
        year: '2025',
        context: 'Solo Work',
        description: 'Self-produced underground beat tape recorded on cassette.',
        audioTrack: {
          title: 'Sideways Arrival',
          duration: '03:08',
        },
      },
    ],
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
];
