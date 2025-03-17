import { pgTable } from "drizzle-orm/pg-core"

export const tasks = pgTable("tasks", (t) => ({
  id: t.serial().primaryKey(),
  name: t.text().notNull(),
  done: t.boolean().notNull().default(false),
  createdAt: t.timestamp().defaultNow(),
  updatedAt: t.timestamp().$onUpdate(() => new Date()),
}))
