<script>

    // data
    export let thead = true;
    export let columns = [
        {name: 'id',key: 'id'},
        {name: 'First name',key: 'first_name'},
        {name: 'Last Name',key: 'last_name'},

    ];
    export let data = [
        {id: 0,first_name: 'John',last_name: 'Doe'},
    ];

    // classes
    export let theadClasses = '';
    export let tbodyClasses = '';
    export let tableClasses = '';

</script>


<table class="table {tableClasses}">
    {#if thead == true}
        <thead {theadClasses}>
            <tr>
                {#each columns as col}
                    <th scope="col">{col.name}</th>
                {/each}
            </tr>
        </thead> 
    {/if}
    <tbody {tbodyClasses}>
        {#each data as record}
            <tr>
                {#each columns as col}
                    <td>{record[col.key]}</td>
                {/each}
            </tr>
        {/each}	
    </tbody>
</table>
