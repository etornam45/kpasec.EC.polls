<script>
	import { NavBrand, NavHamburger, NavLi, NavUl, Navbar } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
	let btnClass =
		' rounded-lg text-xl p-2';
</script>

<header class="sticky top-0 ">
	<Navbar let:NavContainer color="primary" class="py-6">
		<NavContainer class=" bg-white py-0 items-center dark:bg-gray-600">
			<NavBrand href="/">
				<span class="self-center whitespace-nowrap text-xl font-semibold">KPASEC EC</span>
			</NavBrand>
			<NavUl>
				<NavLi href="/">Home</NavLi>
				<NavLi href="/about">About</NavLi>
				<NavLi href="/docs/components/navbar">Navbar</NavLi>
				<NavLi href="/pricing">Pricing</NavLi>
				<NavLi href="/contact">Contact</NavLi>
			</NavUl>
			<div>
				<DarkMode {btnClass} />
				<NavHamburger />
			</div>
		</NavContainer>
	</Navbar>
</header>
