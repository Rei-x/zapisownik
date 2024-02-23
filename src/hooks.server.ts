import type { Handle } from '@sveltejs/kit';
import { isHttpError } from '@sveltejs/kit';
import { createClient } from './api/usosClient';
import { createDb } from './db/client';

export const handle: Handle = async ({ event, resolve }) => {
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
			profile = await usos.get<{
				id: string;
				student_number: string;
				first_name: string;
				last_name: string;
			}>(
				'users/user?fields=id|student_number|first_name|last_name|sex|student_status|staff_status|email|photo_urls|homepage_url'
			);
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
