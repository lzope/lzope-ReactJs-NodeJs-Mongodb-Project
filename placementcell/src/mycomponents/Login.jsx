
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import {login} from '../services/loginservice.js';
import "../css/Login.css"
import {useNavigate } from "react-router-dom";


export function Login()
{
    const navigate = useNavigate();
    
    const [loginformdata,setLogin] = useState({email:"",password:""});
    
    
    const handlelogin=(e)=>{
        setLogin({...loginformdata,[e.target.name]:e.target.value});
    }
    const handleloginsubmit = async(e) =>{
        e.preventDefault();
        try{
            const result = await login(loginformdata);
            if(result){
                navigate("/dashboard");
            }
            else{
                console.log("Login not autheticate");
            }
            
            
        }
        catch(error)
            {
                console.log(error);
            }
        console.log(loginformdata);
    }
    
    return(
      
                    <Container className="mt-5">
                      <h1>Login</h1>
                      <div className='main-box'>
                      <Row >
                        <Col className="mt-5">
                        <div className="main-login">
                          <div className="login">
                            <div className="mt-5" ><p > <b>Login</b></p></div>
                        
                        <Form  onSubmit={handleloginsubmit}>
                         <FloatingLabel controlId="floatingInputEmail" label="Email address" className="mb-3">
                            <Form.Control type="email" name="email" placeholder="name@example.com" onChange={handlelogin}/>
                         </FloatingLabel>
                         <FloatingLabel controlId="floatingInputPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" name="password" onChange={handlelogin}/>
                         </FloatingLabel>
                        <br />
                        <br />
                        <Button variant="secondary" type="submit" >Login</Button>{' '}
                        <br />
                   
                            <p className="mb-3">Don't Have Acoount?  <Nav.Link href="/register" className="mb-1">Click here for sigup</Nav.Link></p>
                            
                              </Form>
                        
                         </div>
                        <img src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=826&t=st=1702210558~exp=1702211158~hmac=2b89a67baee141f134e7b9959df138091951b8744816ee46a5657611b0b025ab" alt="logo"  width='690' height='550' />
                            </div>  
                            
                            
                        </Col>
                      </Row>
                      </div>
                    </Container>
            
                    
    );
}