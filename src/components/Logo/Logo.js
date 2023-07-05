import { Link } from 'react-router-dom';
import logo from './../../images/logo.svg';

import './Logo.css';

function Logo({onClearError}) {
  return (
    <div className="logo">
      <Link to="/" className="logo__link">
        <img className="logo__img" src={logo} alt="логотип проекта" onClick={onClearError}/>
      </Link>
    </div>
  );
}

export default Logo;
