<script>

	// components
	import ContentBox from "$lib/mainUI/ContentBox.svelte";
	import TableCard from "$lib/dev_tools/sample_data_table/TableCard.svelte";
	import Table from "$lib/mainUI/Table.svelte";
	import Card from "$lib/mainUI/Card.svelte";
    import DndListHorizontal from "$lib/mainUI/dndListHorizontal.svelte";

	// modules
	import { faker } from "@faker-js/faker";

	// stores
	import {myTasks} from '$lib/appData/store.js';
	import DndListVertical from "../../lib/mainUI/dndListVertical.svelte";
	

</script>

<svelte:head>
	<title>Dashboard</title>
	<meta name="Home" content="Dashboard Data" />
</svelte:head>

<ContentBox overflowX='hidden' overflowY='auto'>
    <div class="container my-5">
        <Card title='Your Projects' cardClasses='text-bg-dark'>
           
            <DndListVertical bind:items={$myTasks} let:item />
        </Card>
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
</ContentBox>