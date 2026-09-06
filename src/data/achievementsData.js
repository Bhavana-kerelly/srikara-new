import { assetUrl } from '@/lib/assetUrl'

export const HERO_DATA = {
  eyebrow: 'ACHIEVEMENTS',
  titlePart1: 'Numbers that',
  titlePart2: 'Build Trust.',
  description:
    'Every number represents a life touched, a journey healed and our unwavering commitment to better health.',
  ticker: ['COMMITMENT', 'EXPERTISE', 'BETTER TOMORROWS'],
  hospitalImage: assetUrl('images/leadership/hero-hospital.jpg'),
}

export const BIGGEST_MILESTONE = {
  eyebrow: 'OUR BIGGEST MILESTONE',
  number: '2,559+',
  rawValue: 2559,
  title: 'Total Knee Replacements',
  highlight: 'in 6 Months',
  description:
    'Srikara Hospitals performed 2,559 Total Knee Replacement procedures across 9 branches between January and June 2026, reflecting our commitment to advanced orthopaedic care and surgical excellence.',
  kneeImage: assetUrl('images/achievements/knee-glow.jpg'),
  stats: [
    {
      id: 'period',
      value: 'Jan – Jun 2026',
      label: 'Time Period',
      icon: 'calendar',
    },
    {
      id: 'branches',
      value: '9',
      rawValue: 9,
      label: 'Branches',
      icon: 'map-pin',
    },
    {
      id: 'tkrs',
      value: '2,559+',
      rawValue: 2559,
      label: 'Total TKRs',
      icon: 'activity',
    },
  ],
  branchBreakdown: [
    { name: 'RTC X Roads', count: 961, share: '37.5%' },
    { name: 'Miyapur', count: 653, share: '25.5%' },
    { name: 'Vijayawada', count: 295, share: '11.5%' },
    { name: 'LB Nagar', count: 287, share: '11.2%' },
    { name: 'Kompally', count: 127, share: '5.0%' },
    { name: 'ECIL', count: 88, share: '3.4%' },
    { name: 'Boduppal', count: 50, share: '2.0%' },
    { name: 'Lakdikapul', count: 50, share: '2.0%' },
    { name: 'Rajahmundry', count: 48, share: '1.9%' },
  ],
  monthlyBreakdown: [
    { month: 'Jan', count: 210 },
    { month: 'Feb', count: 345 },
    { month: 'Mar', count: 420 },
    { month: 'Apr', count: 533 },
    { month: 'May', count: 637 },
    { month: 'Jun', count: 414 },
  ],
}

export const SPECIALTY_ACHIEVEMENTS = [
  {
    id: 'cardiovascular',
    title: 'Cardiovascular Sciences',
    number: '6,700+',
    rawValue: 6700,
    metricLabel: 'Treated Cases',
    description: 'Ultra-rapid STEMI stenting and interventional cardiac services.',
    image: assetUrl('images/heart-3d.png'),
    accentColor: '#D41472',
    theme: 'magenta',
  },
  {
    id: 'neurosciences',
    title: 'Neurosciences',
    number: '1,800+',
    rawValue: 1800,
    metricLabel: 'Micro-Keyhole Surgeries',
    description: 'Minimally invasive neurosurgeries to safeguard active motor control.',
    image: assetUrl('images/brain-3d.png'),
    accentColor: '#19BFD3',
    theme: 'cyan',
  },
  {
    id: 'nephrology',
    title: 'Nephrology',
    number: '2,500+',
    rawValue: 2500,
    metricLabel: 'Kidney Patients',
    description: 'Advanced dialysis and specialised protocols inspired by the Mayo Clinic.',
    image: assetUrl('images/kidney-3d.png'),
    accentColor: '#D41472',
    theme: 'magenta',
  },
  {
    id: 'oncology-pulmonology',
    title: 'Oncology & Pulmonology',
    dualMetrics: [
      { value: '5,800+', rawValue: 5800, label: 'Cancer Cases', color: '#D41472' },
      { value: '4,200+', rawValue: 4200, label: 'Pulmonary Treatments', color: '#D41472' },
    ],
    description: 'Robotic surgical resection and advanced bronchoscopy procedures.',
    image: assetUrl('images/lungs-3d.png'),
    accentColor: '#D41472',
    theme: 'dual',
  },
]

