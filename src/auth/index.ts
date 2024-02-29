import crypto from 'node:crypto';

import OAuth from 'oauth-1.0a';
import { USOS_CONSUMER_KEY, USOS_CONSUMER_SECRET, ORIGIN } from '$env/static/private';
export const oauth = new OAuth({
	consumer: { key: USOS_CONSUMER_KEY, secret: USOS_CONSUMER_SECRET },
	signature_method: 'HMAC-SHA1',
	hash_function(base_string, key) {
		return crypto.createHmac('sha1', key).update(base_string).digest('base64');
	}
});

export const getAccessToken = async (
	oauth_token: string,
	oauth_verifier: string,
	secret: string
) => {
	const data = oauth.authorize(
		{
			url: 'https://apps.usos.pwr.edu.pl/services/oauth/access_token',
			method: 'POST',
			data: { oauth_token, oauth_verifier }
		},
		{
			key: oauth_token,
			secret
		}
	);

	const response = await fetch(
		`https://apps.usos.pwr.edu.pl/services/oauth/access_token?${new URLSearchParams(Object.entries(data))}
		`,
		{
			method: 'POST',
			headers: {
				Authorization: oauth.toHeader(data).Authorization
			}
		}
	);
	const text = await response.text();

	const params = new URLSearchParams(text);

	return {
		token: params.get('oauth_token'),
		secret: params.get('oauth_token_secret')
	};
};

const removeMultipleSlashesFromUrl = (url: string) => {
	return url.replace(/([^:]\/)\/+/g, '$1');
};

// Function to get request token
export async function getRequestToken() {
	const data = oauth.authorize({
		url: 'https://apps.usos.pwr.edu.pl/services/oauth/request_token',
		method: 'POST',
		data: {
			oauth_callback: removeMultipleSlashesFromUrl(`${ORIGIN}/callback`),
			scopes: 'studies|offline_access'
		}
	});

	const response = await fetch(
		`https://apps.usos.pwr.edu.pl/services/oauth/request_token?${new URLSearchParams(Object.entries(data))}`,
		{
			method: 'POST',
			headers: {
				Authorization: oauth.toHeader(data).Authorization
			}
		}
	);
	const params = new URLSearchParams(await response.text());

	return {
		token: params.get('oauth_token'),
		secret: params.get('oauth_token_secret')
	};
}
