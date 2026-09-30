// Contact and legal details come ONLY from company-facts.json (copied from the skill's assets).
// null values are omitted from the page, never replaced with invented values.
import facts from './company-facts.json';
export const company = facts as {
  company: string; website: string; phone_display: string; phone_tel: string; email: string;
  abn: string | null; registered_address: string | null; offices: string[];
  partner_status: Record<string, string | null>;
  socials: Record<'linkedin' | 'instagram' | 'youtube' | 'facebook' | 'x', string>;
  privacy_url: string; terms_url: string; copyright: string;
};
