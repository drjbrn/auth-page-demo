import ButtonLink from '../../components/ButtonLink';

function RegistrationAccepted() {
  return (
    <div className='accepted'>
      <p className='accepted__text'>
        Login account has been created!
      </p>
      <ButtonLink
        className='accepted'
        showHome={true}
        showLogIn={true}
      />
    </div>
  )
}

export default RegistrationAccepted;