// See https://kit.svelte.dev/docs/types#app

import type { createClient } from './api/usosClient';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			client?: ReturnType<typeof createClient>;
			profile?: {
				id: string;
				student_number: string;
				first_name: string;
				last_name: string;
			};

			db: ReturnType<typeof import('./db/client').createDb>;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
