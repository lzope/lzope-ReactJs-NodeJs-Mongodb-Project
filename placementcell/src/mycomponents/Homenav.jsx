
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../css/Navbar.css"

export function Homenav()
{
    return(
            
    
      <div>        
    <Navbar bg="dark" className='main' data-bs-theme="dark">
      <Container >
        
        <Navbar.Brand href="#home"><a href="/"><img src="https://www.cdac.in/img/cdac-logo.png" alt='logo'/></a></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/cell">Cell_Login</Nav.Link>

            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Student_Registration</Nav.Link>
            <Nav.Link href="/cellregister">Cell_Registration</Nav.Link>
            <Nav.Link href="/studentlist">Student_List</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>        
          
            
       
    );
}