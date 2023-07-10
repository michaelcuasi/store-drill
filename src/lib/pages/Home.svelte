<script>
  // import { onDestroy } from "svelte";
  // import settings from "../stores/settings";
  // import location from "../stores/location";

  // const unsubscribe = settings.subscribe((settings) => {
  //   console.log('home subscribe')
  //   colorScheme = settings.colorScheme
  // })

  // onDestroy(unsubscribe)

    import { writable } from "svelte/store";
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
   
    const size = tweened({width: 100, height: 100}, {duration: 500, easing: cubicOut })
    


</script>

<!-- <button on:click={() => {$scale += 1}}>
   Make it bigger
</button>

<button on:click={() => {$scale -= 1}}>
  Make it smaller
</button> -->

<button on:click={async () => {
    await size.set({
      width: Math.random()*500,
      height: Math.random()*500,
    })
    console.log('done')
  }}>
  random size
</button>

<div 
  style="width: {$size.width}px; height: {$size.height}px; background-color: purple;">

</div>

<!-- <h2>Home</h2>

{#if $location && !$location.error}
  {$location.latitude}, {$location.latitude}
{/if}

{#if $location && $location.error}
  {$location.error.message}
{/if}

{$settings.colorScheme} -->