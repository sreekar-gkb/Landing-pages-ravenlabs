// Testimonials come ONLY from proof-library.json. Unapproved non-placeholder entries throw at
// build time so invented proof can never ship.
import library from './proof-library.json';

export interface Testimonial {
  id: string; approved: boolean; placeholder?: boolean; quote: string;
  name: string; role: string; company: string; logo: string | null;
}

export function getTestimonials(ids: string[]): Testimonial[] {
  const all = library.testimonials as Testimonial[];
  return ids.map((id) => {
    const t = all.find((x) => x.id === id);
    if (!t) throw new Error(`Testimonial "${id}" is not in proof-library.json`);
    if (!t.approved && !t.placeholder) throw new Error(`Testimonial "${id}" is not approved`);
    return t;
  });
}
