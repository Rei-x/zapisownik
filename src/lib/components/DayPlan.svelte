<script>
	import Course from './Course.svelte';
</script>

<h3 class="day-title">Poniedziałek</h3>
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
		<Course
			code="W04IST-SI0008L-8"
			startHour={9}
			startMinute={15}
			duration={105}
			lecturer="Hanna Mazur sranie"
			name="Bazy danych"
			type="TP | L"
		/>
		<div class="lesson laborki active" style="grid-column: 94 / 112;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">W04IST-SI0008L-1</p>
					<p class="type">TN | L</p>
				</div>
				<p class="name">Bazy danych</p>
				<p class="lecture">Hanna Mazur</p>
			</div>
		</div>
		<div class="lesson laborki off" style="grid-column: 94 / 112;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">W04IST-SI0008L-2</p>
					<p class="type">TP | L</p>
				</div>
				<p class="name">Bazy danych</p>
				<p class="lecture">Hanna Mazur</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>17%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>2/14<span class="lesson-info-size-date">Ostatni skan: 15:11</span></span
				>
			</p>
		</div>
		<div class="lesson laborki off" style="grid-column: 22 / 43;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">W04IST-SI0008L-5</p>
					<p class="type">TN | L</p>
				</div>
				<p class="name">Bazy danych</p>
				<p class="lecture">Hanna Mazur</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>0%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>1/14<span class="lesson-info-size-date">Ostatni skan: 15:11</span></span
				>
			</p>
		</div>
		<div class="lesson laborki off" style="grid-column: 70 / 91;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">W04IST-SI0008L-7</p>
					<p class="type">TN | L</p>
				</div>
				<p class="name">Bazy danych</p>
				<p class="lecture">Hanna Mazur</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>13%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>2/14<span class="lesson-info-size-date">Ostatni skan: 15:11</span></span
				>
			</p>
		</div>
		<div class="lesson laborki off" style="grid-column: 22 / 43;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">W04IST-SI0008L-6</p>
					<p class="type">TP | L</p>
				</div>
				<p class="name">Bazy danych</p>
				<p class="lecture">Hanna Mazur</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>4%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>0/14<span class="lesson-info-size-date">Ostatni skan: 15:11</span></span
				>
			</p>
		</div>
		<div class="lesson cwiczenia off" style="grid-column: 70 / 91;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">W04IST-SI0008C-2</p>
					<p class="type">TP | C</p>
				</div>
				<p class="name">Bazy danych</p>
				<p class="lecture">Zygmunt Mazur</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>33%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>7/25<span class="lesson-info-size-date">Ostatni skan: 15:11</span></span
				>
			</p>
		</div>
		<div class="lesson cwiczenia active" style="grid-column: 70 / 91;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">W04IST-SI0008C-1</p>
					<p class="type">TN | C</p>
				</div>
				<p class="name">Bazy danych</p>
				<p class="lecture">Zygmunt Mazur</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>27%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>7/25<span class="lesson-info-size-date">Ostatni skan: 15:11</span></span
				>
			</p>
		</div>
		<div class="lesson wyklad off" style="grid-column: 46 / 67;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">W04IST-SI0008W-1</p>
					<p class="type">W</p>
				</div>
				<p class="name">Bazy danych</p>
				<p class="lecture">Zygmunt Mazur</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>65%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>16/115<span class="lesson-info-size-date">Ostatni skan: 15:11</span></span
				>
			</p>
		</div>
		<div class="lesson laborki active" style="grid-column: 22 / 43;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">W04IST-SI0010L-7</p>
					<p class="type">L</p>
				</div>
				<p class="name">Języki skryptowe</p>
				<p class="lecture">Natalia Piórkowska</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>15%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>7/14<span class="lesson-info-size-date">Ostatni skan: 15:11</span></span
				>
			</p>
		</div>
		<div class="lesson laborki active" style="grid-column: 116 / 136;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">W04IST-SI0020L-8</p>
					<p class="type">TN | L</p>
				</div>
				<p class="name">Podstawy inżynierii oprogramowania</p>
				<p class="lecture">Dariusz Gall</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>8%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>3/14<span class="lesson-info-size-date">Ostatni skan: 15:11</span></span
				>
			</p>
		</div>
		<div class="lesson laborki off" style="grid-column: 94 / 114;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">W04IST-SI0808L-5</p>
					<p class="type">L</p>
				</div>
				<p class="name">Administracja serverami Linux</p>
				<p class="lecture">Iuliia Arkhangelska</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>20%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>3/14<span class="lesson-info-size-date">Ostatni skan: 15:11</span></span
				>
			</p>
		</div>
		<div class="lesson laborki off" style="grid-column: 116 / 136;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">W04IST-SI0808L-6</p>
					<p class="type">L</p>
				</div>
				<p class="name">Administracja serverami Linux</p>
				<p class="lecture">Iuliia Arkhangelska</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>9%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>0/14<span class="lesson-info-size-date">Ostatni skan: 15:11</span></span
				>
			</p>
		</div>
		<div class="lesson cwiczenia off" style="grid-column: 116 / 136;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">W04IST-SI0020C-1</p>
					<p class="type">C</p>
				</div>
				<p class="name">Podstawy inżynierii oprogramowania</p>
				<p class="lecture">Piotr Zabawa</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>25%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>3/24<span class="lesson-info-size-date">Ostatni skan: 15:11</span></span
				>
			</p>
		</div>
		<div class="lesson cwiczenia off" style="grid-column: 76 / 94;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">SWF000-S05032C-1</p>
					<p class="type">C</p>
				</div>
				<p class="name">Piłka siatkowa</p>
				<p class="lecture">Robert Jarosz</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>2%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>0/20<span class="lesson-info-size-date">Ostatni skan: 23:40</span></span
				>
			</p>
		</div>
		<div class="lesson cwiczenia off" style="grid-column: 97 / 115;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">SWF000-S05032C-2</p>
					<p class="type">C</p>
				</div>
				<p class="name">Piłka siatkowa</p>
				<p class="lecture">Robert Jarosz</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>8%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>0/20<span class="lesson-info-size-date">Ostatni skan: 23:40</span></span
				>
			</p>
		</div>
		<div class="lesson cwiczenia off" style="grid-column: 70 / 88;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">SJO000-SI0040C-25</p>
					<p class="type">C</p>
				</div>
				<p class="name">Język angielski / B2.2</p>
				<p class="lecture">Agnieszka Krzos</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>3%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>0/17<span class="lesson-info-size-date">Ostatni skan: 23:44</span></span
				>
			</p>
		</div>

		<div class="lesson cwiczenia off" style="grid-column: 22 / 40;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">SJO000-SI0040C-16</p>
					<p class="type">C</p>
				</div>
				<p class="name">Język angielski / B2.2</p>
				<p class="lecture">Justyna Henkie</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>7%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>0/17<span class="lesson-info-size-date">Ostatni skan: 23:44</span></span
				>
			</p>
		</div>
		<div class="lesson cwiczenia off" style="grid-column: 46 / 64;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">SJO000-SI0040C-17</p>
					<p class="type">C</p>
				</div>
				<p class="name">Język angielski / B2.2</p>
				<p class="lecture">Justyna Henkie</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>3%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>0/17<span class="lesson-info-size-date">Ostatni skan: 23:44</span></span
				>
			</p>
		</div>
		<div class="lesson cwiczenia off" style="grid-column: 94 / 112;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">SJO000-SI0040C-27</p>
					<p class="type">C</p>
				</div>
				<p class="name">Język angielski / B2.2</p>
				<p class="lecture">Aleksandra Kuźniak</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>0%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>0/17<span class="lesson-info-size-date">Ostatni skan: 23:44</span></span
				>
			</p>
		</div>
		<div class="lesson cwiczenia off" style="grid-column: 22 / 40;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">SJO000-SI0040C-47</p>
					<p class="type">C</p>
				</div>
				<p class="name">Język angielski / B2.2</p>
				<p class="lecture">Elżbieta Szczawińska</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>0%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>0/17<span class="lesson-info-size-date">Ostatni skan: 23:44</span></span
				>
			</p>
		</div>
		<div class="lesson cwiczenia off" style="grid-column: 46 / 64;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">SJO000-SI0040C-58</p>
					<p class="type">C</p>
				</div>
				<p class="name">Język angielski / B2.2</p>
				<p class="lecture">Joanna Wieruszewska</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>0%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>0/17<span class="lesson-info-size-date">Ostatni skan: 23:44</span></span
				>
			</p>
		</div>

		<div class="lesson cwiczenia off" style="grid-column: 46 / 64;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">SJO000-SI0040C-24</p>
					<p class="type">C</p>
				</div>
				<p class="name">Język angielski / B2.2</p>
				<p class="lecture">Agnieszka Krzos</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>2%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>0/17<span class="lesson-info-size-date">Ostatni skan: 23:44</span></span
				>
			</p>
		</div>
		<div class="lesson cwiczenia off" style="grid-column: 46 / 64;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">SJO000-SI0040C-29</p>
					<p class="type">C</p>
				</div>
				<p class="name">Język angielski / B2.2</p>
				<p class="lecture">Agnieszka Licznerska</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>2%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>0/17<span class="lesson-info-size-date">Ostatni skan: 23:44</span></span
				>
			</p>
		</div>
		<div class="lesson cwiczenia off" style="grid-column: 70 / 88;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">SJO000-SI0040C-35</p>
					<p class="type">C</p>
				</div>
				<p class="name">Język angielski / B2.2</p>
				<p class="lecture">Izabela Penderecka-Mosiek</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>15%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>0/17<span class="lesson-info-size-date">Ostatni skan: 23:44</span></span
				>
			</p>
		</div>
		<div class="lesson cwiczenia off" style="grid-column: 46 / 64;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">SJO000-SI0040C-48</p>
					<p class="type">C</p>
				</div>
				<p class="name">Język angielski / B2.2</p>
				<p class="lecture">Elżbieta Szczawińska</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>10%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>0/17<span class="lesson-info-size-date">Ostatni skan: 23:44</span></span
				>
			</p>
		</div>
		<div class="lesson cwiczenia off" style="grid-column: 22 / 40;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">SJO000-SI0040C-57</p>
					<p class="type">C</p>
				</div>
				<p class="name">Język angielski / B2.2</p>
				<p class="lecture">Joanna Wieruszewska</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>7%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>0/17<span class="lesson-info-size-date">Ostatni skan: 23:44</span></span
				>
			</p>
		</div>
		<div class="lesson cwiczenia off" style="grid-column: 22 / 40;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">SJO000-SI0040C-63</p>
					<p class="type">C</p>
				</div>
				<p class="name">Język angielski / B2.2</p>
				<p class="lecture">Zuzanna Wiszniowska</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>2%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>0/17<span class="lesson-info-size-date">Ostatni skan: 23:44</span></span
				>
			</p>
		</div>
		<div class="lesson cwiczenia off" style="grid-column: 70 / 88;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">SJO000-SI0040C-26</p>
					<p class="type">C</p>
				</div>
				<p class="name">Język angielski / B2.2</p>
				<p class="lecture">Aleksandra Kuźniak</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>3%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>0/17<span class="lesson-info-size-date">Ostatni skan: 23:44</span></span
				>
			</p>
		</div>

		<div class="lesson cwiczenia off" style="grid-column: 22 / 40;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">SJO000-SI0040C-49</p>
					<p class="type">C</p>
				</div>
				<p class="name">Język angielski / B2.2</p>
				<p class="lecture">Anna Szczepanowska</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>18%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>0/17<span class="lesson-info-size-date">Ostatni skan: 23:44</span></span
				>
			</p>
		</div>
		<div class="lesson cwiczenia off" style="grid-column: 22 / 40;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">SJO000-SI0040C-28</p>
					<p class="type">C</p>
				</div>
				<p class="name">Język angielski / B2.2</p>
				<p class="lecture">Agnieszka Licznerska</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>2%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>0/17<span class="lesson-info-size-date">Ostatni skan: 23:44</span></span
				>
			</p>
		</div>
		<div class="lesson cwiczenia off" style="grid-column: 70 / 88;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">SJO000-SI0040C-55</p>
					<p class="type">C</p>
				</div>
				<p class="name">Język angielski / B2.2</p>
				<p class="lecture">Łukasz Trzyna</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>0%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>0/17<span class="lesson-info-size-date">Ostatni skan: 23:44</span></span
				>
			</p>
		</div>
		<div class="lesson cwiczenia active" style="grid-column: 46 / 64;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">SJO000-SI0040C-34</p>
					<p class="type">C</p>
				</div>
				<p class="name">Język angielski / B2.2</p>
				<p class="lecture">Izabela Penderecka-Mosiek</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>11%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>0/17<span class="lesson-info-size-date">Ostatni skan: 23:44</span></span
				>
			</p>
		</div>
		<div class="lesson cwiczenia off" style="grid-column: 94 / 112;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">SJO000-SI0040C-56</p>
					<p class="type">C</p>
				</div>
				<p class="name">Język angielski / B2.2</p>
				<p class="lecture">Łukasz Trzyna</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>10%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>0/17<span class="lesson-info-size-date">Ostatni skan: 23:44</span></span
				>
			</p>
		</div>
		<div class="lesson cwiczenia off" style="grid-column: 22 / 40;">
			<div class="lesson-content">
				<div class="lesson-top-wrapper">
					<p class="code">SJO000-SI0040C-46</p>
					<p class="type">C</p>
				</div>
				<p class="name">Język angielski / B2.2</p>
				<p class="lecture">Magdalena Staroniewicz</p>
			</div>
			<p class="lesson-info">
				<span class="lesson-info-popularity"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-80 0 511 511.999"
						><path
							fill="currentColor"
							d="M285.402 132.957a14.998 14.998 0 00-27.836 7.758c0 18.308-14.894 33.2-33.199 33.2-18.308 0-33.199-14.892-33.199-33.2V15a15.006 15.006 0 00-9.262-13.86 15.006 15.006 0 00-16.347 3.255c-1.68 1.683-41.684 41.914-82.207 102.703-23.895 35.843-42.965 71.398-56.676 105.675C9.309 256.195.5 297.77.5 336.332.5 433.195 79.305 512 176.164 512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zM176.164 482C95.848 482 30.5 416.652 30.5 336.332c0-79.062 42.137-158.98 77.488-212.105 19.16-28.793 38.469-53.059 53.176-70.317v86.805c0 34.848 28.352 63.2 63.2 63.2 21.304 0 40.183-10.595 51.636-26.794 30.43 57.3 45.832 110.746 45.832 159.211 0 80.32-65.344 145.668-145.668 145.668zm0 0"
						></path><path
							fill="currentColor"
							d="M261.258 253.168h-64.266c-8.285 0-15 6.715-15 14.996-.004 8.285 6.715 15.004 14.996 15.004h28.059L160.96 347.25l-34.836-34.836c-5.855-5.855-15.355-5.855-21.21 0l-34.087 34.082c-5.86 5.86-5.86 15.356-.004 21.215 5.86 5.86 15.356 5.855 21.215 0l23.48-23.477 34.833 34.836a15.003 15.003 0 0021.215 0l74.69-74.687v28.05c0 8.282 6.716 15 15 15 8.286 0 15-6.718 15-15v-64.265c0-8.285-6.714-15-15-15zm0 0"
						></path></svg
					>3%</span
				><span class="lesson-info-size"
					><svg
						class="lesson-info-popularity-icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							d="M368 248.81V48a40.04 40.04 0 00-40-40H184a40.04 40.04 0 00-40 40v200.81A40.05 40.05 0 00112 288v208a8 8 0 008 8h24a8 8 0 008-8V352h208v144a8 8 0 008 8h24a8 8 0 008-8V288a40.05 40.05 0 00-32-39.19zM160 48a24.032 24.032 0 0124-24h144a24.032 24.032 0 0124 24v56H160zm0 72h192v128H160zm-24 368h-8V352h8zm248 0h-8V352h8zm0-152H128v-48a24.032 24.032 0 0124-24h208a24.032 24.032 0 0124 24z"
						></path><path
							d="M176 96h40a8 8 0 000-16h-40a8 8 0 000 16zM240 96h7a8 8 0 000-16h-7a8 8 0 000 16z"
						></path></svg
					>0/17<span class="lesson-info-size-date">Ostatni skan: 23:44</span></span
				>
			</p>
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
