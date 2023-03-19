import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from './Footer';

class Layout extends React.Component {
  render() {
    return (
      <>
        <header>
          <h2>this is header</h2>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
        </header>
        <Outlet />
        <Footer />
      </>
    );
  }
}

export default Layout;
