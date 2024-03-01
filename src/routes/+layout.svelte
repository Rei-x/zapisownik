<script lang="ts">
	import '../app.pcss';
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<QueryClientProvider client={data.queryClient}>
	<div class="app h-screen">
		<main class="mx-auto h-full">
			<slot />
		</main>
	</div>
</QueryClientProvider>
