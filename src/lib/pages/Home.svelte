<script>
  import { Field, Form } from '../Form';
  import { validateEmail, validationRequiredField } from '../utils/validation';
</script>

<Form
  on:submit={(event) => {
    console.log(event.detail);
  }}
  initialValues={{ username: 'Test', email: 'test@test.com' }}
>
  <Field
    label="Username"
    name="username"
    type="text"
    validate={validationRequiredField}
  />
  <Field
    label="Email"
    name="email"
    type="email"
    validate={(value, label) => {
      return (
        validationRequiredField(value, label) || validateEmail(value, label)
      );
    }}
  />
  <Field
    label="Password"
    name="password"
    type="password"
    validate={validationRequiredField}
  />
  <Field
    label="PIN"
    name="password2"
    type="password"
    validate={validationRequiredField}
  />
  <button type="submit">Submit</button>
</Form>
