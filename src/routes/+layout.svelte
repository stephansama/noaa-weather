<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';

	import '../app.scss';
</script>

<Navbar />
<main class="container flex-grow-1 flex-column d-flex">
	<slot />
</main>
<Footer />
