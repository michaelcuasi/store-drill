<script>
  import { Field, Form } from '../Form';
</script>

<Form
  on:submit={(event) => {
    console.log(event.detail);
  }}
  initialValues={{ username: 'Test', email: 'test@test.com' }}
>
  <Field label="Username" name="username" type="text" validate={() => {}} />
  <Field label="Email" name="email" type="email" validate={() => {}} />
  <Field label="Password" name="password" type="password" validate={() => {}} />
  <Field label="PIN" name="password2" type="password" validate={() => {}} />
  <button type="submit">Submit</button>
</Form>
