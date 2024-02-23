import { fail, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getAccessToken } from '../../auth';

export const GET: RequestHandler = async ({ url, cookies }) => {
	const oauth_token = url.searchParams.get('oauth_token');
	const oauth_verifier = url.searchParams.get('oauth_verifier');

	if (!oauth_token || !oauth_verifier) {
		throw fail(400);
	}

	const secret = cookies.get('oauth_token_secret');

	if (!secret) {
		throw fail(401);
	}

	cookies.delete('oauth_token', {
		path: '/'
	});
	cookies.delete('oauth_token_secret', {
		path: '/'
	});

	const access_token = await getAccessToken(oauth_token, oauth_verifier, secret);

	if (!access_token.token || !access_token.secret) {
		throw fail(401);
	}

	cookies.set('access_token', access_token.token, {
		path: '/',
		maxAge: 60 * 60 * 24 * 7,
		httpOnly: true
	});
	cookies.set('access_token_secret', access_token.secret, {
		path: '/',
		maxAge: 60 * 60 * 24 * 7,
		httpOnly: true
	});
	throw redirect(302, '/');
};
