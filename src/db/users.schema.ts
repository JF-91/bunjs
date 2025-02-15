import { pgTable, varchar, timestamp } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'

export const userTable = pgTable('users', {
    id: varchar('id', { length: 128 })
        .$defaultFn(() => createId())
        .primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    email: varchar('email', { length: 256 }).notNull().unique(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});