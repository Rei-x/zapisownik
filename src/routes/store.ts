import { persisted } from '$lib/utils/persisted';
import { type CourseData } from '$lib/components/Course.svelte';

interface Course {
	id: string;
	name: string;
}
export const planStore = persisted('plan', {
	selectedRoundId: '',
	courses: [] as Course[],
	selectedGroups: [] as CourseData[]
});
