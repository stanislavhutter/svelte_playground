<script>
    
    import List from '$lib/dndUI/List.svelte'
    import { faker } from '@faker-js/faker';
	import { text } from 'svelte/internal';
    
    
    let themes= [
        'danger',
        'primary',
        'success',
        'info',
        'warning'
    ];

    let columns= [
        'new',
        'wip',
        'done'
    ];

    let generate_task = (id)=>{
        return {
            id: id,
            name: faker.name.firstName(),
            description: faker.lorem.paragraph(),
            theme: themes[themes.length * Math.random() | 0],
            column: columns[columns.length *  Math.random() | 0]
        }
    };

    let generate_tasks = (amount)=>{
        let res = [];

        for(let i = 0;i<amount;i++){
            res.push(generate_task(i));
        }

        return res;
    };

    let generate_task_list = (columns,tasks) =>{
        let res = [];

        columns.forEach(col_name=> {
            res.push(function(){
                let list = [];
                tasks.forEach(e=>{
                    if(e.column == col_name){
                        list.push(e);
                    }
                })
                return {colName: col_name, tasks: list}   
            }())
        });

        return res;
    }

    let task_list = generate_task_list(columns,generate_tasks(20));
    console.log(task_list);
    
    const flipDurationMs = 300;
    function handleDndConsider(e) {
        console.log(e);
        items = e.detail.items;
    }
    function handleDndFinalize(e) {
        console.log(e);
        items = e.detail.items;
    }
</script>

<div class="container d-flex flex-row " style="height: 800px;">
    {#each task_list as col}

        <div class="card m-3">
            <div class="card-header">{col.colName}</div>
            <div class="card-body" style=" overflow-y:auto">
                <List items={col.tasks}/>
            </div>
        </div>

        <div>
            
            
        </div>
        
    {/each}
</div>


















