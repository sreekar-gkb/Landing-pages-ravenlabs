import { z } from 'zod'

export const leadSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required').max(80),
  email: z.string().trim().email('Enter a valid work email').max(160),
  company: z.string().trim().min(1, 'Company is required').max(120),
  phone: z.string().trim().max(30).optional().or(z.literal('')),
  message: z.string().trim().max(1000).optional().or(z.literal('')),
  // honeypot — must stay empty
  website: z.string().max(0).optional().or(z.literal('')),
  campaign: z.string(),
  utm: z
    .object({
      utm_source: z.string().optional(),
      utm_medium: z.string().optional(),
      utm_campaign: z.string().optional(),
      utm_term: z.string().optional(),
      utm_content: z.string().optional(),
      gclid: z.string().optional(),
    })
    .partial()
    .optional(),
})

export type LeadInput = z.infer<typeof leadSchema>
