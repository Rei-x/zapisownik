<script lang="ts">
	import Course, { type CourseData } from './Course.svelte';

	export let courses: CourseData[];

	export let title: string;
</script>

<div class="day-container">
	<h3 class="day-title">{title}</h3>
	<div class="day">
		<div class="day-hours-container">
			<div class="day-hour day-hour--top" style="grid-column-start: 7;"><span>8:00</span></div>
			<div class="day-hour day-hour--top" style="grid-column-start: 19;"><span>9:00</span></div>
			<div class="day-hour day-hour--top" style="grid-column-start: 31;"><span>10:00</span></div>
			<div class="day-hour day-hour--top" style="grid-column-start: 43;"><span>11:00</span></div>
			<div class="day-hour day-hour--top" style="grid-column-start: 55;"><span>12:00</span></div>
			<div class="day-hour day-hour--top" style="grid-column-start: 67;"><span>13:00</span></div>
			<div class="day-hour day-hour--top" style="grid-column-start: 79;"><span>14:00</span></div>
			<div class="day-hour day-hour--top" style="grid-column-start: 91;"><span>15:00</span></div>
			<div class="day-hour day-hour--top" style="grid-column-start: 103;"><span>16:00</span></div>
			<div class="day-hour day-hour--top" style="grid-column-start: 114;"><span>16:55</span></div>
			<div class="day-hour day-hour--top" style="grid-column-start: 125;"><span>17:50</span></div>
			<div class="day-hour day-hour--top" style="grid-column-start: 136;"><span>18:45</span></div>
			<div class="day-hour day-hour--top" style="grid-column-start: 147;"><span>19:40</span></div>
			<div class="day-hour day-hour--top" style="grid-column-start: 160;"><span>20:45</span></div>
			<div class="day-hour day-hour--top" style="grid-column-start: 171;"><span>21:40</span></div>
			<div class="day-hour day-hour--bottom" style="grid-column-start: 10;">8:15</div>
			<div class="day-hour day-hour--bottom" style="grid-column-start: 22;">9:15</div>
			<div class="day-hour day-hour--bottom" style="grid-column-start: 34;">10:15</div>
			<div class="day-hour day-hour--bottom" style="grid-column-start: 46;">11:15</div>
			<div class="day-hour day-hour--bottom" style="grid-column-start: 58;">12:15</div>
			<div class="day-hour day-hour--bottom" style="grid-column-start: 70;">13:15</div>
			<div class="day-hour day-hour--bottom" style="grid-column-start: 82;">14:15</div>
			<div class="day-hour day-hour--bottom" style="grid-column-start: 94;">15:15</div>
			<div class="day-hour day-hour--bottom" style="grid-column-start: 105;">16:10</div>
			<div class="day-hour day-hour--bottom" style="grid-column-start: 116;">17:05</div>
			<div class="day-hour day-hour--bottom" style="grid-column-start: 127;">18:00</div>
			<div class="day-hour day-hour--bottom" style="grid-column-start: 138;">18:55</div>
			<div class="day-hour day-hour--bottom" style="grid-column-start: 149;">19:50</div>
			<div class="day-hour day-hour--bottom" style="grid-column-start: 162;">20:55</div>
			<div class="day-hour day-hour--bottom" style="grid-column-start: 173;">21:50</div>
		</div>
		<div class="day-courses-container">
			{#each courses as course}
				<Course data={course} />
			{/each}
		</div>
	</div>
</div>

<style>
	.day-container {
		width: 100%;
		margin-bottom: 50px;
	}
	.day-container .day {
		overflow: hidden;
	}
	.day-title {
		color: #4c395d;
		font-weight: 700;
		font-size: 24px;
		margin-bottom: 10px;
	}
	.day-hours-container {
		display: grid;
		grid-template-columns: repeat(174, 1fr);
		background: #fff;
		padding: 0 10px;
		border: 2px solid #eee;
		border-radius: 10px 10px 0 0;
	}
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
	.day-courses-container {
		display: grid;
		grid-template-columns: repeat(174, 1fr);
		grid-row-gap: 10px;
		min-height: 100px;
		background: #fff;
		grid-auto-flow: column;
		padding: 20px 10px;
		border: 2px solid #eee;
		border-top: none;
		border-radius: 0 0 10px 10px;
	}
	@media (max-width: 960px) {
		.day-container {
			overflow: auto;
		}
		.day-container .day {
			overflow: hidden;
			width: 1000px;
		}
	}
	.lesson {
		display: flex;
		flex-direction: column;
		position: relative;
		background: pink;
		color: #444;
		border-radius: 5px;
		box-shadow: 0 2px 2px #00000014;
		border: 2px solid transparent;
		cursor: pointer;
	}
	.lesson .lesson-top-wrapper {
		display: flex;
		justify-content: space-between;
		font-size: 12px;
	}
	.lesson .code {
		font-weight: 500;
	}
	.lesson .type {
		font-weight: 700;
	}
	.lesson .name {
		font-size: 14px;
		font-weight: 300;
		padding: 5px 0;
		word-break: break-word;
	}
	.lesson .lecture {
		font-size: 12px;
		font-weight: 300;
	}
	.lesson.off {
		opacity: 0.4;
	}
	.lesson-content {
		padding: 8px;
		flex: 1;
	}
	.wyklad {
		background: #ffc2c6;
	}
	.wyklad .type,
	.wyklad .lecture {
		color: #ff858d;
	}
	.wyklad.active {
		background: #fc7d85;
		border: 2px solid #db0513;
	}
	.wyklad.active .type,
	.wyklad.active .lecture {
		color: #d42934;
	}
	.cwiczenia {
		background: #bcffb2;
	}
	.cwiczenia .type,
	.cwiczenia .lecture {
		color: #66ab5c;
	}
	.cwiczenia.active {
		background: #87ff75;
		border: 2px solid #1ddb00;
	}
	.cwiczenia.active .type,
	.cwiczenia.active .lecture {
		color: #4aab3c;
	}
	.laborki {
		background: #c2e1ff;
	}
	.laborki .type,
	.laborki .lecture {
		color: #6c95bd;
	}
	.laborki.active {
		background: #73b9ff;
		border: 2px solid #006dd9;
	}
	.laborki.active .type,
	.laborki.active .lecture {
		color: #336494;
	}
	.projekt {
		background: #ffecc2;
	}
	.projekt .type,
	.projekt .lecture {
		color: #bda470;
	}
	.projekt.active {
		background: #ffd374;
		border: 2px solid #da9500;
	}
	.projekt.active .type,
	.projekt.active .lecture {
		color: #c2932e;
	}
	.seminarium {
		background: #e4c2ff;
	}
	.seminarium .type,
	.seminarium .lecture {
		color: #bd70bd;
	}
	.seminarium.active {
		background: #bc74ff;
		border: 2px solid #7100da;
	}
	.seminarium.active .type,
	.seminarium.active .lecture {
		color: #6e2ec2;
	}
	.lesson--full {
		background: #ddd;
	}
	.lesson--full .type,
	.lesson--full .lecture {
		color: #b9b9b9;
	}
	.lesson--full.active {
		background: #7a7a7a;
		border: 2px solid #2e2e2e;
	}
	.lesson--full.active .type,
	.lesson--full.active .lecture {
		color: #333;
	}
	.lesson-info {
		display: flex;
		font-size: 11px;
	}
	.lesson-info-popularity {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
		border-radius: 3px 0 0 3px;
		padding: 3px 5px;
		background: #4c395d1a;
	}
	.lesson-info-popularity-icon {
		height: 13px;
		margin-right: 3px;
	}
	.lesson-info-size-date {
		position: absolute;
		bottom: 100%;
		bottom: calc(100% + 3px);
		right: 0;
		z-index: 999;
		background: #fffc;
		padding: 5px 8px;
		white-space: nowrap;
		border-radius: 3px;
		display: none;
	}
	.lesson-info-size {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
		border-radius: 0 3px 3px 0;
		border-top: 1px solid rgba(76, 57, 93, 0.1);
		padding: 3px 5px;
		margin: 0 6px;
	}
	.lesson-info-size:hover .lesson-info-size-date {
		display: block;
	}
	.lesson-size-info-saved {
		position: absolute;
		bottom: 8px;
		right: 8px;
		font-size: 12px;
	}
	@media (max-width: 1333px) {
		.lesson-size-info-scan-label {
			display: none;
		}
	}
	@media (max-width: 900px) {
		.lesson {
			padding: 3px;
			border-radius: 3px;
			box-shadow: none;
			font-size: 12px;
		}
		.lesson .lesson-code {
			font-weight: 500;
			font-size: 11px;
		}
		.lesson .lesson-type {
			position: absolute;
			top: 5px;
			right: 5px;
			font-weight: 700;
		}
		.lesson .lesson-name {
			font-size: 13px;
			font-weight: 300;
		}
		.lesson .lesson-lecture {
			font-size: 10px;
		}
		.lesson p {
			padding-bottom: 5px;
		}
		.lesson-size-info-saved {
			bottom: 3px;
			right: 3px;
		}
		.lesson-size-info-scan {
			bottom: 3px;
			left: 3px;
		}
		.lesson-size-info-scan span {
			display: none;
		}
	}
</style>
