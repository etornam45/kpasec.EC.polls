<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	// import type { LayoutData } from './$types';
	// export let data: LayoutData;
</script>

<section class="!min-h-screen">
	<Header />
	<main class="container min-h-screen">
		<slot />
	</main>
	<Footer />
</section>
