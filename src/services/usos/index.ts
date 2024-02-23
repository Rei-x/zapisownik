import type { UsosClient } from '../../api/usosClient';
import type { GetCoursesCart } from './getCoursesCart';
import type { GetProfile } from './getProfile';

type AutoDiscovered = TypeholeRootWrapper[];
interface TypeholeRootWrapper {
	id: string;
	description: Description;
	message: Description;
	type: string;
	status: string;
	is_linkage_required: boolean;
	www_instance: string;
	faculty: Faculty;
	rounds?: Round[];
	related_courses?: Relatedcourse[];
}
interface Relatedcourse {
	course_id: string;
	term_id: string;
	status: string;
	limits: null;
}
interface Round {
	id: string;
	name: Description;
	status: string;
	registration_mode: string;
	start_date: string;
	end_date: string;
}
interface Faculty {
	id: string;
	name: Description;
}
interface Description {
	pl: string;
	en: string;
}

export const usosService = (usosClient: UsosClient) => {
	return {
		getProfile: async () => {
			return await usosClient.get<GetProfile>(
				'users/user?fields=id|student_number|first_name|last_name|sex|student_status|staff_status|email|photo_urls|homepage_url'
			);
		},
		getCoursesCarts: async () => {
			const data = await usosClient.get<GetCoursesCart>('registrations/courses_cart');

			return data;
		},
		getUserRegistrations: async () => {
			const data: AutoDiscovered = await usosClient.get(
				'registrations/user_registrations?fields=id|description|message|type|status|is_linkage_required|www_instance|faculty|rounds|related_courses'
			);

			return data;
		}
	};
};
