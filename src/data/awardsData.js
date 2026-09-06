/**
 * Awards & Recognition Data Architecture for Srikara Hospitals
 * Fully modular and CMS-ready for dynamic expansion.
 */

export const AWARD_FILTER_CATEGORIES = [
  'ALL',
  'AWARDS',
  'HEALTHCARE',
  'ORTHOPEDICS',
  'ROBOTICS',
  'INNOVATION',
]

export const AWARDS_DATA = [
  {
    id: 'award-01',
    year: '2024–25',
    title: 'ET Legend in Robotic Joint Replacement Surgery',
    organization: 'ET Industry Achievers Awards (Telangana & AP)',
    shortDescription:
      'Recognition for Dr. Akhil Dadi’s leadership and contribution to robotic joint replacement surgery.',
    fullDescription:
      'Conferred at the prestigious ET Industry Achievers Awards (Telangana & AP), celebrating Dr. Akhil Dadi\'s clinical pioneering, establishment of high-volume robotic arthroplasty protocols, and dedication to sub-millimeter surgical accuracy.',
    categories: ['AWARDS', 'ROBOTICS', 'INNOVATION', 'ORTHOPEDICS', 'HEALTHCARE'],
    primaryCategory: 'Robotics & Innovation',
    recipient: 'Dr. Akhil Dadi',
    recipientRole: 'Chairman & Managing Director (CMD), Srikara Group of Hospitals',
    badge: 'Legend Award',
    featured: true,
    visualType: 'crystal',
    image: `${import.meta.env.BASE_URL}images/awards/award-et-legend.jpg`,
  },
  {
    id: 'award-02',
    year: '2021',
    title: 'Best Multi-Specialty Hospital in Telangana',
    organization: 'Times Health Awards',
    shortDescription:
      'Recognized for excellence across multiple medical specialties.',
    fullDescription:
      'Times Health Awards acknowledged Srikara Hospitals for establishing benchmark multidisciplinary care standards, integrating acute 24x7 emergency trauma infrastructure with specialized clinical departments across Telangana.',
    categories: ['AWARDS', 'HEALTHCARE'],
    primaryCategory: 'Healthcare Excellence',
    recipient: 'Srikara Hospitals',
    recipientRole: 'Institutional Milestone',
    badge: 'State Honor',
    featured: false,
    visualType: 'seal',
    image: `${import.meta.env.BASE_URL}images/awards/award-times-health.jpg`,
  },
  {
    id: 'award-03',
    year: '2020',
    title: 'Best Orthopedic Hospital',
    organization: 'National Healthcare Excellence Awards',
    shortDescription:
      'Honouring Srikara’s contribution to advanced orthopedic care.',
    fullDescription:
      'Conferred at the National Healthcare Excellence Awards for sustained clinical precision in complex joint replacements, revision arthroplasty, and advanced spine and orthopedic rehabilitation outcomes.',
    categories: ['AWARDS', 'ORTHOPEDICS', 'HEALTHCARE'],
    primaryCategory: 'Orthopedic Excellence',
    recipient: 'Srikara Department of Orthopaedics',
    recipientRole: 'Departmental Distinction',
    badge: 'National Honor',
    featured: false,
    visualType: 'medal',
    image: `${import.meta.env.BASE_URL}images/awards/award-orthopedic.jpg`,
  },
  {
    id: 'award-04',
    year: '2020',
    title: 'Best Hospital for Gastroenterology',
    organization: 'Healthcare Asia Awards',
    shortDescription:
      'Recognition for excellence in gastroenterology services.',
    fullDescription:
      'Healthcare Asia Awards recognized Srikara Hospitals for delivering world-class digestive healthcare, advanced therapeutic endoscopy interventions, and minimally invasive surgical gastroenterology protocols.',
    categories: ['AWARDS', 'HEALTHCARE'],
    primaryCategory: 'Specialty Care',
    recipient: 'Srikara Institute of Digestive Diseases',
    recipientRole: 'Super-Specialty Milestone',
    badge: 'Asia Pacific Citation',
    featured: false,
    visualType: 'trophy',
    image: `${import.meta.env.BASE_URL}images/awards/award-gastroenterology.jpg`,
  },
  {
    id: 'award-05',
    year: '2019',
    title: 'Best Hospital in Telangana',
    organization: 'Business Today',
    shortDescription:
      'Recognition for Srikara’s contribution to healthcare in Telangana.',
    fullDescription:
      'Awarded at the Business Today Most Powerful Businesspeople Awards, recognizing Srikara Hospitals for ethical clinical standards, rapid high-quality regional expansion, and patient-first healthcare accessibility.',
    categories: ['AWARDS', 'HEALTHCARE'],
    primaryCategory: 'Institutional Leadership',
    recipient: 'Srikara Group of Hospitals',
    recipientRole: 'Institutional Distinction',
    badge: 'Regional Benchmark',
    featured: false,
    visualType: 'plaque',
    image: `${import.meta.env.BASE_URL}images/awards/hero-crystal-trophy.jpg`,
  },
  {
    id: 'award-06',
    year: '2019',
    title: 'Best Healthcare Brand in Telangana',
    organization: 'BusinessWorld Healthcare Summit & Awards',
    shortDescription:
      'Recognized as a leading healthcare brand in Telangana.',
    fullDescription:
      'BusinessWorld Healthcare Summit & Awards recognized the Srikara brand identity as a beacon of patient trust, clinical reliability, and state-of-the-art diagnostic and surgical care across Telangana.',
    categories: ['AWARDS', 'HEALTHCARE'],
    primaryCategory: 'Brand Trust',
    recipient: 'Srikara Hospitals',
    recipientRole: 'Brand Leadership',
    badge: 'Brand Summit',
    featured: false,
    visualType: 'shield',
    image: `${import.meta.env.BASE_URL}images/awards/award-et-legend.jpg`,
  },
]

