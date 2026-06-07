export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  readingTime: string;
  tags: string[];
  cover: string;
  body: string;
};

export const posts: Post[] = [
  {
    slug: 'why-we-started-otdp',
    title: 'Why we started OTDP',
    excerpt:
      'A letter from the founding team. Why a free, student-led tutoring program — and why now.',
    author: 'OTDP Founding Team',
    authorRole: 'Founders',
    date: '2026-01-12',
    readingTime: '4 min read',
    tags: ['Origin', 'Mission'],
    cover: 'plum',
    body: `
We kept noticing the same thing.

A 17-year-old in Scarborough who could grasp linear algebra faster than half her teachers — but who didn’t know there were free office hours she could go to. A newcomer family in Hamilton trying to figure out, for the second time in a year, what the difference between IB, AP and SHSM actually is. A first-year at a Toronto campus who had every credential and somehow still felt invisible at exam time.

Paid tutoring exists for the families who can afford it. It is not, however, a human right that depends on a credit card.

OTDP was built to change that.

We are a student-led non-profit providing **free flexible tutoring, guidance and academic resources — online or in person — for every student in Ontario.** We do not believe a young person’s academic ceiling should be set by what their family can pay an hour. We do believe that if a 16-year-old asks "when am I ever going to use this in real life?", a real program should be able to give them a real answer. (Ours does — through our end-of-semester project, where students apply what they have learned to a real-world issue and donate any funds raised to organisations addressing it.)

This is our 2026 founding year. The Constitution is signed, the staff is forming, and the first cohorts are being scheduled. If you are a student, sign up. If you can tutor, mentor, or help us tell the story, apply. If you run a school, a community group or a youth organisation, partner with us.

There is no reason an Ontario student should have to choose between their next exam and their family’s budget. Help us make sure they never have to.

— The OTDP Founding Team
    `,
  },
  {
    slug: 'how-our-tutoring-actually-works',
    title: 'How our tutoring actually works',
    excerpt:
      'A walk-through of an OTDP session — from booking, to the multi-perspective method, to the notes you keep after.',
    author: 'OTDP Programs',
    authorRole: 'Tutoring Lead',
    date: '2026-02-04',
    readingTime: '5 min read',
    tags: ['Tutoring', 'How it works'],
    cover: 'teal',
    body: `
We get this question a lot, so here’s a candid walk-through.

### Step 1 — You book a slot

You pick a subject, a time, and online or in-person (in-person is GTA only for now). We match you with a tutor inside 48 hours — usually faster.

### Step 2 — No prep test, no awkward placement

Most paid programs make you do a diagnostic test before they even let you in. We start the actual session asking what you already know, what specifically is confusing you, and what your next assessment is. That is the diagnostic.

### Step 3 — Multiple perspectives, on purpose

Our tutoring deliberately mixes visuals, concept grasping, and worked examples. The reason is simple: one explanation never lands for everyone. If a graph doesn’t click, a derivation might. If a derivation doesn’t click, the real-world analogue might. We don’t pick one style and stick to it — we cycle through until it lands.

### Step 4 — You keep the materials

Every session ends with a short written summary and the working notes from the whiteboard or doc. You don’t pay for these — they are yours, forever.

### Step 5 — We track quietly

After every session your tutor writes one line into our internal log: what you covered, what stuck, what to revisit. If a pattern shows up across several weeks, the program lead reaches out to suggest a tweak. You will never get sales-pitched; we just want the next session to work better than the last.

That’s it. No subscriptions, no contracts, no upsells. Just the support a student should have always been able to get.
    `,
  },
  {
    slug: 'when-am-i-ever-going-to-use-this',
    title: 'On "when am I ever going to use this in real life?"',
    excerpt:
      'The question every student has asked since the dawn of high school. Our end-of-semester project is our attempt at a real answer.',
    author: 'OTDP Programs',
    authorRole: 'Programs Director',
    date: '2026-03-09',
    readingTime: '6 min read',
    tags: ['Programs', 'Mission'],
    cover: 'amber',
    body: `
Every student has said it. Most of us have meant it.

“When am I ever going to use this in real life?”

For decades the standard response has been some version of *trust me, you will.* That answer is bad. It is bad because it is not actually an answer — it is a plea for compliance dressed up as one. It does not respect the student asking the question.

At OTDP, our answer is the **end-of-semester project**.

Here is how it works. Every OTDP student has the option, at the end of a term of tutoring, to build a small project that connects the subject they have been studying to a real-world issue they care about. Statistics gets pointed at health-equity data. Chemistry gets pointed at clean-water pilots. Writing gets pointed at a local advocacy campaign. French gets pointed at a translation project for a settlement org.

Any funds raised through the project are donated to organisations addressing the issue the student picked. The student keeps the portfolio piece, the cause gets the support, and the question — *when am I ever going to use this in real life?* — gets a literal, tangible, dated answer.

This isn’t a gimmick. It is the only honest reply we have ever heard to that question. We think every student deserves it.
    `,
  },
  {
    slug: 'tutors-from-ib-ap-shsm-fi-and-york-arts',
    title: 'IB, AP, SHSM, French Immersion, York Arts — we have lived it',
    excerpt:
      'Why our staff coming from every kind of Ontario program is a feature, not an accident.',
    author: 'OTDP Programs',
    authorRole: 'Pathway Specialists',
    date: '2026-04-02',
    readingTime: '5 min read',
    tags: ['Pathways', 'Tutoring'],
    cover: 'plum',
    body: `
If you have ever tried to explain an IB Internal Assessment to someone who has not done one, you know how exhausting it is.

The same is true for AP scoring rubrics. The SHSM red-seal process. The DELF speaking exam. The York Arts portfolio. Ontario’s academic landscape is rich — and the cost of richness is that no single tutor can credibly know all of it.

OTDP’s solution is to staff *across* it. Our roster includes current and recent students from:

- **IB (PYP / MYP / DP)** — we know the IAs, the EE, the ToK essay, the predicted-grade pressure.
- **AP** — course-by-course review, paced to the May exam timeline.
- **SHSM** — the sector packages, the reach-aheads, the co-op portfolio.
- **French Immersion** — DELF prep, French academic writing, oral practice.
- **York Arts Program** — studio-day balancing, audition prep, portfolio reviews.
- **Mainstream Ontario high schools** — the workhorse curriculum, plus OSSLT and EQAO.

If a student tells us they’re in IB, we don’t reach for a generic algebra tutor — we reach for a tutor who *has done* the IB Math AA SL exam. Specificity matters. It is the difference between feeling tutored and feeling met.

If you are in a specialised program and you have written off general tutoring because nobody seems to know your context — please write us anyway. It is very possible we already do.
    `,
  },
  {
    slug: 'apply-as-a-tutor-what-to-expect',
    title: 'Applying as a tutor — what to expect',
    excerpt:
      'A short guide for prospective tutors. What the application looks like, what onboarding involves, and what we actually ask of you.',
    author: 'OTDP HR',
    authorRole: 'HR Director',
    date: '2026-04-25',
    readingTime: '5 min read',
    tags: ['Volunteer', 'Tutors'],
    cover: 'teal',
    body: `
We get a lot of questions from prospective tutors. Here is the honest version of what to expect when you apply.

### The application

A short form: who you are, what you can tutor, when you’re available, and a couple of paragraphs on why this matters to you. We read every one.

### The screen

If we move forward, we will set up a 20-minute conversation. We ask about your subject, how you would explain a tricky topic, and what your boundaries are. We are not looking for a polished pitch — we are looking for a tutor who can meet a real student where they actually are.

### Onboarding

Once you join, we run a short onboarding covering OTDP’s teaching method, our session-notes system, our safeguarding policy, and the platforms we use. We provide curriculum scaffolds for every subject we run so you are never starting from scratch.

### What we actually ask of you

A few hours a week, consistently. Showing up on time. A short note after every session so we can track progress. Telling us early if you can’t make a session. Being kind.

That is it. We do not ask for unpaid hustle, we do not ask you to recruit your friends, and we do not run a “growth ladder” you have to climb. The role is to tutor. The reward is the student gets the help.
    `,
  },
  {
    slug: 'the-2026-constitution-in-plain-english',
    title: 'Our 2026 Constitution, in plain English',
    excerpt:
      'A founding non-profit document is usually unreadable. Ours doesn’t have to be. Here is what is actually in it, in language a 15-year-old can use.',
    author: 'OTDP Executive',
    authorRole: 'Co-Chair',
    date: '2026-01-28',
    readingTime: '7 min read',
    tags: ['Governance', 'Constitution'],
    cover: 'plum',
    body: `
The OTDP Constitution is the document we use to settle disagreements when memory fails us. It runs 14 pages. Almost none of it should be a surprise — but we owe everyone a plain-English version so the people we serve are not the last to know how their organisation works.

### What we exist to do

The Constitution opens with our mission: **to provide free, flexible tutoring, guidance and academic resources, online or in person, for students across Ontario.** That is the only line that requires a 90% Board vote to amend. Everything else is policy and can be adjusted by simpler majorities.

### How we are governed

A Board of Directors of five-to-nine members holds long-term responsibility. Day-to-day operations are run by an Executive, which is accountable to the Board. The Executive is split into portfolios — Programs, Partnerships, Communications, Operations, HR, Finance. Each portfolio has a lead.

### How decisions get made

Three layers, on purpose. Programmatic decisions sit with the program leads. Policy and resource-allocation decisions sit with the Executive. Identity-level decisions (mission, name, charter) sit with the Board. We default to the lowest layer that can responsibly resolve a question.

### Money

OTDP does not charge participants. Ever. We are funded by individual donors, organisational partners and grants. The Constitution requires that financials are reviewed quarterly by the Board and that an annual summary is published to the public — including total raised, total spent, and broad category breakdowns.

### Conflict and complaints

If you have an issue with an executive, tutor or management member, write the relevant management email and we will route it. Anything involving one of those three roles is handled by the HR Director. Anything the HR Director cannot resolve goes to the Board. Retaliation against people who raise issues in good faith is not allowed and is itself a Board-level matter.

### Safeguarding

We work with young people. The Constitution requires every staff and tutor to complete an onboarding that includes our safeguarding policy, and to acknowledge those expectations in writing. Vulnerable-sector checks are required for in-person facilitators (OTDP subsidises the cost).

### Amendments

Any non-mission change requires a 60% Executive vote followed by a 60% Board vote. The mission requires 90% of the Board. Amendments are logged publicly.

That’s the bones of it. The full PDF is available on request — write to otdp.org@gmail.com if you would like a copy.
    `,
  },
  {
    slug: 'what-our-demo-nights-actually-look-like',
    title: 'What our demo nights actually look like',
    excerpt:
      'Demo night isn’t a fancy showcase. It’s the small, slightly chaotic, quietly transformative night that turns a cohort into a community.',
    author: 'OTDP Programs',
    authorRole: 'Programs Director',
    date: '2026-03-22',
    readingTime: '5 min read',
    tags: ['Programs', 'Community'],
    cover: 'amber',
    body: `
We almost named it something fancier. "Showcase". "Capstone evening". "Spring summit". None of those stuck. We call it **demo night** because that is what it is — and because the word reminds everyone, including us, not to overproduce it.

Here is what a demo night actually looks like.

### Doors at 6, food at 6:15

We have learned that if you tell teenagers to be somewhere at 6, half will arrive at 6:25. So we put food out at 6:15. People show up for the food. The room is warm by 6:20.

### Five-minute presentations, hard cap

Every student presenter gets exactly five minutes — and one of our facilitators stands at the back of the room with a polite-but-firm card at 4:45. Five-minute presentations are a feature, not a constraint. They force clarity, they keep the room engaged, and they let us fit ten presenters in under an hour.

### Mentors and partners on the floor

We do not seat partners in a VIP section. They roam. They ask questions during the small-group time after presentations. They write notes on cards we hand back to students at the end of the night. The note is often the part students remember the longest.

### The board

In the corner there is a foam board with a question stencilled on it: *"What did you build, and who is better off because of it?"* Every presenter, at the end of their five minutes, sticks a sentence-long answer on the board. By the end of the night the board is covered. We photograph it. We send the photo to every participant the next morning.

### The donation moment

If a student ran an end-of-semester project with a fundraising component, we announce the total at the end of the night and the partner org receives it the following week. We let the students do the announcement themselves, not the executive. It matters whose voice carries it.

### Cleanup is part of the program

Everyone helps clean up. Students, mentors, executives, the keynote, the people who showed up out of curiosity. The five minutes of co-cleanup is the social glue of the night — and it teaches a small, important lesson about what a community actually is.

That’s it. No swag bags, no fog machine, no influencer recap. Demo night is small on purpose. The bigness lives in what it does next — the relationships that started in that room and kept going for the next two years.
    `,
  },
  {
    slug: 'why-we-read-every-application',
    title: 'Why we read every application personally',
    excerpt:
      'We have heard the case for automated screens. We are not going to use them. Here is why.',
    author: 'OTDP HR',
    authorRole: 'HR Director',
    date: '2026-05-04',
    readingTime: '4 min read',
    tags: ['Hiring', 'Policy'],
    cover: 'teal',
    body: `
We get the question every few weeks: *aren't you worried about not scaling? wouldn't an automated screen save you time?*

Yes, it would. We are not going to use one. Here is the reasoning.

### Most application screens are filtering out the wrong people

Automated screens reward the candidates who have learned how to write like the screen wants them to write. That is overwhelmingly a function of access — to college essay coaches, to corporate internships, to networks that decode the genre. Filtering by that genre filters out exactly the candidates OTDP exists to put on the field.

### Our application is short on purpose

The form asks four questions and takes most people 10–15 minutes. Reading 50 of those takes about three focused hours. We do that, every cycle, because three hours is the right price to pay for the next year of programming.

### Reading reveals signal a screen can’t

The most consistent hire-yes signal we’ve found is the same one every veteran hiring manager talks about: a sentence in the application that wasn’t in any template. That sentence almost always reveals something a screen would have flagged as off-topic.

### We owe applicants a reply

A real human reads it. A real human replies. We do not use auto-rejections. If we cannot offer you a role, you get a short note explaining what we’re going to do instead — and, where appropriate, where else might be a fit. Almost no one does this. It costs us less than it sounds like, and it is the right thing.

### A word to applicants

Write the form like you. Not like a chatbot, not like a college essay, not like you’re trying to win. Tell us why this role and what you’d actually do in it. If you’re uncertain whether you fit, write us anyway — under-applying is the single most common mistake we see.

The Constitution requires that this policy can only be changed by a Board vote. We made it that hard to change because it is the thing that keeps OTDP from accidentally becoming something we didn’t mean to be.
    `,
  },
  {
    slug: 'from-a-student-otdp-in-my-final-ib-year',
    title: 'From a student: OTDP in my final IB year',
    excerpt:
      'A second-person letter from a current OTDP student. The honest version of what tutoring with us looked like in the run-up to the May exams.',
    author: 'Aiyana R.',
    authorRole: 'OTDP Student · IB DP2',
    date: '2026-05-18',
    readingTime: '6 min read',
    tags: ['Student perspective', 'IB'],
    cover: 'plum',
    body: `
I wrote this letter to you — yes, you, reading this — because I would have wanted to read it eight months ago.

### August

I signed up to OTDP because a friend in my school’s IB cohort messaged the group chat. I had been quietly burned by a paid program the year before and was sceptical. The form was short. I filled it on the bus. I almost didn’t hit send.

A tutor named Mateo emailed me back within four days. He’s an IB grad doing his undergrad in math at Waterloo. We did our first session on a Thursday in late August on a video call. He didn’t put me through a placement test. He asked which IA was making me lose sleep first. (Math AA SL. The IA.)

### September → December

We met every other Thursday. The sessions had the same scaffold every time, which I rolled my eyes at for the first two and then quietly relied on for the next ten. Each session: a five-minute "what changed since last time" check-in, twenty minutes on the most-pressing-right-now topic, ten minutes on a deliberately-not-pressing topic to keep momentum, a five-minute "what are we taking from this" wrap-up.

By the end of the semester my predicted grade had moved. Not by magic — by repetition.

### January

This is where it stopped being just tutoring. I had been planning my end-of-semester project as a math-y thing about voter turnout in Ontario. I'd written it off as "too political" for a school project. Mateo, with a straight face, said *that's exactly why you should do it for OTDP.*

I built a project visualising voter-turnout-by-age across the last three Ontario provincial elections. I presented it at demo night in early February. The funds I raised went to an Ontario civic-engagement non-profit. The presentation is the artefact I’m proudest of from my high-school career. It is the thing I will probably talk about in the first three interviews I ever do.

### March → May

Exam intensive season. OTDP runs late-night office hours in the two weeks before the May exams. I went to four of them. They are zoom rooms with maybe 15 students and 3 tutors. People walk in, ask the question they got stuck on, get unstuck, leave. The whole thing has the energy of a study hall, which is exactly what I needed at 10:47pm on a Sunday when I was about to spiral.

I sat my Math AA SL exam. I won't post the grade here — but the version of me from August would have written it differently than the version of me from May.

### What I would tell you

If you are reading this and wondering whether to sign up: do it. Fill the form on a bus. Hit send before you can talk yourself out of it.

It costs nothing. The worst outcome is a few hours with a tutor who turns out not to be your fit, in which case you say so and we find you a different one. The best outcome is the thing I just described.

Tell them Aiyana sent you.
    `,
  },
  {
    slug: 'how-to-talk-to-otdp-if-something-isnt-working',
    title: 'How to talk to OTDP if something isn’t working',
    excerpt:
      'Our escalation path, written plainly. Who to email, when, and what to expect back.',
    author: 'OTDP HR',
    authorRole: 'HR Director',
    date: '2026-05-19',
    readingTime: '3 min read',
    tags: ['Policy', 'Safeguarding'],
    cover: 'amber',
    body: `
We never want a student, parent or staff member to be stuck wondering who to talk to. Here is the path, written plainly.

### Day-to-day issues

For most things — scheduling, subject changes, "this tutor isn’t a fit for me", "I need a different time" — write to the relevant **executive, tutor, or management** lead at their staff work email or the management-sector email. They are empowered to act.

### Issues involving the top three roles

If the issue involves an executive, tutor or member of management directly, write to the **HR Director**. The HR Director handles those independently of the people involved.

### Issues the HR Director cannot resolve

If the HR Director cannot resolve it, the matter is escalated to the **Board of Directors**. The BOD is independent of day-to-day operations.

### What you can expect back

A human reply within a few business days, an honest assessment of what we can and cannot do, and — when we get it wrong — an actual apology. We are a young organisation. We will make mistakes. We will own them.

If you don’t know where to start, write **otdp.org@gmail.com** and we will route it correctly.
    `,
  },
];
