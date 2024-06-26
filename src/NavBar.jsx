import { useState } from "react";

import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { 
  Navbar, 
  Nav, 
  NavItem, 
  Collapse,
  NavbarToggler,
} from "reactstrap";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="NavBar">
      <Navbar expand="md">
        <NavLink 
          to="/" 
          className="navbar-brand NavBar-homepage"
          // onClick={toggle}
        >
          Homepage
        </NavLink>

        <NavbarToggler onClick={toggle} />

        <Collapse className="justify-content-end" isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink 
                className='mx-2' 
                to="/move-awards-draft" 
                onClick={toggle}
              >
                Python/Flask Project
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                className='mx-2' 
                to="/react-jobly"
                onClick={toggle}
              >
                React Project
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                className='mx-2' 
                to="/contact-me"
                onClick={toggle}
              >
                Contact Me
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;