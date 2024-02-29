<script lang="ts">
	export let hour: string;
	export let type: 'top' | 'bottom';

	const startHour = Number(hour.split(':')[0]);
	const startMinute = Number(hour.split(':')[1]);

	const startGrid = startHour * 12 - 7 * 12 - 5 + startMinute / 5;
</script>

<div class="day-hour day-hour--{type}" style="grid-column-start: {startGrid};">
	<span>{hour}</span>
</div>

<style>
	.day-hour {
		grid-column-end: span 4;
		position: relative;
		transform: translate(-50%);
		text-align: center;
		font-size: 12px;
		color: #888;
		line-height: 23px;
		z-index: 0;
	}
	.day-hour span {
		background: #fff;
		padding: 2px 0;
	}
	.day-hour:after {
		content: '';
		width: 1px;
		height: 1500px;
		position: absolute;
		background: #eee;
		top: -30px;
		left: 50%;
		z-index: -1;
	}
</style>
