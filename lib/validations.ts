import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export const auditFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().min(1),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type AuditFormData = z.infer<typeof auditFormSchema>;
