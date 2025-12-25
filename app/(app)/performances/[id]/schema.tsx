import { z } from "zod"

export const commentSchema = z.object({
    content: z
        .string()
        .min(1, "Комментарий не может быть пустым")
        .max(1000, "Слишком длинный комментарий"),
    rating: z
        .number()
        .min(1, "Минимальная оценка — 1")
        .max(5, "Максимальная оценка — 5"),
    performanceId: z.number().int().positive()
})

export type CommentFormValues = z.infer<typeof commentSchema>
