<script lang="ts">
	export let hour: string;

	const startHour = Number(hour.split(':')[0]);
	const startMinute = Number(hour.split(':')[1]);

	const startGrid = startHour * 12 - 7 * 12 - 5 + startMinute / 5;
</script>

<div
	class="day-hour after:top- relative z-0 -translate-x-1/2 transform text-center text-xs leading-6 text-gray-400 after:absolute after:left-1/2 after:top-[-30px] after:-z-10 after:h-screen after:w-[1px] after:bg-slate-200"
	style="grid-column-start: {startGrid}; grid-column-end: span 4"
>
	<span class="bg-white py-0.5">{hour}</span>
</div>
