<script>
  // import { onDestroy } from "svelte";
  import settings from "../stores/settings";
  import location from "../stores/location";

  // const unsubscribe = settings.subscribe((settings) => {
  //   console.log('home subscribe')
  //   colorScheme = settings.colorScheme
  // })

  // onDestroy(unsubscribe)

</script>

<h2>Home</h2>

{#if $location && !$location.error}
  {$location.latitude}, {$location.latitude}
{/if}

{#if $location && $location.error}
  {$location.error.message}
{/if}

{$settings.colorScheme}