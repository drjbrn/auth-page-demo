import './PasswordRequirements.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function PasswordRequirements({ password }) {
  const requirements = [
    { text: 'At least 8 Characters', regex: /.{8,}/ },
    { text: 'Lower case letters (a-z)', regex: /[a-z]/ },
    { text: 'Upper case letters (A-Z)', regex: /[A-Z]/ },
    { text: 'Numbers (0-9)', regex: /[0-9]/ },
  ];

  return (
    <div className='check-password'>
      <p className='check-password__text'>
        Your password must contain:
      </p>
      <ul className='check-password__list'>
        {requirements.map(({ text, regex }) => (
          <li key={text} className='check-password__item'>
            { regex.test(password)
              ? <FontAwesomeIcon icon={faCircleCheck} />
              : <FontAwesomeIcon icon={faCircle} />
            }
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default PasswordRequirements;