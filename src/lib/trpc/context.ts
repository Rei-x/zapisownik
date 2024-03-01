import type { RequestEvent } from '@sveltejs/kit';
import type { inferAsyncReturnType } from '@trpc/server';
import { usosService } from '../../services/usos';
import { createClient } from '../../services/usos/usosClient';

export async function createContext(event: RequestEvent) {
	const tokens = {
		token: event.cookies.get('access_token'),
		secret: event.cookies.get('access_token_secret'),
		fetch: event.fetch
	};

	const isFailed = tokens.token === undefined || tokens.secret === undefined;

	return {
		client: isFailed ? null : usosService(createClient(tokens))
	};
}

export type Context = inferAsyncReturnType<typeof createContext>;
