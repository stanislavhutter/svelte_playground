<script>   
    import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';

    export let items;
    export let containerWidth = '400px';
    export let itemWidth = '100%';

	const flipDurationMs = 300;
	function handleDndConsider(e) {
		items = e.detail.items;
	}
	function handleDndFinalize(e) {
		items = e.detail.items;
	}
</script>

<div class="task_col" style="width:{containerWidth}" use:dndzone={{items, flipDurationMs}} on:consider={handleDndConsider} on:finalize={handleDndFinalize}>
	{#each items as item(item.id)}
		
		<div 
			class="card text-bg-{item.theme} mb-3" 
			style="max-width: 18rem;"
			animate:flip="{{duration: flipDurationMs}}"
		>
			<div class="card-header">task</div>
			<div class="card-body">
				<h5 class="card-title">{item.name}</h5>
				<p class="card-text">{item.description}</p>
			</div>
		</div>
		
	{/each}
</div>