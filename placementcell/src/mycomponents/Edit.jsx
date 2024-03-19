import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Editdata, saveStudents, updateStudents } from '../services/studentservices.js';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function Edit() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [formdata, setFormdata] = useState({
    name: '',
    prn: '',
    email: '',
    password: '',
    centre: '',
    year: '',
    cgpa: 0,
  });
  const param = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       console.log(param.prn);
      const result = await updateStudents(formdata,param.prn);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 1500);
      console.log("Data inserted from frontend");
    } catch (error) {
      console.log('Error submitting data:', error);
    }
  };

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const populateData = async () => {
    try {
      const response = await Editdata(param.prn);
      console.log('Response from server:', response);
      console.log(response);
      setFormdata(response);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    populateData();
  }, [param.prn]);

  return (
    <Container className="mt-3">
      <h1>Update Student Data</h1>
      <Row>
        <Col>
          {isSubmitted ? (
            <Alert variant="success">Student Updated Successfully!</Alert>
          ) : null}
        </Col>
      </Row>
      <div className="main-div">
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="formHorizontalFullname">
                <Form.Label column sm={2}>
                  Full_Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Enter Full Name" onChange={handleChange} name="name" value={formdata.name} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formHorizontalPRN">
                <Form.Label column sm={2}>
                  PRN
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Enter PRN" onChange={handleChange} name="prn" value={formdata.prn} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="email" placeholder="Enter Email" onChange={handleChange} name="email" value={formdata.email} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                  Password
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Enter Password" onChange={handleChange} name="password" value={formdata.password} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formHorizontalCentre">
                <Form.Label column sm={2}>
                  Centre
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Enter Centre" onChange={handleChange} name="centre" value={formdata.centre} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formHorizontalYear">
                <Form.Label column sm={2}>
                  Year
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Enter Year" onChange={handleChange} name="year" value={formdata.year} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formHorizontalCgpa">
                <Form.Label column sm={2}>
                  CGPA
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Enter CGPA" onChange={handleChange} name="cgpa" value={formdata.cgpa} />
                </Col>
              </Form.Group>

              <Button variant="success" type="submit">
                Update
              </Button>{' '}
              
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
