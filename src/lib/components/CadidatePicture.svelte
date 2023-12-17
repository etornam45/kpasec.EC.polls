<!-- Special thanks to Dcode for this tutorial: https://youtu.be/VElnT8EoEEM -->

<script lang="ts">
	let input: HTMLInputElement;
	let container;
	let image: HTMLImageElement;
	let placeholder;
	let showImage = false;
  export let file: File

	function onChange() {
		const _file = input.files ? input.files[0] : null;
    file = _file as File
		if (_file) {
			showImage = true;

			const reader = new FileReader();
			reader.addEventListener('load', function () {
				image.setAttribute('src', reader.result as string);
			});
			reader.readAsDataURL(_file);

			return;
		}
		showImage = false;
	}
</script>

<div class="flex gap-4 items-start mb-4">
	<div bind:this={container} class="prev aspect-[3/4] flex gap-4">
		{#if showImage}
			<img bind:this={image} src="" alt="Preview" />
		{:else}
			<span bind:this={placeholder}>Image Preview</span>
		{/if}
	</div>
	<input
		bind:this={input}
		on:change={onChange}
		name="profile"
		type="file"
		placeholder="Open Image"
    required
    accept="image/*"
	/>
</div>

<style>
	.prev {
		width: 250px;
		min-height: 100px;
		border: 2px solid #ddd;
		/* margin-top: 15px; */
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		font-weight: bold;
		color: #ccc;
	}
	img {
		width: 100%;
	}
</style>
