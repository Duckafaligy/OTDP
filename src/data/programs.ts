export type Program = {
  slug: string;
  title: string;
  tagline: string;
  duration: string;
  format: string;
  ageGroup: string;
  description: string;
  outcomes: string[];
  modules: { title: string; detail: string }[];
  accent: 'plum' | 'teal' | 'amber';
};

export const programs: Program[] = [
  {
    slug: 'study-plans',
    title: 'Personalized Study Plans',
    tagline: 'An automated plan built around your courses, your pace, your goals.',
    duration: 'On demand · always available',
    format: 'Fully online · automated',
    ageGroup: 'All Ontario students',
    description:
      'Tell the platform your subjects and where you’re stuck. It builds a personalized study plan — what to review, in what order, with techniques that fit how you learn. Always free, always online.',
    outcomes: [
      'A clear plan for what to study next',
      'Techniques matched to how you learn',
      'Set your own intensity — chill or all-in',
      'No fees, ever',
    ],
    modules: [
      { title: 'Tell it your goals', detail: 'Pick subjects, deadlines and how hard you want to push.' },
      { title: 'Get a plan instantly', detail: 'An automated plan, ordered and paced for you — no waiting.' },
      { title: 'Multiple ways in', detail: 'Visuals, worked examples and techniques until it clicks.' },
      { title: 'Adjusts as you go', detail: 'The plan recalibrates as you mark what’s working.' },
    ],
    accent: 'plum',
  },
  {
    slug: 'career-pathways',
    title: 'Career-Path Guidance',
    tagline: 'Automated guidance around the career you want — at the intensity you choose.',
    duration: 'On demand · always available',
    format: 'Fully online · automated',
    ageGroup: 'All Ontario students',
    description:
      'Tell the platform the career you’re aiming for and how extreme you want to go — from casually exploring to all-in. It maps the courses, skills and steps to get there, and builds them into your study plan.',
    outcomes: [
      'A roadmap to your desired career',
      'An intensity dial — explore or go all-in',
      'Courses and skills mapped to the goal',
      'Guidance that updates as your goals change',
    ],
    modules: [
      { title: 'Name the goal', detail: 'Pick a career path — or a few you’re weighing.' },
      { title: 'Set the intensity', detail: 'Choose how hard you want to chase it, from light to extreme.' },
      { title: 'Get the roadmap', detail: 'Courses, skills and milestones, automatically mapped.' },
      { title: 'Linked to study', detail: 'The roadmap feeds straight into your study plan.' },
    ],
    accent: 'teal',
  },
  {
    slug: 'exam-season-intensives',
    title: 'Exam-Season Intensives',
    tagline: 'Automated review sprints timed for finals and EQAO.',
    duration: 'Seasonal · on demand',
    format: 'Fully online · automated',
    ageGroup: 'All Ontario students',
    description:
      'Short, focused review plans before mid-terms, finals and provincial tests — generated walkthroughs, practice sets and a day-by-day countdown you can actually follow.',
    outcomes: [
      'A revision plan you can follow',
      'Walkthroughs for likely topics',
      'Practice sets with instant feedback',
      'A countdown paced to your exam date',
    ],
    modules: [
      { title: 'Quick diagnostic', detail: 'A short check tells the platform where to focus.' },
      { title: 'Topic walkthroughs', detail: 'Generated, step-by-step, in your language.' },
      { title: 'Practice + feedback', detail: 'Sets that adapt to what you keep missing.' },
      { title: 'Mock run', detail: 'A timed run-through before the real one.' },
    ],
    accent: 'amber',
  },
  {
    slug: 'pathway-specialists',
    title: 'Pathway-Aware Guidance',
    tagline: 'Tuned to IB, AP, SHSM, French Immersion & York Arts.',
    duration: 'On demand · always available',
    format: 'Fully online · automated',
    ageGroup: 'Specialised program students',
    description:
      'The platform knows how Ontario’s programs differ — so your plan speaks IB, AP, SHSM, French Immersion or York Arts from the first step, no explaining what an IA is.',
    outcomes: [
      'Guidance tuned to your program',
      'Help framing IAs, EEs, ToK, AP, DELF',
      'Clear on what each path grades on',
      'Optional advanced track',
    ],
    modules: [
      { title: 'IB', detail: 'IAs, EEs, ToK and predicted-grade planning.' },
      { title: 'AP', detail: 'Course review paced to the May exam.' },
      { title: 'SHSM & co-op', detail: 'Sector portfolios and certifications.' },
      { title: 'French Immersion', detail: 'DELF prep and oral practice.' },
      { title: 'York Arts', detail: 'Audition prep and portfolio checklists.' },
    ],
    accent: 'plum',
  },
  {
    slug: 'end-of-semester-project',
    title: 'End-of-Semester Project',
    tagline: 'A real answer to “when will I use this in real life?”',
    duration: '6–12 weeks · per semester',
    format: 'Fully online',
    ageGroup: 'OTDP students',
    description:
      'Connect your subject to a real-world issue you care about. The platform helps you scope and build it; funds raised go to a cause, and the finished project goes in your portfolio.',
    outcomes: [
      'A project that proves you learned',
      'Funds raised go to a real cause',
      'A portfolio piece for applications',
      'A lived answer to “why this?”',
    ],
    modules: [
      { title: 'Pick an issue', detail: 'Choose something you actually care about.' },
      { title: 'Link your subject', detail: 'The platform helps connect it to your work.' },
      { title: 'Build & show', detail: 'A few weeks of guided build with check-ins.' },
      { title: 'Showcase + donate', detail: 'Demo night, and the funds reach the cause.' },
    ],
    accent: 'amber',
  },
  {
    slug: 'guidance-and-resources',
    title: 'Guides & Resource Library',
    tagline: 'Free guides, techniques and study packs — in your language.',
    duration: 'Always open',
    format: 'Fully online',
    ageGroup: 'All Ontario students',
    description:
      'Automated note packs, study guides, technique breakdowns and past-paper walkthroughs — available in multiple languages — plus automated help with course selection, OUAC/OCAS and OSAP.',
    outcomes: [
      'Guides you don’t pay for',
      'Available in multiple languages',
      'Study techniques that actually stick',
      'Help with OUAC, OCAS, OSAP',
    ],
    modules: [
      { title: 'Resource library', detail: 'Subject-tagged notes, packs and technique guides.' },
      { title: 'Your language', detail: 'Switch guides into the language you study best in.' },
      { title: 'Pathway packs', detail: 'Guides for OUAC, OCAS, OSAP, OSSLT.' },
    ],
    accent: 'teal',
  },
];
