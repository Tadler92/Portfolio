import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div className="NavBar">
      <Navbar expand="md">
        <NavLink to="/" className="navbar-brand">
          Homepage
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className='mx-2' to="/move-awards-draft">
              Python/Flask Project
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='mx-2' to="/react-jobly">
              React Project
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='mx-2' to="/contact-me">Contact Me</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;