<script>   
    import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
	
    export let items = [];
    export let containerHeight = '400px';
    
	const flipDurationMs = 300;

	function handleDndConsider(e) {
		items = e.detail.items;
	}
	function handleDndFinalize(e) {
		items = e.detail.items;
	}
</script>

<section style="height:{containerHeight}" use:dndzone={{items, flipDurationMs}} on:consider={handleDndConsider} on:finalize={handleDndFinalize}>
	{#each items as item(item.id)}
        <div class="card text-bg-light" style="width: 200px;">
            <slot {item}>
                
            </slot>
        </div>
	{/each}
    </section>

<style>
    * {
        border: 1px solid red;
    }
</style>