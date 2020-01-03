import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>My Testing App</h1>
      <div className='nav-links flex-box'>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/todos'>
            <li>Todos</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
