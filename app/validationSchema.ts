import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1, "Title must contain at least 1 character").max(255),
  description: z
    .string()
    .min(1, "Description must contain at least 1 character"),
});
