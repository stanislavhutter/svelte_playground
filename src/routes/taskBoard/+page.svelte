<script>

	// import modules
	import { myTasks,myCredentials,mySettings } from "$lib/appData/store.js";
	import { faker } from "@faker-js/faker";

	// import components
	import ContentBox from "$lib/mainUI/ContentBox.svelte";
	import TaskCard from "$lib/taskBoard/taskCard.svelte";
	
	// internal functions
	function addItem(){
		$myTasks = [...$myTasks,Date.now()+'_test'];
	};
	function scrollX(e){
		console.log(e);
		console.log(e.deltaY)
		e.target
	}

</script>

<svelte:head>
	<title>Dashbaord</title>
	<meta name="TaskBoard" content="Taskboard" />
</svelte:head>

<ContentBox overflowX=auto overflowY=hidden>

	<div class="d-flex flex-row" id='mainbox' on:mousewheel={scrollX}>

		<div class="card text-bg-dark m-3" style="min-width: 18rem; max-height: 100%;">
			<div class="card-header">Store Testing</div>
			<div class="card-body">
				<button class="btn btn-primary" on:click={addItem}>Add card</button>
				<p>{$myTasks}</p>
			</div>
		</div>

		{#each $myTasks as task }
			<TaskCard />
		<div class="card text-bg-dark m-3" style="min-width: 18rem; max-height: 100%;">
			<div class="card-header">Task {task}</div>
			<div class="card-body" style="overflow-y: auto;">
				{faker.lorem.paragraph(50)}
			</div>
		</div>
		{/each}


	</div>
</ContentBox>

<style>
	#mainbox {
		height: 100%;
		background-color: rgb(4, 245, 165);
		overflow-x: auto;
	}

</style>


