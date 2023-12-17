<script lang="ts">
	import { Button, Modal, ButtonGroup, InputAddon } from 'flowbite-svelte';
	import CadidatePicture from './CadidatePicture.svelte';
	let defaultModal = false;
	export let positionName = '';
	let firstname = '';
	let lastname = '';
	let file: File;

	function hundleSubmit() {
		console.log(firstname, lastname, file);
	}
</script>

<Button on:click={() => (defaultModal = true)}>add a candidate</Button>

<Modal
	title={`Create a new ${positionName} canidate`}
	bind:open={defaultModal}
	autoclose
	class="w-[500px]"
>
	<form action="?/createcandidate" method="POST">
		<!-- <CadidatePicture bind:file /> -->
		<input type="text" name="name" />
		<button type="submit">Submit</button>
	</form>
</Modal>

<!-- <ButtonGroup class="w-full" size="sm">
			<InputAddon>First Name</InputAddon>
			<input
				id="input-addon-sm"
				bind:value={firstname}
				name="firstname"
				type="text"
				placeholder="eg: Benjamin"
			/>
		</ButtonGroup>
		<ButtonGroup class="w-full" size="sm">
			<InputAddon>Last Name</InputAddon>
			<input
				id="input-addon-sm"
				bind:value={lastname}
				name="firstname"
				type="text"
				placeholder="eg: Abotsi"
			/>
		</ButtonGroup>
		<Button type="submit" color="primary" on:click={hundleSubmit}>Submit</Button>
		<Button color="primary" on:click={() => (defaultModal = false)}>Close</Button> -->
