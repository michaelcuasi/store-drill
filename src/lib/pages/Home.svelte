<script>
  let values = { username: '', email: '', password: '' };
  let errors = {};
  let isSubmitting = false;

  function validate() {
    const errors = {};
    if (!values.username) {
      errors.username = 'username is required';
    }
    if (!values.email) {
      errors.email = 'email is required';
    }
    if (!values.password) {
      errors.password = 'password is required';
    }
    if (
      values.email &&
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
    ) {
      errors.email = 'the email is invalid';
    }
    return errors;
  }
</script>

<form
  on:submit|preventDefault={() => {
    errors = validate();
    if (Object.keys(errors).length === 0) {
      isSubmitting = true;
      setTimeout(() => {
        alert(values.username);
        isSubmitting = false;
      }, 2000);
    }
  }}
>
  <label for="username">Username</label> <br />
  <input type="text" bind:value={values.username} name="username" /><br />
  {#if errors.username} <p>{errors.username}</p> {/if}

  <label for="email">Email</label><br />
  <input type="email" bind:value={values.email} name="email" /><br />
  {#if errors.email} <p>{errors.email}</p> {/if}

  <label for="password">Password</label><br />
  <input type="password" bind:value={values.password} name="password" /><br />
  {#if errors.password} <p>{errors.password}</p> {/if}

  <button type="submit" disabled={isSubmitting}>Submit</button>
</form>
