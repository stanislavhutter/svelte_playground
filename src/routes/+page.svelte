<script>

	// components
	import ContentBox from "$lib/mainUI/ContentBox.svelte";

	// modules
	import { faker } from "@faker-js/faker";
	import { fade, scale, slide } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	// stores
	import { myTasks } from "$lib/appData/store.js";
	

</script>

<svelte:head>
	<title>Dashboard</title>
	<meta name="Home" content="Dashboard Data" />
</svelte:head>

<ContentBox overflowX=hidden overflowY=auto>

	<!--Dashbaorad-->
	<div class="container">

		<!--Statisctics-->
		<div class="card text-bg-dark my-3">
			<div class="card-header">
				<h5 class="card-title">Statistics</h5>
			</div>
			<div class="card-body d-felx row-flex">
				<h5 class="card-title">Statistics</h5>
				<p class="card-text">{faker.lorem.paragraph(5)}</p>
				<a href="#" class="btn btn-primary">Go somewhere</a>
			</div>
		</div>

	</div>

</ContentBox>




