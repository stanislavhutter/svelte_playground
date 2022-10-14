<script>   
    import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';

    export let items;
    export let containerWidth = '100%';
    

	const flipDurationMs = 300;
	function handleDndConsider(e) {
		items = e.detail.items;
	}
	function handleDndFinalize(e) {
		items = e.detail.items;
	}
</script>

<div class="d-flex row-flex" style="width:{containerWidth}" use:dndzone={{items, flipDurationMs}} on:consider={handleDndConsider} on:finalize={handleDndFinalize}>
	{#each items as item(item.id)}
		
		<div 
			class="card text-bg-light mb-3" 
			style="max-width: 18rem;"
			animate:flip="{{duration: flipDurationMs}}"
		>
			<div class="card-header">task</div>
			<div class="card-body">
				<h5 class="card-title">{item.name} ID: {item.id}</h5>
                <p class="card-text">{item.project_id}</p>
				<p class="card-text">{item.project_id}</p>
                <p class="card-text">{item.list_id}</p>
			</div>
		</div>
		
	{/each}
</div>