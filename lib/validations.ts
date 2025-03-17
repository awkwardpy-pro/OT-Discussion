import * as z from "zod"

export const QuestionsSchema = z.object({
  title: z.string().min(5).max(130),
  explanation: z.string().min(0).max(300),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
})

export const AnswerSchema = z.object({
  answer: z.string().min(10).max(100)
})

export const ProfileSchema = z.object({
  name: z.string().min(5).max(40),
  username: z.string().min(5).max(15),
  bio: z.string().min(10).max(100),
  portfolioWebsite: z.string().url(),
  location: z.string().min(2).max(15),
})
