// since there's no dynamic data here, we can prerender

import { usosService } from '../services/usos';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const usos = usosService(locals.client!);

	return {
		profile: locals.profile,
		cart: (await usos.getUserRegistrations()).filter((p) => p.description.pl.includes("IST"))
	};
}) satisfies PageServerLoad;

// Request Token URL: https://apps.usos.pwr.edu.pl/services/oauth/request_token
// Authorize URL: https://apps.usos.pwr.edu.pl/services/oauth/authorize
// Access Token URL: https://apps.usos.pwr.edu.pl/services/oauth/access_token

export const actions = {
	auth: async ({ request }) => {
		const form = await request.formData();

		const name = form.get('name');
		return {
			mario: name?.toString() + ' hello!'
		};
	}
} satisfies Actions;