export const MILESTONES_DATA = [
  {
    id: 'm-2019',
    year: '2019',
    title: 'Healthcare Brand Recognition',
    organization: 'Business Today & BusinessWorld',
    summary: 'Dual landmark state recognitions establishing Srikara as a household healthcare institution.',
    status: 'completed',
  },
  {
    id: 'm-2020',
    year: '2020',
    title: 'Orthopedic Excellence',
    organization: 'National Healthcare Excellence Awards',
    summary: 'National distinction for specialized joint arthroplasty and trauma care delivery.',
    status: 'completed',
  },
  {
    id: 'm-2021',
    year: '2021',
    title: 'Multi-Specialty Recognition',
    organization: 'Times Health Awards',
    summary: 'Elevated to the premier multi-specialty healthcare network across Telangana.',
    status: 'completed',
  },
  {
    id: 'm-2024',
    year: '2024–25',
    title: 'Robotic Joint Replacement Recognition',
    organization: 'ET Industry Achievers Awards',
    summary: 'Conferred Legend Award for pioneering robotic joint replacement surgery in South India.',
    status: 'completed',
  },
  {
    id: 'm-2026',
    year: '2026',
    title: 'Future Milestone',
    organization: 'Advanced Surgical & Clinical Registry',
    summary: 'Expanding next-generation AI surgical navigation, clinical fellowships, and multi-city centers.',
    status: 'upcoming',
  },
]

export const FEATURED_MILESTONE_DATA = {
  eyebrow: 'KEY MILESTONES',
  mainHeading: 'Milestones That Moved',
  highlightHeading: 'Healthcare Forward.',
  supportingText:
    'Each milestone reflects our commitment to innovation, advanced technology and better patient outcomes.',
  featuredNumber: '27,000+',
  rawNumber: 27000,
  featuredLabel: 'Pioneering Robotics',
  featuredTitle: 'Joint Replacement Procedures',
  featuredDescription:
    'Srikara Hospitals has been recognized as a pioneer in robotic joint replacement in Andhra Pradesh and Telangana, with more than 27,000 joint replacement procedures completed.',
  supportingLabels: [
    'ROBOTIC INNOVATION',
    'CLINICAL EXPERIENCE',
    'SURGICAL EXCELLENCE',
    'PATIENT TRUST',
  ],
}
