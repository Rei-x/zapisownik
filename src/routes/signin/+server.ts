import { fail, redirect } from '@sveltejs/kit';
import { getRequestToken } from '../../auth';
import type { RequestHandler } from './$types';

// Request Token URL: https://apps.usos.pwr.edu.pl/services/oauth/request_token
// Authorize URL: https://apps.usos.pwr.edu.pl/services/oauth/authorize
// Access Token URL: https://apps.usos.pwr.edu.pl/services/oauth/access_token
export const GET: RequestHandler = async ({ cookies }) => {
	const token = await getRequestToken();

	if (!token.token || !token.secret) {
		throw fail(500);
	}

	cookies.set('oauth_token', token.token, {
		path: '/',
		maxAge: 60 * 60 * 24 * 7,
		httpOnly: true
	});

	cookies.set('oauth_token_secret', token.secret, {
		path: '/',
		maxAge: 60 * 60 * 24 * 7,
		httpOnly: true
	});

	throw redirect(
		302,
		`https://apps.usos.pwr.edu.pl/services/oauth/authorize?oauth_token=${token.token}`
	);
};
