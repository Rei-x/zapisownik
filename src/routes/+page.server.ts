import { usosService } from '../services/usos';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	return {
		profile: locals.profile,
		cart: locals.client ? await usosService(locals.client).getUserRegistrations() : null
	};
}) satisfies PageServerLoad;
