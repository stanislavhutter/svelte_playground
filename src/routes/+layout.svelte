<script>
	import Navbar from '../lib/mainUI/navbar/Navbar.svelte';
	import Footer from '../lib/mainUI/footer/Footer.svelte';
</script>

<Navbar />

<main>
	<slot />
</main>

<Footer />