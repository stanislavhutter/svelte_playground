<script>

    import {myTasks} from '$lib/appData/store.js';
    import Card from '$lib/mainUI/Card.svelte';

</script>

<Card title='sample data' cardClasses='text-bg-dark' bodyClasses='' >
    <table class="table table-dark table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Project</th>
                <th scope="col">List</th>
            </tr>
        </thead>
        <tbody>
            {#each $myTasks as task}
                <tr>
                    <th>{task.id}</th>
                    <td>{task.name}</td>
                    <td>{task.project_id}</td>
                    <td>{task.list_id}</td>
                </tr>
            {/each}	
        </tbody>
    </table>
</Card>

