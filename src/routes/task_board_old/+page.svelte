<script>
    
    import List from '$lib/dndUI/List.svelte'
    import { faker } from '@faker-js/faker';
	import { text } from 'svelte/internal';

    // placeholder data
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
        'done',
        'review',
        'final'
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
    
    // dnd logic
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

<div id="container">
   hello 
</div>

<style>
    #container {
        position: relative;
        top: 0px;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        border: 4px solid red;
    }
</style>




















