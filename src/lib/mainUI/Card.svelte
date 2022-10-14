<script>

    // com data
    export let title = 'New card';

    // comp classes
    export let cardClasses = '';
    export let headerClasses = '';
    export let titleClasses = '';
    export let bodyClasses = '';

</script>

<div class="card {cardClasses}">

    <div class="card-header {headerClasses}">
        <h5 class="card-title {titleClasses}">{title}</h5>
    </div>

    <div class="card-body {bodyClasses}">
        <slot>
            <p>no content set</p>
        </slot>  
    </div>

</div>