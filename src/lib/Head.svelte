<script>
  import settings from "./stores/settings";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  {#if $settings.colorScheme === 'dark'}
    <style>
      :root {
      --backgroundColor: #1d1d1d;
      --textColor: #fff;
      }
    </style>
  {:else}
    <style>
      :root {
      --backgroundColor: #ffffff;
      --textColor: #000000;
      }
    </style>
  {/if}
</svelte:head>