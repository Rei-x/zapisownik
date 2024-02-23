<script>
	import '../app.pcss';
	import '../app.pcss';
	import Header from './Header.svelte';
</script>

<div class="app">
	<Header></Header>

	<main class="container mx-auto">
		<slot />
	</main>
</div>
