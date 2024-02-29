<script>
	import { page } from '$app/stores';
	import { buttonVariants } from './ui/button';

	$: page.subscribe((value) => {});
</script>

<a href="/signin" class={buttonVariants({ variant: 'outline' })}>Zaloguj się</a>
