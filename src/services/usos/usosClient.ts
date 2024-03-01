import { error, fail } from '@sveltejs/kit';
import { oauth } from '../../auth';

const baseUrl = 'https://apps.usos.pwr.edu.pl/services';

export const createClient = ({
	token,
	secret,
	fetch
}: {
	token?: string;
	secret?: string;
	fetch: typeof window.fetch;
}) => {
	if (!token || !secret) {
		throw new Error('No token or secret provided');
	}
	return {
		async get<R = unknown>(endpoint: string): Promise<R> {
			const url = `${baseUrl}/${endpoint}`;

			const data = oauth.authorize(
				{
					url,
					method: 'GET'
				},
				{
					key: token,
					secret
				}
			);
			const response = await fetch(url, {
				method: 'GET',
				headers: {
					Authorization: oauth.toHeader(data).Authorization
				}
			});

			if (response.status === 401) {
				throw error(401, "You're not authorized to access this resource");
			}

			if (!response.ok) {
				console.log('Not ok', await response.text());
				throw error(500);
			}

			return response.json();
		},
		async post<R = unknown>(endpoint: string, body: unknown): Promise<R> {
			const url = `${baseUrl}/${endpoint}`;

			const data = oauth.authorize(
				{
					url,
					method: 'POST',
					data: body,
					includeBodyHash: true
				},
				{
					key: token,
					secret
				}
			);
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					Authorization: oauth.toHeader(data).Authorization
				},
				body: JSON.stringify(body)
			});

			if (!response.ok) {
				throw fail(response.status);
			}

			return response.json();
		}
	};
};

export type UsosClient = ReturnType<typeof createClient>;
