import { Link } from 'react-router-dom';
import logo from "./../../images/logo.svg";

import './Logo.css';

function Logo() {
  return (
    <Link to="/" className='logo__link'>
      <img className="logo" src={logo} alt="логотип проекта" />
    </Link>
  );
}

export default Logo;
