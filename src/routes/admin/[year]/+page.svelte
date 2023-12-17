<script lang="ts">
	import { Button, ButtonGroup, InputAddon, Modal } from 'flowbite-svelte';
	import type { PageData, ActionData } from './$types';
	import Toast from '$lib/components/Toast.svelte';
	import CadidatePicture from '$lib/components/CadidatePicture.svelte';
	import AddCandidate from '$lib/components/AddCandidate.svelte';

	export let data: PageData;
	export let form: ActionData;
</script>

{#if form?.message}
	<Toast>
		{form?.message}
	</Toast>
{/if}

<div class=" mt-8">
	<h1 class="text-xl font-bold mb-4">Create A Position</h1>
	<form action="?/position" method="post" class="flex items-center mb-8 gap-4">
		<ButtonGroup class="w-full" size="sm">
			<InputAddon>Position Name</InputAddon>
			<input
				id="input-addon-sm"
				name="position"
				type="text"
				placeholder="Head Prefect"
				class="w-full"
			/>
		</ButtonGroup>
		<Button type="submit" color="primary">Submit</Button>
	</form>
	<h1 class="text-3xl font-bold">
		{data.AcademicYear?.startYear}-{data.AcademicYear?.endYear}
		Acedemic Year
	</h1>
</div>

<div class="mt-8">
	{#each data.Positions as { positionName, positionID, academicYearID } (positionID)}
		{#if positionName}
			<details class="border mb-8 hover:shadow-md" open={true}>
				<summary class="border-b-2 1 p-2 flex justify-between items-center">
					<span class="text-lg font-bold">{positionName}</span>
					<AddCandidate positionName={positionName} />
				</summary>
				<div class="p-4">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo magni distinctio
					dolores iste nam? Eaque id distinctio dolor ratione itaque quibusdam quo aut rem.
					Molestiae ex dolor veniam? Nulla, illum!
				</div>
			</details>
		{/if}
	{/each}
</div>
