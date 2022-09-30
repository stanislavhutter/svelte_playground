<script>

	export let name = 'blah';
	export let description;
    export let id = 0;

</script>


<div 
    class="card text-bg-primary mb-3" 
    style="max-width: 18rem;"
>
    <div class="card-header">task</div>
    <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{description}</p>
    </div>
</div>

<style>
    .card {
        user-select: none; 
        cursor: pointer;
    }
</style>