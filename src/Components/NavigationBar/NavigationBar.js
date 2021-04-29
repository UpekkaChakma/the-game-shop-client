import React, { useContext } from 'react';
import { Form, FormControl, Nav, Navbar, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './NavigationBar.css'

const NavigationBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <Navbar expand="md" id='nav'>
      <Navbar.Brand><img style={{width: '105px'}} src="https://i.ibb.co/wCQ97Z8/gameshop-logo.png" alt="gameshop-logo" border="0" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"style={{backgroundColor:'white'}} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" >
          <Nav.Link as={Link} className="m-auto nav-link" style={{color:'white'}} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} className="m-auto nav-link" style={{color:'white'}} to="/orderList">Orders</Nav.Link>
          <Nav.Link as={Link} className="m-auto nav-link" style={{color:'white'}} to="/admin/addGame">Admin</Nav.Link>
          {
              loggedInUser.email? 
                  <Image src={loggedInUser.photoURL} className="m-auto" style={{width:"40px", height:"40px"}} roundedCircle/>
                : <Nav.Link as={Link} className="m-auto" style={{color:'white'}} to="/login">Login</Nav.Link>
          }
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button className="m-auto" variant="danger">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;