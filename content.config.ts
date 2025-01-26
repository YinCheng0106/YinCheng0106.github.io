import { Title } from '#components'
import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        published_at: z.string(),
        tags: z.array(z.string()),
      })
    })
  }
})
