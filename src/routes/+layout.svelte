<script lang="ts">
	import '../app.pcss';
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<QueryClientProvider client={data.queryClient}>
	<div class="app">
		<main class="container mx-auto">
			<slot />
		</main>
	</div>
</QueryClientProvider>
