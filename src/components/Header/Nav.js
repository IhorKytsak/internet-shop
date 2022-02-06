import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/internet-shop'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/catalog'>Catalog</NavLink>
        </li>
        <li>
          <NavLink to='/cart'>Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
