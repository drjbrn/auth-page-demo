import InputField from './InputField';

function Email({ validationEmail, email }) {
  return (
    <InputField
      id='email'
      label='Email Address'
      type='text'
      name='email'
      value={email}
      required
      onChange={validationEmail}
    />
  )
}

export default Email;