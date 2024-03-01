<script>
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
</script>

<div class="flex w-full justify-end pr-4 pt-8 md:pr-16">
	{#if $page.data.profile}
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild let:builder>
				<Button builders={[builder]} variant="outline">{$page.data.profile.first_name}</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content class="w-56">
				<DropdownMenu.Label>Moje konto</DropdownMenu.Label>
				<DropdownMenu.Separator />
				<form action="/logout" method="post">
					<DropdownMenu.Item>
						<button type="submit" class="w-full text-left">Wyloguj</button>
					</DropdownMenu.Item>
				</form>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	{/if}
</div>
