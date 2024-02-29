<script lang="ts">
	import type { PageData } from './$types';
	import Auth from '$lib/components/Auth.svelte';
	import { page } from '$app/stores';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import { Label } from '$lib/components/ui/label';
	import { trpc } from '$lib/trpc/client';
	import { Checkbox } from '$lib/components/ui/checkbox';
	export let data: PageData;

	const registrations =
		data.cart?.reduce(
			(acc, course) => {
				// remove duplicates basedon course.id
				if (!acc.find((c) => c.description.pl === course.description.pl)) {
					return [...acc, course];
				}

				return acc;
			},
			[] as typeof data.cart
		) ?? [];

	let selectedRegistration = '';

	$: roundId = registrations
		.find((course) => course.id === selectedRegistration)
		?.rounds?.at(0)?.id;

	$: response = trpc($page).courses.createQuery(
		{ cartId: roundId ?? '' },
		{
			enabled: roundId !== undefined
		}
	);

	let selectedCourses = [] as string[];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Auth />
	<div class="flex">
		<div>
			<RadioGroup.Root bind:value={selectedRegistration} class="gap-4">
				{#each registrations as course}
					<div class="flex items-center space-x-2">
						<RadioGroup.Item value={course.id} id={course.id} />
						<Label class="cursor-pointer" for={course.id}>{course.description.pl}</Label>
					</div>
				{/each}
			</RadioGroup.Root>
		</div>
		<ul class="flex flex-col gap-4">
			{#if $response.data}
				{#each $response.data as course}
					<li class="flex items-center space-x-2">
						<Checkbox
							id={course.course.id}
							onCheckedChange={(isChecked) => {
								if (isChecked) {
									selectedCourses = [...selectedCourses, course.course.id];
								} else {
									selectedCourses = selectedCourses.filter((id) => id !== course.course.id);
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
			{:else if $response.isLoading}
				<p>Loading...</p>
			{/if}
		</ul>
		{#if selectedCourses.length > 0}
			{selectedCourses.join(', ')}
		{/if}
	</div>
</section>
