import InputField from './InputField';

function Email({ validationEmail, email }) {
  return (
    <InputField
      id='email'
      label='Email Address'
      type='email'
      name='email'
      value={email}
      required
      onChange={validationEmail}
    />
  )
}

export default Email;