import { persisted } from '$lib/utils/persisted';
import { type CourseData } from '$lib/components/Course.svelte';
export const planStore = persisted('plan', {
	selectedRoundId: '',
	coursesIds: [] as string[],
	selectedGroups: [] as CourseData[]
});
