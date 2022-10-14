<script>
    import { myTasks,myCredentials,mySettings } from "$lib/appData/store.js";
    import { faker } from "@faker-js/faker";

    let tasks = [];
    function addTask(){
        tasks = [...tasks,1];
    }

</script>

    <div class="card text-bg-dark m-3" style="min-width: 18rem; max-height: 100%;">
        <div class="card-header">Task </div>
        <div class="card-body" style="overflow-y: auto;">
            <button class="btn btn-primary mb-3" on:click={addTask}>add stuff</button>
            {#each tasks as task }
                <p class="btn btn-secondary">{faker.lorem.paragraph(5)}</p>
            {/each}
        </div>
    </div>
    
<style>

</style>