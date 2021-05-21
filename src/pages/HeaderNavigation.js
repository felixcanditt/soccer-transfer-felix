import { NavLink } from 'react-router-dom';

export default function HeaderNavigation() {
  return (
    <header className="header">
      <nav className="navigation">
        <NavLink exact to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/players" className="link">
          Players
        </NavLink>
        <NavLink to="/shopping-cart" className="link">
          Shopping Cart
        </NavLink>
      </nav>
    </header>
  );
}
