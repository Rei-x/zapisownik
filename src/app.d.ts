// See https://kit.svelte.dev/docs/types#app

import type { createClient } from './services/usos/usosClient';

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
		}
		interface PageData {
			profile?: {
				id: string;
				student_number: string;
				first_name: string;
				last_name: string;
			};
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
