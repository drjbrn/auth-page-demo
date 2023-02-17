import './ValidationPassword.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const passwordRules = [
  'At least 8 Characters',
  'Lower case letters (a-z)',
  'Upper case letters (A-Z)',
  'Numbers (0-9)',
]

function RenderCheckPassword({ password }) {
  const regexNumber = /[0-9]/g;
  const regexUpperCase = /[A-Z]/g;
  const regexLowerCase = /[a-z]/g;

  // const listItem = passwordRules.map((elem) => 
  //   <li>
  //         { password.length >= 8
  //           ? <FontAwesomeIcon icon={faCircleCheck} />
  //           : <FontAwesomeIcon icon={faCircle} />
  //         }
  //         {elem}
  //   </li>
  // );

  return (
    <div className="check-password">
      <p className="check-password__text">
        Your password must contain:
      </p>
      <ul className="check-password__list">
        {/* {listItem} */}
        <li className='check-password__item'>
          { password.length >= 8
            ? <FontAwesomeIcon icon={faCircleCheck} />
            : <FontAwesomeIcon icon={faCircle} />
          }
          At least 8 Characters
        </li>
        <li className='check-password__item'>
          { regexLowerCase.test(password)
            ? <FontAwesomeIcon icon={faCircleCheck} />
            : <FontAwesomeIcon icon={faCircle} />
          }
          Lower case letters (a-z)
        </li>
        <li className='check-password__item'>
          { regexUpperCase.test(password)
            ? <FontAwesomeIcon icon={faCircleCheck} />
            : <FontAwesomeIcon icon={faCircle} />
          }
          Upper case letters (A-Z)
        </li>
        <li className='check-password__item'>
          { regexNumber.test(password)
            ? <FontAwesomeIcon icon={faCircleCheck} />
            : <FontAwesomeIcon icon={faCircle} />
          }
          Numbers (0-9)
        </li>
      </ul>
    </div>
  )
}

export default RenderCheckPassword;