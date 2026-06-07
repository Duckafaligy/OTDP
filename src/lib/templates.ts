import { gmailComposeUrl } from './email';
import { site } from './site';

/** Subject + body for the one-click student sign-up email. */
export const studentSignupSubject = 'Student sign-up — OTDP';

export const studentSignupTemplate = `Hi OTDP team,

I'd like to sign up as a student.

Name: [Your full name]
Grade / year: [e.g. Grade 11, IB Year 1]
School: [Your school]
City: [City, ON]
Program (if any): [Public / IB / AP / SHSM / French Immersion / York Arts / Other]

Subjects I'd like help with:
[List subjects + a sentence on what you find hardest]

When I'm usually free:
[Days / times that work for you]

How I'd prefer to meet:
[Online / In person — GTA / Either]

Anything else we should know:
[Optional — accommodations, exam dates coming up, goals, etc.]

Thanks!
[Your name]
`;

/** Gmail web-compose URL pre-filled with the student sign-up template. */
export function studentSignupUrl() {
  return gmailComposeUrl(site.email, studentSignupSubject, studentSignupTemplate);
}
