<script lang="ts">
	import Toast from '$lib/components/Toast.svelte';
	import PeopleBook from '$lib/icons/people-book.svelte';
	import type { PageData, ActionData } from './$types';

	import { Button, ButtonGroup, Input, InputAddon, Label } from 'flowbite-svelte';

	export let data: PageData;
	export let form: ActionData;
	$: AcademicYear = data.AcademicYear;
	$: {
		console.log(AcademicYear);
	}
</script>

{#if form?.message}
	<Toast>
		{form?.message}
	</Toast>
{/if}
<!-- create a svelete for that uses form actions  -->
<form action="?/year" method="POST" class="flex w-max gap-3 my-4">
	<ButtonGroup class="w-full" size="sm">
		<InputAddon>Year Start</InputAddon>
		<input id="input-addon-sm" name="start" type="number" placeholder="21" class="w-16" />
	</ButtonGroup>
	<ButtonGroup class="w-full" size="sm">
		<InputAddon>Year End</InputAddon>
		<input id="input-addon-sm" name="end" type="number" placeholder="22" class="w-16" />
	</ButtonGroup>
	<Button type="submit" color="primary">Submit</Button>
</form>

<div class="">
	<h1 class="text-2xl font-bold">
		<PeopleBook class="w-6 h-6 inline-block" />
		Recent Academic Years ({AcademicYear.length})</h1>
	{AcademicYear.length < 0 ? 'Create An Academic Year Group ' : ''}
	{#each AcademicYear as { startYear, endYear, academicYearID } (academicYearID)}
		<a href={`admin/${academicYearID}`} class="flex justify-between p-3 shadow-sm hover:shadow-lg cursor-pointer" >
			<div class="flex gap-2 font-semibold">
				<span class="">{startYear}/{endYear}</span> Academic Year
			</div>
			<div class="flex gap-2">
				<a href="/admin/{academicYearID}/year" class="text-blue-500">Edit</a>
				<a href="/admin/{academicYearID}/year" class="text-red-500">Delete</a>
			</div>
		</a>
	{/each}
</div>
