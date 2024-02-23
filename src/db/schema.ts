import { sql } from 'drizzle-orm';
import { text, sqliteTable } from 'drizzle-orm/sqlite-core';
import { v4 as uuidv4 } from 'uuid';

const UUID = text('id')
	.primaryKey()
	.$defaultFn(() => uuidv4());

const defaultFields = {
	createdAt: text('createdAt').default(sql`CURRENT_TIMESTAMP`)
};

export const users = sqliteTable('plans', {
	id: UUID,
	...defaultFields
});
