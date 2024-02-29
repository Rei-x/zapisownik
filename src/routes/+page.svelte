<script lang="ts">
	import type { PageData } from './$types';
	import Auth from '$lib/components/Auth.svelte';
	import { page } from '$app/stores';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import { Label } from '$lib/components/ui/label';
	import { trpc } from '$lib/trpc/client';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import DayPlan from '$lib/components/DayPlan.svelte';
	import { planStore } from './store';
	import { Frequency, LessonType } from '../services/usos/types';
	export let data: PageData;

	const registrations =
		data.cart?.reduce(
			(acc, course) => {
				if (!acc.find((c) => c.description.pl === course.description.pl)) {
					return [...acc, course];
				}

				return acc;
			},
			[] as typeof data.cart
		) ?? [];

	$: roundId = registrations
		.find((course) => course.id === $planStore.selectedRoundId)
		?.rounds?.at(0)?.id;

	$: courses = trpc($page).courses.createQuery(
		{ cartId: roundId ?? '' },
		{
			enabled: roundId !== undefined
		}
	);

	$: groups = trpc($page).getGroups.createQuery({ coursesIds: $planStore.coursesIds });
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Auth />
	<div class="container mx-auto flex">
		<div>
			<RadioGroup.Root
				value={$planStore.selectedRoundId}
				onValueChange={(v) => {
					$planStore.coursesIds = [];
					$planStore.selectedRoundId = v;
				}}
				class="gap-4"
			>
				{#each registrations as course}
					<div class="flex items-center space-x-2">
						<RadioGroup.Item value={course.id} id={course.id} />
						<Label class="cursor-pointer" for={course.id}>{course.description.pl}</Label>
					</div>
				{/each}
			</RadioGroup.Root>
		</div>
		<ul class="flex flex-col gap-4">
			{#if $courses.data}
				{#each $courses.data as course}
					<li class="flex items-center space-x-2">
						<Checkbox
							id={course.course.id}
							checked={$planStore.coursesIds.includes(course.course.id)}
							onCheckedChange={(isChecked) => {
								if (isChecked) {
									$planStore.coursesIds = [...$planStore.coursesIds, course.course.id];
								} else {
									$planStore.coursesIds = $planStore.coursesIds.filter(
										(id) => id !== course.course.id
									);
								}
							}}
							aria-labelledby={`${course.course.id}-terms-label`}
						/>
						<Label
							id={`${course.course.id}-terms-label`}
							for={course.course.id}
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							{course.course.name.pl} - kurs: {course.course.id}, term: {course.term_id}
						</Label>
					</li>
				{/each}
			{:else if $courses.isLoading}
				<p>Loading...</p>
			{/if}
		</ul>
	</div>
	<div class="mx-10 flex flex-col">
		{#if $groups.isLoading}
			<p>Loading...</p>
		{:else if $groups.error}
			<p>Error: {$groups.error.message}</p>
		{:else if $groups.data && $groups.data?.length === 0}
			<p>No groups found</p>
		{/if}
		{#if $groups.data && $groups.data?.length > 0}
			{#each ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'] as day}
				<DayPlan
					title={day}
					courses={$groups.data
						.filter((c) => day.toLowerCase().includes(c.day))
						.map((c) => ({
							code: c.courseId,
							day: c.day,
							frequency: c.frequency,
							duration: c.duration.hours * 60 + c.duration.minutes,
							lecturer: c.person,
							lectureType: c.type,
							groupNumber: c.groupNumber,
							name: c.course.name,
							selectionType: 'off',
							startHour: c.hourStartTime.hours,
							startMinute: c.hourStartTime.minutes,
							type:
								(c.frequency === Frequency.EVEN
									? 'TP | '
									: c.frequency === Frequency.ODD
										? 'TN | '
										: '') +
								(c.type === LessonType.LABORATORY ? 'L' : c.type === LessonType.LECTURE ? 'W' : 'C')
						}))}
				/>
			{/each}
		{/if}
	</div>
</section>
