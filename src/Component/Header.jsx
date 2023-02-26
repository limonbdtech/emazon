import Container from 'react-bootstrap/Container';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import logo from '../images/logo.png'
import "./Header.css"


function Header({data}) {
  return (<>
  <div className='logo'>
        <img style={{width:"25%",textAlign:"center"}} src={logo} alt="" />

  </div>
    <Navbar className='mt-2' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
    
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Shop</Nav.Link>
            <Nav.Link href="#pricing">Order Review</Nav.Link>
            <Nav.Link href="">Manage Inventory here</Nav.Link>
            
          </Nav>
         
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Navbar className='form'>
    <Container className=' py-3 '>
 <input  type="text" name="" id="" />
 <button className=' btn bg-danger d-flex align-item center gap-2'> <FontAwesomeIcon icon={faShoppingCart} /> {data}</button>
    </Container>
    </Navbar>
   
    </>
  );
}

export default Header;