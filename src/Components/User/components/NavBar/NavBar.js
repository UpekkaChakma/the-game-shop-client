import React, { useContext } from 'react';
import { Nav, Navbar, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXbox } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import './NavBar.css'

const NavigationBar = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <Navbar expand="md" id='nav' className='w-full py-0 px-3 px-md-5' variant="dark">
      <Navbar.Brand className='d-flex flex-column justify-content-center align-items-center'>
        <FontAwesomeIcon icon={faXbox} className="text-white h2 mt-1" />
        <h6>GAME SHOP</h6>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" >
          <Nav.Link as={Link} className="nav-link lh-2 mr-4" to="/">Home</Nav.Link>
          <Nav.Link as={Link} className="nav-link lh-2 mr-4" to="/my-library">Library</Nav.Link>
          <Nav.Link as={Link} className="nav-link lh-2 mr-4" to="/admin/add">Admin</Nav.Link>
          {
            loggedInUser.email ?
              <Image
                src={loggedInUser.photo}
                className="mx-2 my-1"
                style={{ width: "40px", height: "40px", backgroundColor: 'rgba(0,0,0,0.4)' }}
                roundedCircle
              />
              :
              <Nav.Link as={Link} to="/login">
                <Button variant="dark" className="px-3">Login</Button>
              </Nav.Link>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;