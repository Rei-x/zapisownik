import type { Handle } from '@sveltejs/kit';
import { isHttpError } from '@sveltejs/kit';
import { createClient } from './api/usosClient';
import { createDb } from './db/client';
import { usosService } from './services/usos';
import { Cache } from 'file-system-cache';
import { createStaleWhileRevalidateCache } from 'stale-while-revalidate-cache';

const cache = new Cache({
	ttl: 120
});
const swr = createStaleWhileRevalidateCache({
	storage: {
		getItem(key) {
			return cache.get(key);
		},
		setItem(key, value) {
			cache.set(key, value as undefined);
		},
		removeItem(key) {
			cache.remove(key);
		}
	},
	minTimeToStale: 60000,
	maxTimeToLive: 600000,
	serialize: JSON.stringify,
	deserialize: JSON.parse
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
			console.time('swr');
			const response = await swr('profile', () => service.getProfile());
			console.timeEnd('swr');
			profile = response.value;
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
