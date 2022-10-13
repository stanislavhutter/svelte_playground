<script>

	import { myTasks, myGroups,myCredentials,mySettings,myProjects} from "$lib/appData/store.js";
	import ContentBox from "$lib/mainUI/ContentBox.svelte";
	import { faker } from "@faker-js/faker";
	import TaskCard from "$lib/taskBoard/taskCard.svelte";
	import { fade, scale, slide } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	

	let projectName = 'test';

	function addProject(_name = 'test'){
		if(_name.length == 0){
			return;
		}
		$myProjects = [...$myProjects,_name]
	};
	function removeProject(_index){
		$myProjects.splice(_index,1)
		$myProjects = $myProjects;
	};

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

		<!--Boards-->
		<div class="card text-bg-dark my-3">
			<div class="card-header">
				<h5 class="card-title">Projects</h5>
			</div>
			<div class="card-body d-flex  align-items-start overflow-auto">
				
					<!--Create, Update, Delete Projects-->
					{#each $myProjects as project, i(i) }
						
						<div class="card text-bg-secondary me-3" style="min-width: 18rem;" 
							animate:flip="{{ duration: 300 }}" out:scale|local="{{ duration: 250 }}"  in:scale|local="{{ duration: 250 }}">
							<div class="card-header">
								<h5 class="card-title">{project}{i}</h5>
							</div>
							<div class="card-body">
								<a class="btn btn-primary" href="/hello-world" >open Project</a>
								<button class="btn btn-danger" on:click={()=>{removeProject(i)}}>remove</button>
							</div>
						</div>
						
					{/each}

					<div class="card text-bg-secondary" style="min-width: 18rem;" transition:scale>
						<div class="card-header">
							<h5 class="card-title">Add Project</h5>
						</div>
						<div class="card-body">
							<input type="text" class="form-control" bind:value={projectName}>
							<button class="btn btn-primary" style="width: 100%;" on:click={()=>{addProject(projectName)}}>add project</button>
						</div>
					</div>



				
			</div>
		</div>

		<!--Pending tasks-->
		<div class="card text-bg-dark my-3">
			<div class="card-body">
				<h5 class="card-title">Pending Tasks</h5>
				<p class="card-text">{faker.lorem.paragraph(10)}</p>
				<a href="#" class="btn btn-primary">Go somewhere</a>
			</div>
		</div>

		<!--Pending tasks-->
		<div class="card text-bg-dark my-3">
			<div class="card-body">
				<h5 class="card-title">Developer Toys</h5>
				<p class="card-text">{faker.lorem.paragraph(10)}</p>
				<a href="#" class="btn btn-primary">Go somewhere</a>
			</div>
		</div>
	</div>

	

</ContentBox>




