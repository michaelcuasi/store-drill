<script>
  import { setContext } from 'svelte';
  import formKey from './form-key';

  export let initialValues = {};

  setContext(formKey, { values: initialValues, errors: {} });
</script>

<form>
  <slot />
</form>
