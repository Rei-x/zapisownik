import { persisted } from '$lib/utils/persisted';

export const planStore = persisted('plan', {
	selectedRoundId: '',
	coursesIds: [] as string[]
});
