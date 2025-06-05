import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/projects" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    technologies: z.array(z.string()),
    cover: image(),
    coverAlt: z.string(),
    demo: z.string().url().optional(),
    source: z.string().url().optional(),
    published: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
})

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    technologies: z.array(z.string()),
    cover: image(),
    coverAlt: z.string(),
    published: z.coerce.date(),
  }),
})

export const collections = { projects, blog };