export const MAJOR_MILESTONE = {
  eyebrow: 'A MAJOR MILESTONE',
  number: 'Over 30,000',
  rawValue: 30000,
  title: 'Joint Replacements',
  description:
    'In just over 12 years of operations, Srikara Hospitals has successfully completed more than 30,000 joint replacement surgeries, setting a national benchmark for orthopaedic care volume and successful outcomes.',
  implantImage: assetUrl('images/achievements/knee-implant.jpg'),
}

export const INNOVATION_CARDS = [
  {
    id: 'navio-robotics',
    title: 'First NAVIO Robotic System in South India',
    badge: 'First NAVIO',
    description: 'Sub-millimeter accuracy, minimal blood loss and faster recovery.',
    icon: 'bot',
  },
  {
    id: 'isuite-ots',
    title: "State's First i-SUITE OTs",
    badge: "State's First",
    description: 'Smart, integrated surgical suites designed to minimise infection risks.',
    icon: 'layout',
  },
  {
    id: 'no-drain-technique',
    title: 'No-Drain, No-Blood-Loss Technique',
    badge: 'Proprietary Protocol',
    description: 'Advanced, minimally invasive protocols across multiple centres.',
    icon: 'shield-check',
  },
  {
    id: 'robotic-abdominal',
    title: 'Advanced Robotic Abdominal Surgery',
    badge: 'Multi-Specialty',
    description:
      'First robotic abdominal surgery at Lakdikapul, expanding to urology, oncology and GI tracts.',
    icon: 'activity',
  },
]

export const SPEED_RECORDS = {
  block1: {
    badge: 'HIGH-SPEED VOLUME',
    primaryNumber: '650+',
    primaryRaw: 650,
    primaryLabel: 'in a Single Month',
    timeframe: 'May 2025',
    secondaryNumber: '2,100+',
    secondaryRaw: 2100,
    secondaryLabel: 'in 5 Months',
  },
  block2: {
    badge: 'SINGLE-DAY RECORD',
    number: '30',
    rawNumber: 30,
    heading: 'Knee Replacements',
    subheading: 'in a Single Day',
    description: 'A remarkable surgical milestone achieved by Dr. Akhil Dadi.',
  },
  surgeryImage: assetUrl('images/achievements/surgery-team.jpg'),
}

export const MORE_MILESTONES = [
  {
    id: 'm1',
    year: '2013',
    number: '01',
    category: 'Foundational',
    title: 'Srikara Flagship Opens',
    description: 'Founded with a pioneering focus on high-precision arthroplasty and patient-first orthopedic recovery.',
  },
  {
    id: 'm2',
    year: '2017',
    number: '10,000+',
    category: 'Surgical Scale',
    title: '10,000 Successful Procedures',
    description: 'Reached international benchmarks with rapid patient mobilization protocols and zero-infection records.',
  },
  {
    id: 'm3',
    year: '2020',
    number: '1st',
    category: 'Robotics',
    title: 'Robotic Arthroplasty Center of Excellence',
    description: 'South India’s landmark training ground for robotic knee replacement and surgical precision.',
  },
  {
    id: 'm4',
    year: '2023',
    number: '9',
    category: 'Expansion',
    title: 'Nine Super-Specialty Campuses',
    description: 'Providing comprehensive multidisciplinary tertiary care across Andhra Pradesh and Telangana.',
  },
]

export const IMPACT_DATA = {
  eyebrow: 'OUR IMPACT',
  titlePart1: 'Advanced Care.',
  titlePart2: 'Lasting Impact.',
  pillars: [
    { id: 'team', title: 'Expert Team', subtitle: '500+ Board-Certified Doctors', icon: 'users' },
    { id: 'tech', title: 'Advanced Technology', subtitle: 'Robotics & Modular i-SUITE', icon: 'shield-check' },
    { id: 'outcomes', title: 'Better Outcomes', subtitle: '99% Procedure Success Rate', icon: 'heart-pulse' },
    { id: 'community', title: 'Healthier Communities', subtitle: 'Over 100K+ Families Served', icon: 'globe' },
  ],
  lifestyleImage: assetUrl('images/achievements/vitality-impact.jpg'),
  footerTagline: 'SRIKARA HOSPITALS — HEALING TODAY. BUILDING TOMORROW.',
}
