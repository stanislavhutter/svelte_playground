<script>
  import { page } from '$app/stores';
  console.log($page.routeId);
  console.log($page.params.projectId);
</script>

<h1>{$page.params.projectId}</h1>


