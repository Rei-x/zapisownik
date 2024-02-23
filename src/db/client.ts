import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { LIBSQL_AUTH, LIBSQL_URL } from '$env/static/private';
import * as schema from './schema';

export const createDb = (fetch: typeof window.fetch) => {
	const client = createClient({ url: LIBSQL_URL, authToken: LIBSQL_AUTH, fetch });
	return drizzle(client, { schema });
};
