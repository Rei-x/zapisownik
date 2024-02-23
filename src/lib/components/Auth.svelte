<script>
	import { page } from '$app/stores';

	$: page.subscribe((value) => {});
</script>

<div>
	<h1>SvelteKit Auth Example</h1>
	<p>
		<a href="/signin"> Sign in </a>
	</p>
</div>
