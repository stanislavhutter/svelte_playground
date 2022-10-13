<script>
    import Navbar from '$lib/mainUI/Navbar.svelte'
    import Footer from '$lib/mainUI/Footer.svelte'
</script>


<div id="mainContainer">
    <header>
        <Navbar />
    </header>
    <div id="contentContainer">
        <slot>
            <!-- Main Content Slot -->
        </slot>
    </div>
    <footer>
        <Footer />
    </footer>
</div>

<style>

    * {
        border: 1px solid red;
    }

    #mainContainer {
        position: fixed;
        display: flex;
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-rows: auto minmax(auto,1fr) auto;  
    }

    #contentContainer {
       overflow: hidden;
    }


    /* global scrollbar shizzle */
    :global(::-webkit-scrollbar){
        width: 10px;
        
    }
    :global(::-webkit-scrollbar-track){
        background: #f1f1f1;
    }
    :global(::-webkit-scrollbar-thumb){
        background: #888;
    }
    :global(::-webkit-scrollbar-thumb:hover){
        background: #555;
    }

</style>

