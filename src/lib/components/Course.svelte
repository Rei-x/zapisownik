<script lang="ts" context="module">
	export interface CourseData {
		code: string;
		type: string;
		name: string;
		day: string;
		frequency: Frequency;
		groupNumber: number;
		startHour: number;
		startMinute: number;
		duration: number;
		lecturer: string;
		lectureType: 'wyklad' | 'cwiczenia' | 'laboratorium' | 'projekt' | 'seminarium';
	}
</script>

<script lang="ts">
	import deepEqual from 'deep-equal';

	import { planStore } from '../../routes/store';
	import { Frequency } from '../../services/usos/types';
	import clsx from 'clsx';
	import { cn } from '$lib/utils';

	export let data: CourseData;

	function isOverlapping(course1: CourseData, course2: CourseData): boolean {
		if (course1.day !== course2.day) return false;

		if (
			course1.frequency !== course2.frequency &&
			!(
				((course1.frequency === Frequency.EVEN || course1.frequency === Frequency.ODD) &&
					course2.frequency === Frequency.EVERY) ||
				((course2.frequency === Frequency.EVEN || course2.frequency === Frequency.ODD) &&
					course1.frequency === Frequency.EVERY)
			)
		) {
			return false;
		}

		const endHour1 = course1.startHour + Math.floor(course1.duration / 60);
		const endMinute1 = course1.startMinute + (course1.duration % 60);
		const endHour2 = course2.startHour + Math.floor(course2.duration / 60);
		const endMinute2 = course2.startMinute + (course2.duration % 60);

		if (course1.startHour < endHour2 && endHour1 > course2.startHour) {
			if (course1.startMinute < endMinute2 && endMinute1 > course2.startMinute) {
				return true;
			}
		}

		return false;
	}

	let { startHour, startMinute, duration, lectureType, code, name, lecturer, type } = data;

	$: activeType = $planStore.selectedGroups.find((c) => deepEqual(c, data))
		? 'active'
		: $planStore.selectedGroups.find((c) => isOverlapping(data, c))
			? 'off'
			: '';

	$: startGrid = startHour * 12 - 7 * 12 - 5 + startMinute / 5;
	$: gridSize = duration / 5;
</script>

<button
	class={cn(
		'lesson relative flex flex-col justify-start rounded-lg border-2 border-transparent text-start align-top',
		{
			'opacity-40': activeType === 'off',
			'bg-red-200': lectureType === 'wyklad',
			'bg-green-200': lectureType === 'cwiczenia',
			'bg-blue-200': lectureType === 'laboratorium',
			'bg-yellow-200': lectureType === 'projekt',
			'bg-purple-200': lectureType === 'seminarium',
			'bg-red-400': lectureType === 'wyklad' && activeType === 'active',
			'bg-green-400': lectureType === 'cwiczenia' && activeType === 'active',
			'bg-blue-400': lectureType === 'laboratorium' && activeType === 'active',
			'bg-yellow-500': lectureType === 'projekt' && activeType === 'active',
			'bg-purple-500': lectureType === 'seminarium' && activeType === 'active'
		}
	)}
	style="grid-column: {startGrid} / {startGrid + gridSize};"
	on:click={() => {
		if (activeType === 'active') {
			$planStore.selectedGroups = $planStore.selectedGroups.filter(
				(group) => !deepEqual(group, data)
			);
		} else {
			$planStore.selectedGroups = $planStore.selectedGroups.filter(
				(group) => !isOverlapping(data, group)
			);
			$planStore.selectedGroups = $planStore.selectedGroups = [...$planStore.selectedGroups, data];
		}
	}}
>
	<div class="lesson-content p-2">
		<div class="flex justify-between">
			<p class="font-semibold">{type}</p>
		</div>
		<p class="py-2 text-sm font-light">{name}</p>
		<p
			class={cn('text-sm font-light', {
				'text-red-800': lectureType === 'wyklad',
				'text-green-800': lectureType === 'cwiczenia',
				'text-blue-800': lectureType === 'laboratorium',
				'text-yellow-800': lectureType === 'projekt',
				'text-purple-800': lectureType === 'seminarium'
			})}
		>
			{lecturer}
		</p>
	</div>
</button>
