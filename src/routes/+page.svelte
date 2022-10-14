<script>

	// components
	import ContentBox from "$lib/mainUI/ContentBox.svelte";
	import TableCard from "$lib/dev_tools/sample_data_table/TableCard.svelte";
	import Table from "../lib/mainUI/Table.svelte";
	import Card from "../lib/mainUI/Card.svelte";

	// modules
	import { faker } from "@faker-js/faker";

	// stores
	import {myTasks} from '$lib/appData/store.js'

</script>

<svelte:head>
	<title>Dashboard</title>
	<meta name="Home" content="Dashboard Data" />
</svelte:head>

<ContentBox overflowX=hidden overflowY=auto>

	<!--Dashbaorad-->
	<div class="container my-4 ">

		<!--Statisctics-->
		<div class="card text-bg-dark mb-4">
			<div class="card-header">
				<h5 class="card-title">hello Chief</h5>
			</div>
			<div class="card-body d-felx row-flex">
				<h5 class="card-title">Developer Tools</h5>
				<p class="card-text">{faker.lorem.paragraph(5)}</p>
				<a href="/projects" class="btn btn-primary">Test Project Board</a>
				<button class="btn btn-primary" on:click={()=>{$myTasks = [...$myTasks,{id: 100}]}}>add something to list</button>
			</div>
		</div>

		<Card title='Table test' cardClasses='text-bg-dark'>
			<Table
				thead={true} 
				columns={[
					{name: 'ID', key:'id'},
					{name: 'Name', key:'name'},
					{name: 'Project', key:'project_id'},
					{name: 'List', key:'list_id'},
				]}
				data={$myTasks}
				tableClasses='table-dark table-striped'
			/>
		</Card>

	</div>

</ContentBox>




