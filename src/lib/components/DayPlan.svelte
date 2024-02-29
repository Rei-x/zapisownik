<script lang="ts">
	import Course, { type CourseData } from './Course.svelte';
	import Hour from './Hour.svelte';
	export let courses: CourseData[];

	export let title: string;

	const topHours = [
		'7:30',
		'8:00',
		'9:00',
		'10:00',
		'11:00',
		'12:00',
		'13:00',
		'14:00',
		'15:00',
		'16:00',
		'16:55',
		'17:50',
		'18:45',
		'19:40',
		'20:45',
		'21:40'
	];

	const bottomHours = [
		'8:15',
		'9:15',
		'10:15',
		'11:15',
		'12:15',
		'13:15',
		'14:15',
		'15:15',
		'16:10',
		'17:05',
		'18:00',
		'18:55',
		'19:50',
		'20:55',
		'21:50'
	];
</script>

<div class="day-container mb-10 w-full">
	<h3 class="day-title mb-3 text-2xl font-bold">{title}</h3>
	<div class="day overflow-hidden">
		<div
			class="day-hours-container grid grid-cols-dayPlan rounded-t-xl border-2 border-solid border-slate-100 px-[10px]"
		>
			{#each topHours as hour}
				<Hour {hour} type="top" />
			{/each}
			{#each bottomHours as hour}
				<Hour {hour} type="bottom" />
			{/each}
		</div>
		<div
			class="grid min-h-[100px] grid-flow-col grid-cols-dayPlan gap-y-2.5 rounded-b-md border-2 border-t-0 border-gray-200 bg-white px-[10px] py-5"
		>
			{#each courses as course}
				<Course data={course} />
			{/each}
		</div>
	</div>
</div>
