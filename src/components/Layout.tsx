import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
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
      <footer>
        <h3>this is footer</h3>
      </footer>
    </>
  );
}

export default Layout;
