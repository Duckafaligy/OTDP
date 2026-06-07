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
    slug: 'core-tutoring',
    title: 'Core Tutoring',
    tagline: 'Free tutoring for the courses that keep you up at night.',
    duration: 'Weekly · book what you need',
    format: 'Online or in person (GTA)',
    ageGroup: 'All Ontario students',
    description:
      'Book a tutor for any subject — 1:1 or small group, online or in person. Scheduled around your life. Always free.',
    outcomes: [
      'Confidence before your next test',
      'A tutor who meets you where you are',
      'Notes & worked examples to keep',
      'No fees, ever',
    ],
    modules: [
      { title: 'Book a slot', detail: 'Pick a subject and time. Matched to a tutor in 48 hours.' },
      { title: 'Show up as you are', detail: 'No placement test. We start from what you need.' },
      { title: 'Multiple ways in', detail: 'Visuals, walk-throughs, practice — until it clicks.' },
      { title: 'Keep the notes', detail: 'Every session ends with resources that are yours.' },
    ],
    accent: 'plum',
  },
  {
    slug: 'exam-season-intensives',
    title: 'Exam Season Intensives',
    tagline: 'Focused review sprints timed for finals and EQAO.',
    duration: '2–4 weeks · seasonal',
    format: 'Online + select in-person',
    ageGroup: 'All Ontario students',
    description:
      'Short, intense review programs before mid-terms, finals and provincial tests — group sessions, walkthrough packs and late-night office hours.',
    outcomes: [
      'A revision plan you can follow',
      'Walkthroughs for likely topics',
      'Office hours when you’re stuck',
      'A study group that shows up',
    ],
    modules: [
      { title: 'Diagnostic', detail: 'A quick check tells us where to focus.' },
      { title: 'Group sessions', detail: 'Topic-by-topic walkthroughs + practice.' },
      { title: 'Office hours', detail: 'Drop-in help in the two weeks before exams.' },
      { title: 'Mock day', detail: 'A timed run-through before the real one.' },
    ],
    accent: 'amber',
  },
  {
    slug: 'pathway-specialists',
    title: 'Pathway Specialists',
    tagline: 'Tutors who’ve lived IB, AP, SHSM, French Immersion & York Arts.',
    duration: 'Ongoing',
    format: 'Online or in person',
    ageGroup: 'Specialised program students',
    description:
      'Our staff come from across Ontario’s programs — so you won’t spend the first three sessions explaining what an IA is.',
    outcomes: [
      'A tutor who’s done your program',
      'Help with IAs, EEs, ToK, AP, DELF',
      'Real talk on what each grades on',
      'Optional advanced track',
    ],
    modules: [
      { title: 'IB', detail: 'IAs, EEs, ToK, predicted grades.' },
      { title: 'AP', detail: 'Course review paced to the May exam.' },
      { title: 'SHSM & co-op', detail: 'Sector portfolios and reach-outs.' },
      { title: 'French Immersion', detail: 'DELF prep and oral practice.' },
      { title: 'York Arts', detail: 'Audition prep and portfolio reviews.' },
    ],
    accent: 'teal',
  },
  {
    slug: 'remedial-and-advanced-tracks',
    title: 'Remedial & Advanced Tracks',
    tagline: 'Catch up, or run ahead — both are valid here.',
    duration: 'Term-aligned',
    format: 'Online + small group',
    ageGroup: 'All Ontario students',
    description:
      'Behind and tired of pretending otherwise? We’ve got a track. Bored and ready for next year? We’ve got one for that too.',
    outcomes: [
      'A judgment-free plan to catch up',
      'Or an advanced track that keeps pace',
      'A tutor who’s been there',
      'Real check-ins, not vibes',
    ],
    modules: [
      { title: 'Honest diagnostic', detail: 'We start where you are, not where you wish.' },
      { title: 'Tiered curriculum', detail: 'Remedial scaffolds or advanced extensions.' },
      { title: 'Six-week reviews', detail: 'A check-in to recalibrate the plan.' },
    ],
    accent: 'plum',
  },
  {
    slug: 'end-of-semester-project',
    title: 'End-of-Semester Project',
    tagline: 'A real answer to “when will I use this in real life?”',
    duration: '6–12 weeks · per semester',
    format: 'Hybrid',
    ageGroup: 'OTDP students',
    description:
      'Connect your subject to a real-world issue you care about. Funds raised go to a cause; the finished project goes in your portfolio.',
    outcomes: [
      'A project that proves you learned',
      'Funds raised go to a real cause',
      'A portfolio piece for applications',
      'A lived answer to “why this?”',
    ],
    modules: [
      { title: 'Pick an issue', detail: 'Choose something you actually care about.' },
      { title: 'Link your subject', detail: 'Your tutor helps connect it to your work.' },
      { title: 'Build & show', detail: 'A few weeks of guided build with check-ins.' },
      { title: 'Showcase + donate', detail: 'Demo night, and the funds reach the cause.' },
    ],
    accent: 'amber',
  },
  {
    slug: 'guidance-and-resources',
    title: 'Guidance & Resource Library',
    tagline: 'Free resources, plus 1:1 chats about what comes next.',
    duration: 'Always open',
    format: 'Online',
    ageGroup: 'All Ontario students',
    description:
      'Free note packs, study guides and past-paper walkthroughs — plus 1:1 chats on course selection, OUAC/OCAS and OSAP.',
    outcomes: [
      'Notes you don’t pay for',
      '1:1 pathway chats',
      'Walkthroughs that matter',
      'Help with OUAC, OCAS, OSAP',
    ],
    modules: [
      { title: 'Resource library', detail: 'Subject-tagged notes and study packs.' },
      { title: 'Guidance chats', detail: 'A 30-minute 1:1 with a guidance lead.' },
      { title: 'Pathway packs', detail: 'Guides for OUAC, OCAS, OSAP, OSSLT.' },
    ],
    accent: 'teal',
  },
];
