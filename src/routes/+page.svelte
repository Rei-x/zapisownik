<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import type { ActionData, PageData } from './$types';
	import DayPlan from '$lib/components/DayPlan.svelte';
	import Auth from '$lib/components/Auth.svelte';
	import { enhance } from '$app/forms';

	export let data: PageData;

	export let form: ActionData;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Auth />
	{#each data.cart ?? [] as course}
		<pre>{JSON.stringify(course, null, 2)}</pre>
	{/each}
	{#if data.profile}
		<h1>Hi {data.profile.first_name}</h1>
	{/if}
	<form method="post" action="?/auth" use:enhance>
		<label>
			<span>Search {form?.mario}</span>
			<input type="text" name="name" />
		</label>
		<Button type="submit">Submit</Button>
	</form>
	<DayPlan />
</section>
