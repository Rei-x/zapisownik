<script>
	import { buttonVariants } from '$lib/components/ui/button';
</script>

<div class="flex h-full w-screen flex-col items-center justify-center gap-8">
	<span class="text-5xl">
		💸
		<span
			class="animate-gradient bg-[linear-gradient(to_left,theme(colors.red.600),theme(colors.orange.200),theme(colors.red.300),theme(colors.orange.400),theme(colors.red.300),theme(colors.orange.300),theme(colors.red.400))] bg-[length:200%_auto] bg-clip-text text-5xl font-extrabold text-transparent"
			>DARMOWY Zapisownik PWr</span
		>
		💸
	</span>

	<a
		href="/signin"
		class={buttonVariants({
			size: 'lg',

			class: 'text-md transition-all hover:shadow-lg'
		})}>Zaloguj się z USOSem</a
	>
</div>
