import React from 'react';
import {
  Nav, NavLink, Back, NavMenu,
} from './NavbarStyle';

function Navbar() {
  return (
    <div>
      <Nav>
        <NavMenu>
          <NavLink to="/">
            <Back />
          </NavLink>
          <h3>2022</h3>
        </NavMenu>
      </Nav>
    </div>
  );
}

export default Navbar;
