<script>
  import { Field, Form } from '../Form';
  import { validateEmail, validationRequiredField } from '../utils/validation';
</script>

<Form
  on:submit={(event) => {
    console.log(event.detail);
  }}
  initialValues={{username: 'cuasicreate', email: 'cuasicreate@gmail.com', company: 'snaa8'}}
  let:hasErrors
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
  <button type="submit" disabled={hasErrors}>Submit</button>
</Form>
