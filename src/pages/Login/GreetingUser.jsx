import ButtonLink from '../../components/ButtonLink';

function GreetingUser({ userFirstName }) {
  return (
    <div className='greeting'>
      <h1 className='greeting__title'>
        Hello, {userFirstName}!
      </h1>
      <p className='greeting__text'>
        Go back to
      </p>
      <ButtonLink
        className='greeting'
        showHome={true}
      />
    </div>
  )
}

export default GreetingUser;