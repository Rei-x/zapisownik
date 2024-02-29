<script lang="ts" context="module">
	export interface CourseData {
		code: string;
		type: string;
		name: string;
		startHour: number;
		startMinute: number;
		duration: number;
		lecturer: string;
		lectureType: 'wyklad' | 'cwiczenia' | 'laboratorium' | 'projekt' | 'seminarium';
		selectionType: 'off' | 'active';
	}
</script>

<script lang="ts">
	export let data: CourseData;

	let { startHour, startMinute, duration, lectureType, selectionType, code, name, lecturer, type } =
		data;

	$: startGrid = startHour * 12 - 7 * 12 - 5 + startMinute / 5;
	$: gridSize = duration / 5;
</script>

<div
	class="lesson {lectureType} {selectionType}"
	style="grid-column: {startGrid} / {startGrid + gridSize};"
>
	<div class="lesson-content">
		<div class="lesson-top-wrapper">
			<p class="code">{code}</p>
			<p class="type">{type}</p>
		</div>
		<p class="name">{name}</p>
		<p class="lecture">{lecturer}</p>
	</div>
</div>

<style>
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
	.lesson .stream {
		padding: 10px 0;
		text-align: right;
		font-size: 12px;
		font-weight: 700;
		color: #00000080;
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
	.laboratorium {
		background: #c2e1ff;
	}
	.laboratorium .type,
	.laboratorium .lecture {
		color: #6c95bd;
	}
	.laboratorium.active {
		background: #73b9ff;
		border: 2px solid #006dd9;
	}
	.laboratorium.active .type,
	.laboratorium.active .lecture {
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
