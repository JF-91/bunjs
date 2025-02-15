import { createId } from '@paralleldrive/cuid2'
import { pgTable, varchar, timestamp } from 'drizzle-orm/pg-core'

export const authorTable = pgTable('authors', {
    id: varchar('id', { length: 128 })
        .$defaultFn(() => createId())
        .primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    email: varchar('email', { length: 256 }).notNull().unique(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const table = {
    authorTable,
} as const;

export type Table = typeof table;