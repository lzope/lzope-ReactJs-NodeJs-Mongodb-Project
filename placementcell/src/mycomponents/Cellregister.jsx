import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState} from 'react';
import {fetchCell} from '../services/cellsservices.js';
import {saveCell} from '../services/cellsservices.js';
import Alert from 'react-bootstrap/Alert';
import "../css/Cellregister.css"



export function Cellregister()
{
    
    const [celldata,setcelldata]=useState({cellname:"",cellemail:"",cellpassword:"",celllocation:""});
    const [iscellSubmitted,setcellSubmitted]=useState(false);
    
        const handleCellSubmit=async(e)=>{
        
        e.preventDefault();
        try{
            
            const result = await  saveCell(celldata);
            setcellSubmitted(true);
            setTimeout(()=>{
                setcellSubmitted(false);
            },1500);
            console.log("Data insertef from fronted");
          
        }catch(error)
            {
                console.log(error);
            }
        console.log(celldata);
    }

    const handlecellChange=(e)=>{
      setcelldata({ ...celldata , [e.target.name]:e.target.value});
    }
   
    return(
            
        
        
       <Container className="mt-3">
         <h1>Cell Registration Form</h1>
         <Row>
                        <Col >
                           {
                                iscellSubmitted?<Alert variant='success'>Company Registered Succesfully!</Alert>:null
                            }
                            
                        </Col>
        
        </Row>
         <div className='main-box'>
          <Row>
        <Col >
        <div className='form-reg'>
            <Form  onSubmit={handleCellSubmit}>
            
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCellname" >
                    <Form.Label column sm={2}>Company_Name</Form.Label>
                    <Col sm={10}>
                    <Form.Control type="cellname" placeholder="Enter Company Name"  onKeyUp={handlecellChange} name="cellname"/>
                    </Col>
                    </Form.Group>
                    
                    
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCellname" >
                    <Form.Label column sm={2}>Company_Location</Form.Label>
                    <Col sm={10}>
                    <Form.Control type="celllocation" placeholder="Enter Company Location"  onKeyUp={handlecellChange} name="celllocation"/>
                    </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCellemail">
                    <Form.Label column sm={2}>Email</Form.Label>
                    <Col sm={10}> <Form.Control type="cellemail" placeholder="Email" onKeyUp={handlecellChange} name="cellemail"/> </Col>
                    </Form.Group>

                   
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCellpassword">
                    <Form.Label column sm={2}>Password</Form.Label>
                    <Col sm={10}>
                    <Form.Control type="cellpassword" placeholder="Password" onKeyUp={handlecellChange} name="cellpassword"/>
                    </Col>
                    </Form.Group>
                    
                   
                    
                      
                    <Button variant="secondary" type="submit">Register</Button>{' '}
                    <p className="mb-3">Already have account? <Nav.Link href="/cell" className="mb-1">Click To Login</Nav.Link></p>
                    
                    
                    
            </Form>
            </div>
        </Col>
        
        
        
        <Col>
        <img src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?w=740&t=st=1702276441~exp=1702277041~hmac=c8b2382102168883366f219bc3d51e4aafb02e4ef676e5ca4ab61c54c1613d2e" width='590' height='550'></img>
        </Col>
        
        
         </Row>
         </div>
         </Container>
        
    );
}