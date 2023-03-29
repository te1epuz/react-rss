import { NavLink } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="navbar">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/forms">Forms</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        <hr />
      </nav>
    </header>
  );
}
