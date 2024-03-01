import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ cookies }) => {
	cookies.delete('access_token', {
		path: '/'
	});
	cookies.delete('access_token_secret', {
		path: '/'
	});

	throw redirect(302, '/');
};
