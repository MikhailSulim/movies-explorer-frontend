import { Link } from 'react-router-dom';
import header_logo from '../../images/header_logo.svg';

function Header({ route, onClick }) {
  return (
    <header className="header">
      <Link to={route} onClick={onClick}>
        <img className="header__logo" src={header_logo} alt='логотип проекта'/>
      </Link>
    </header>
  );
}

export default Header;
