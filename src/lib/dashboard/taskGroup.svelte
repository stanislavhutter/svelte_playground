<script>

	import { myTasks, myGroups,myCredentials,mySettings } from "$lib/appData/store.js";
	console.log(myTasks);

	function addItem(){
		$myTasks = [...$myTasks,Date.now()];
		console.log($myTasks);
	};

</script>






