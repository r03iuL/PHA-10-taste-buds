import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from '../providers/AuthProbider';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Header() {
  const {user,logOut} = useContext(AuthContext)
  
  const handelLogOut =()=>{
    logOut()
    .then()
    .catch(error=>console.log(error))
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="" variant="" className='p-4 bg-warning'>
    <Container>
      <Navbar.Brand href="/"> <h2>TasteBuds</h2></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/"> <h3>Home</h3></Nav.Link>
          <Nav.Link href="/blog"><h3>Blog</h3></Nav.Link>
        </Nav>
        <Nav>
          {user && <Nav.Link href=""><FaUserCircle style={{fontSixe :"2rem"}}></FaUserCircle><img className='rounded-circle'style={{height:'40px'}} src={user.photoURL} alt="" /></Nav.Link>}
        </Nav>
        <Nav>
          <Nav.Link href="">{
            user ? <Link to='/login'><Button onClick={handelLogOut} variant="light">LogOut</Button></Link>:<div> <Link to='/login'><Button variant="warning">Login</Button></Link><Link to='/register'><Button className='ms-2' variant="warning">Register</Button></Link></div>
}</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header