import type { Handle } from '@sveltejs/kit';
import { isHttpError } from '@sveltejs/kit';
import { createClient } from './api/usosClient';
import { createDb } from './db/client';
import { LRUCache } from 'lru-cache';
import { usosService } from './services/usos';
import type { GetProfile } from './services/usos/getProfile';

const cache = new LRUCache<string, GetProfile>({
	max: 1000,
	ttl: 10 * 1000
});

export const handle: Handle = async ({ event, resolve }) => {
	console.time('handle');
	event.locals.db = createDb(event.fetch);

	const tokens = {
		token: event.cookies.get('access_token'),
		secret: event.cookies.get('access_token_secret'),
		fetch: event.fetch
	};
	let isFailed = tokens.token === undefined || tokens.secret === undefined;

	let usos;
	let profile;

	if (!isFailed) {
		try {
			usos = createClient(tokens);

			const service = usosService(usos);

			if (tokens.token && cache.has(tokens.token)) {
				console.log('CACHE HIT');
				profile = cache.get(tokens.token);
			} else if (tokens.token) {
				console.log('CACHE MISS');
				profile = await service.getProfile();

				cache.set(tokens.token, profile);
			}
		} catch (e) {
			if (isHttpError(e)) {
				isFailed = true;
			}
		}
	}

	if (!isFailed) {
		event.locals.client = usos;
		event.locals.profile = profile;
	} else {
		event.cookies.delete('access_token', {
			path: '/'
		});
		event.cookies.delete('access_token_secret', {
			path: '/'
		});
	}
	console.timeEnd('handle');

	const response = await resolve(event);

	return response;
};
