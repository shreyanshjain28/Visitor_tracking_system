//import Container from 'react-bootstrap/Container';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './styles.css'
//import { Home } from '../../pages/Home';

const header = () => {
  return (
    <>
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
          <Container className='container'><Navbar.Brand className='me-auto' as={ Link } to='/'>JHS Durham - Clarington Youth Centres</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='linkTest' as={ Link } to='/'>Home</Nav.Link>
            <Nav.Link className='linkTest' as={ Link } to='SiteSelect'>Login</Nav.Link>
            <Nav.Link className='linkTest' as={ Link } to='Register'>Registration</Nav.Link>
            <Nav.Link className='linkTest' as={ Link } to='StaffLogin'>Staff Login</Nav.Link>
            {/* <Nav.Link as={ Link } href="#">Exit</Nav.Link> */}
          </Nav>
          </Container>
      </Navbar>
      </div>
      {/* <div>
      <Routes>
            <Route exact path='/' component='Home' />
            <Route render={function () {
              return <p>Not found</p>
            }} />
      </Routes>
      </div> */}
    </>
  );
}


export default header;