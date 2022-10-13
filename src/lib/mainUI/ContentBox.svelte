<script>

export let overflowX = 'auto';
export let overflowY = 'auto';

</script>

<div id="content" style="overflow-x: {overflowX}; overflow-y: {overflowY}; ">
    <slot>
        here come the content
    </slot>
</div>


<style>

	* {
		border: 5px dashed red;
	}

	#content {
		position: relative;
        height: 100%;
        max-height: 100%;
		background-color: rgb(80, 80, 80);
		box-sizing: border-box;
	}

</style>