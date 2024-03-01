<script lang="ts">
	import type { PageData } from './$types';
	import Auth from '$lib/components/Auth.svelte';
	import { page } from '$app/stores';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import { Label } from '$lib/components/ui/label';
	import { trpc } from '$lib/trpc/client';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import DayPlan from '$lib/components/DayPlan.svelte';
	import { Button } from '$lib/components/ui/button';
	import { planStore } from './store';

	import { Trash } from 'lucide-svelte';
	import { Frequency, LessonType } from '../services/usos/types';
	import Badge from '$lib/components/ui/badge/badge.svelte';
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

	$: groups = trpc($page).getGroups.createQuery({
		coursesIds: $planStore.courses.map((c) => c.id)
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="h-full">
	<Auth />
	<div class="mx-2 mt-4 flex w-auto flex-col gap-8 md:mx-12 md:h-[600px] md:flex-row">
		<div>
			<h1 class="mb-4 text-2xl font-bold">Tury rejestracji</h1>
			<RadioGroup.Root
				value={$planStore.selectedRoundId}
				onValueChange={(v) => {
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
		<div>
			<h2 class="mb-4 text-2xl font-bold md:mx-4">Przedmioty</h2>
			<div class="pb-2 md:px-4">
				<Checkbox
					id="selectAll"
					checked={$courses.data?.every((course) =>
						$planStore.courses.some((c) => c.id === course.course.id)
					)}
					onCheckedChange={(isChecked) => {
						if (isChecked) {
							$planStore.courses = [
								...$planStore.courses,
								...($courses.data?.map((c) => ({
									id: c.course.id,
									name: c.course.name.pl
								})) ?? [])
							].filter((c, i, a) => a.findIndex((cc) => cc.id === c.id) === i);
						} else {
							$planStore.courses = $planStore.courses.filter((c) => {
								return !($courses.data?.some((course) => course.course.id === c.id) ?? false);
							});
						}
					}}
				/>
				<Label
					for="selectAll"
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Zaznacz wszystkie
				</Label>
			</div>
			<ul
				class="flex max-h-[400px] flex-col gap-4 overflow-y-auto rounded-lg py-4 shadow-sm md:w-96 md:p-4"
			>
				{#if $courses.data}
					{#each $courses.data as course}
						<li class="flex items-center space-x-2">
							<Checkbox
								id={course.course.id}
								checked={$planStore.courses.some((c) => c.id === course.course.id)}
								onCheckedChange={(isChecked) => {
									if (isChecked) {
										$planStore.courses = [
											...$planStore.courses,
											{ id: course.course.id, name: course.course.name.pl }
										];
									} else {
										$planStore.courses = $planStore.courses.filter(
											(c) => c.id !== course.course.id
										);
									}
								}}
								aria-labelledby={`${course.course.id}-terms-label`}
							/>
							<Label
								id={`${course.course.id}-terms-label`}
								for={course.course.id}
								class="flex w-full justify-between text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								<div>
									{course.course.name.pl}
								</div>
								<Badge variant="secondary"
									>{course.course.id.endsWith('G')
										? 'W + Ć'
										: course.course.id.endsWith('L')
											? 'L'
											: course.course.id.endsWith('W')
												? 'W'
												: course.course.id.endsWith('C')
													? 'Ć'
													: course.course.id}</Badge
								>
							</Label>
						</li>
					{/each}
				{:else if $courses.isLoading}
					<p>Ładowanie...</p>
				{/if}
			</ul>
		</div>
		<div>
			<h2 class="mb-4 text-2xl font-bold md:mx-4">Wybrane</h2>
			<Button
				class="mb-2 md:mx-4"
				variant="outline"
				on:click={() => {
					$planStore.courses = [];
				}}><Trash class="mr-2 h-4 w-4" />Usuń wszystkie</Button
			>
			<ul
				class="flex h-[500px] flex-col gap-4 overflow-y-auto rounded-lg py-4 shadow-sm md:w-96 md:p-4"
			>
				{#if $planStore.courses.length > 0}
					{#each $planStore.courses as course}
						<li class="flex items-center space-x-2">
							<Button
								variant="outline"
								size="icon"
								on:click={() => {
									$planStore.courses = $planStore.courses.filter((c) => c.id !== course.id);
								}}
							>
								<Trash class="h-4 w-4" />
							</Button>
							<Label
								id={`${course.id}-terms-label`}
								for={course.id}
								class="flex w-full justify-between text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								<div>
									{course.name}
								</div>
								<Badge variant="secondary"
									>{course.id.endsWith('G')
										? 'W + Ć'
										: course.id.endsWith('L')
											? 'L'
											: course.id.endsWith('W')
												? 'W'
												: course.id.endsWith('C')
													? 'Ć'
													: course.id}</Badge
								>
							</Label>
						</li>
					{/each}
				{:else}
					<p>Brak wybranych przedmiotów</p>
				{/if}
			</ul>
		</div>
	</div>
	<div class="mx-2 flex flex-col md:mx-10">
		{#if $groups.isLoading}
			<p>Ładowanie...</p>
		{:else if $groups.error}
			<p>Błąd: {$groups.error.message}</p>
		{:else if $groups.data && $groups.data?.length === 0}
			<p>Brak grup. Wybierz jakieś!</p>
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
