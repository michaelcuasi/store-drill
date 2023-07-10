<script>
  import { Field, Form } from '../Form';
</script>

<Form
  on:submit={() => {}}
  initialValues={{ username: 'Test', email: 'test@test.com' }}
>
  <Field label="Username" name="username" type="text" validate={() => {}} />
  <Field label="Email" name="email" type="email" validate={() => {}} />
  <Field label="Password" name="password" type="password" validate={() => {}} />
</Form>

<button>Submit</button>
