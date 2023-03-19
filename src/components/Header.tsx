import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul className="navbar">
            <li>
              <NavLink to="/">Home</NavLink>
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
}

export default Header;
