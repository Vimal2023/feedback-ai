import {z} from "zod"

export const messageSchema = z.object({
    content: z
    .string()
    .min(10, {message: 'Content mustbe at least of 10 characters'})
    .max(300, {message: 'Content must be at most 300 characters'})

})