<script>
  import settings from "../stores/settings";
  import direction from "../stores/direction";

  // import { onDestroy } from "svelte";
  // let colorScheme;
  //   const unsubscribe = settings.subscribe((settings) => {
  //   console.log('settings subscribe')
  //   colorScheme = settings.colorScheme
  // })

  // $: {
  //   settings.update((prevSettings) => ({
  //     ...prevSettings, colorScheme
  //   }))
  // }
 
  // onDestroy(unsubscribe)

</script>

<h2>Settings</h2>

{$settings.language}
<button on:click={() => {
  settings.updateSetting('language', Math.random())}}>
  Update Language
</button>

{$settings.colorScheme}
<button on:click={() => {
  settings.toggleColorScheme()}}>
  Toggle Color Scheme
</button>

<button on:click={() => {
  settings.reset()
}}>Reset Setting</button>


<!-- <button on:click={() => {
  $settings.colorScheme = $settings.colorScheme === 'dark' ? 'light' : 'dark'
}}>Toggle Color Scheme</button> -->

<label>
  <input type="radio" bind:group={$settings.colorScheme} name="colorScheme" value="dark"/>
  Dark
</label>
<label>
  <input type="radio" bind:group={$settings.colorScheme} name="colorScheme" value="light"/>
  Light
</label>
<br />

{$direction}

<select bind:value={$settings.language}>
  <option value="en">English</option>
  <option value="ar">Arabic</option>
</select>