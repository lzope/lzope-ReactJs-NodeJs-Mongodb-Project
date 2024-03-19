
 import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import "../css/Cell.css"

export function Cell()
{
    return(
           
                    <Container className="mt-5">
                      <p> <h1><b>Cell Login</b></h1></p>
                      <div className='bb'>
                      <Row >

                        <Col className="mt-5">
                        <div className="main-login">
                        <div className="login">
                           
                        <div className="mt-5" ><p > <b>Cell Login</b></p></div>
                         <FloatingLabel controlId="floatingInputCellemail" label="Email address" className="mb-3">
                            <Form.Control type="cellemail" placeholder="name@example.com" />
                         </FloatingLabel>
                         <FloatingLabel controlId="floatingInputCellpassword" label="Password">
                            <Form.Control type="password" placeholder="Password" />
                         </FloatingLabel>
                        <br />
                        <br />
                        <Button variant="secondary" type="submit">Login</Button>{' '}
                         
                            <p className="mb-3">Don't Have Acoount?  <Nav.Link href="/cellregister" className="mb-1">Click here for sigup</Nav.Link></p>
                            </div>
                            <img src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=826&t=st=1702210558~exp=1702211158~hmac=2b89a67baee141f134e7b9959df138091951b8744816ee46a5657611b0b025ab" alt="logo"  width='690' height='550' />
                            </div>  
                        </Col>
                      </Row>
                      </div>
                    </Container>
            
        
    );
}
        