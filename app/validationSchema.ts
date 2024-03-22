import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1, "Title must contain at least 1 character").max(255),
  description: z
    .string()
    .min(1, "Description must contain at least 1 character")
    .max(65535),
});

export const patchIssueSchema = z.object({
  title: z
    .string()
    .min(1, "Title must contain at least 1 character")
    .max(255)
    .optional(),
  description: z
    .string()
    .min(1, "Description must contain at least 1 character")
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "AssignedToUserId is required")
    .max(255)
    .optional()
    .nullable(),
});
