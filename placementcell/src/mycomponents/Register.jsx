import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Nav, Alert } from 'react-bootstrap';
import { saveStudents } from '../services/studentservices.js';
import '../css/Register.css';

export function Register() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [formdata, setFormdata] = useState({
    name: '',
    prn: '',
    email: '',
    password: '',
    centre: '',
    year: '',
    cgpa: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

//name
    if (!formdata.name.trim()) {
      errors.name = 'Name cannot be empty ';
    }
//PRN
    if (!/^\d{12}$/.test(formdata.prn)) {
      errors.prn = 'PRN must be a 12-digit number';
    }

//CGPA
    if (!/^(10(\.0)?|[0-9](\.\d)?)$/.test(formdata.cgpa)) {
      errors.cgpa = 'CGPA must be a number between 0.0 - 10.0';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const result = await saveStudents(formdata);
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, 1500);
        console.log('Data inserted from frontend');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
    <Container className="mt-3">
      <h1>Registration Form</h1>
      <Row>
        <Col>
          {isSubmitted ? (
            <Alert variant="success">Student Registered Successfully!</Alert>
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
                  <Form.Control type="fname" placeholder="Enter Full Name" onKeyUp={handleChange} name="name" />
                  <Form.Text className="text-danger">{errors.name}</Form.Text>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formHorizontalPRN">
                <Form.Label column sm={2}>
                  PRN
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="prn" placeholder="Enter PRN" onKeyUp={handleChange} maxLength={12} minLength={12} name="prn" />
                  <Form.Text className="text-danger">{errors.prn}</Form.Text>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="email" placeholder="Email" onKeyUp={handleChange} name="email" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                  Password
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="password" placeholder="Password" onKeyUp={handleChange} name="password" />
                </Col>
              </Form.Group>

              <Form.Select aria-label="Default select example" className="mb-3" controlId="formHorizontalCentre" onChange={handleChange} name="centre">
                <option>Select centre</option>
                <option value="juhu">Juhu</option>
                <option value="Kharghar">Kharghar</option>
              </Form.Select>

              <Form.Select aria-label="Default select example" className="mb-3" controlId="formHorizontalYear" onChange={handleChange} name="year">
                <option>Select Year</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="Below 2022">Below 2022</option>
              </Form.Select>

              <Form.Group as={Row} className="mb-3" controlId="formHorizontalCgpa">
                <Form.Label column sm={2}>
                  CGPA
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="number" placeholder="Enter C.G.P.A" onKeyUp={handleChange} maxLength={1} minLength={1} name="cgpa" />
                  <Form.Text className="text-danger">{errors.cgpa}</Form.Text>
                </Col>
              </Form.Group>

              <Button variant="secondary" type="submit">
                Register
              </Button>{' '}
              <p className="mb-3">
                Already have an account?{' '}
                <Nav.Link href="/login" className="mb-1">
                  Click To Login
                </Nav.Link>
              </p>
            </Form>
          </Col>
          <Col>
        <img src='https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?w=1380&t=st=1702209658~exp=1702210258~hmac=6b98c536fe7fd0418377ebe55f2983755fb2a149d95b1f3804dbb95d756929ab' width='690' height='550'></img>
        </Col>
        </Row>
      </div>
    </Container>
  );
}
