<script>
    import { myTasks, myGroups,myCredentials,mySettings } from "$lib/appData/store.js";
	import TaskGroup from "./taskGroup.svelte";

    function addGroup(){
        $myGroups = [...$myGroups,'test']
    };

</script>

{#each $myGroups as group}
    <TaskGroup title={group} />
{/each}

<button class="btn btn-primary" on:click={addGroup}>+add</button>



<style>

</style>