<script>
	import { Alert, Progressbar, Toast } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	let open = true;
	let initial = 7;
	let counter = initial;

	$: progress = (counter / initial) * 100;

	function trigger() {
		open = true;
		timeout();
	}

	onMount(() => {
		trigger();
	});

	$: {
		console.log(counter);
	}
	// @ts-ignore
	function timeout() {
		if (--counter > 0) return setTimeout(timeout, 1000);
		open = false;
	}
</script>

{#if open}
	<div class="absolute bottom-4 right-4">
		<Toast dismissable={false} color="red" transition={slide} bind:open>
			<slot />
		</Toast>
		<Progressbar {progress} />
	</div>
{/if}
