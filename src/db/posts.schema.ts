import { createId } from '@paralleldrive/cuid2'
import { pgTable, varchar, timestamp } from 'drizzle-orm/pg-core'

export const postTable = pgTable('posts', {
    id: varchar('id', { length: 128 })
        .$defaultFn(() => createId())
        .primaryKey(),
    title: varchar('title', { length: 256 }).notNull(),
    slug: varchar('slug', { length: 256 }).notNull(),
    body: varchar('body', { length: 1000 }).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const table = {
    postTable,
} as const;

export type Table = typeof table;