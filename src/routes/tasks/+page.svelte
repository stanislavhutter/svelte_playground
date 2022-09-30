<script>

	import Card from '$lib/task/card.svelte';

	let tasks_data = [
		{id: 0, name: 'testing',description: 'test description'},
		{id: 2, name: 'cleaning',description: 'test description'},
		{id: 3, name: 'refactoring',description: 'test description'},
		{id: 4, name: 'setup',description: 'test description'},
		{id: 5, name: 'lunch',description: 'test description'},
	]

	let cols = [
		{name: 'new', content: tasks_data},
		{name: 'wip', content: [tasks_data[0],tasks_data[2]]},
		{name: 'don', content: []},
	]

</script>

<svelte:head>
	<title>Tasks</title>
</svelte:head>

<div class="container">
	<h1>Project A</h1>

	<div id="task_col"class="row text-bg-light">
		{#each cols as col }
			<div class="col">
				<h2>{col.name}</h2>
				<div>
					{#each col.content as task }
						<Card id={task.id} name={task.name} description={task.description}/>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>

	#task_col  * {
		border: 1px solid red;
	}


</style>
