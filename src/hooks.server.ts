import type { Handle } from '@sveltejs/kit';
import { isHttpError } from '@sveltejs/kit';
import { createClient } from './api/usosClient';
import { createDb } from './db/client';
import { usosService } from './services/usos';
import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { createTRPCHandle } from 'trpc-sveltekit';
import { sequence } from '@sveltejs/kit/hooks';

const usosAuth: Handle = async ({ event, resolve }) => {
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
			profile = await usosService(usos).getProfile();

		
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

	const response = await resolve(event);

	return response;
};

const trpc: Handle = createTRPCHandle({ router, createContext });

export const handle = sequence(usosAuth, trpc);
