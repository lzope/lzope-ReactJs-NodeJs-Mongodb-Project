import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import "../css/About.css"



export function About()
{
  return (

    <>
     <br />
    <h1>TEAM-26</h1>
    <br />
    <hr />
    <center>
<div className="info">
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>About Team 26 - Web Wizards</b></Accordion.Header>
        <Accordion.Body>
        Welcome to the digital realm crafted by Team 26 - a dynamic group of talented individuals passionate about web development. As the architects behind our project, we blend creativity, innovation, and technical expertise to bring you a seamless and engaging online experience.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><b>Our Vision</b></Accordion.Header>
        <Accordion.Body>
        Team 26 envisions a digital landscape where innovation meets functionality. Through collaborative efforts, we aim to redefine the online experience, providing our users with a platform that not only meets but exceeds their expectations.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><b>Join Us on the Journey</b></Accordion.Header>
        <Accordion.Body>
        As we embark on this exciting web development journey, we invite you to explore, engage, and be a part of our evolving project. Whether you're a user navigating through our interfaces or a fellow developer inspired by our code, Team 26 welcomes you to our digital world.
        <br />
        Thank you for being a part of our story.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><b>Meet Our Team</b></Accordion.Header>
        <Accordion.Body>
          
        1. Lalit: The Code Connoisseur
        Lalit is our coding maestro, navigating through the intricate web of technologies with finesse. With an eye for detail and a penchant for problem-solving, Lalit ensures that our project's backend is robust and efficient.
        <br /><hr />
        2. Urmila: The Design Dynamo
        Urmila, the creative force of our team, transforms ideas into visually stunning realities. Her design prowess gives our project a distinct and captivating aesthetic, ensuring a delightful user experience.
        <br /><hr />
        3. Shwetal: The UX Alchemist
        Shwetal is our user experience expert, crafting interfaces that seamlessly connect with users. With a deep understanding of user behavior, she ensures that our project is intuitive and user-friendly.
                
        
        </Accordion.Body>
      </Accordion.Item> 



    </Accordion>
  
    </div></center>
    <div className="div-for-flex">


      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="data:image/png;base64,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" />
        <Card.Body>
          <Card.Title>Lalit Zope</Card.Title>
          <Card.Text>
            Name : Lalit Zope<br />
            PRN : 230940520036<br />
            Branch : Juhu<br />

            <hr />
          </Card.Text>
          <a href="https://www.linkedin.com/in/lalit-zope-4124a5116/"><Button variant="primary">Linkedin</Button></a>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShyZWYPEncWdEfHARCCc_DcvFFf1f1qcAgxQ&usqp=CAU"/>
        <Card.Body>
          <Card.Title>Shwetal Talavdekar</Card.Title>
          <Card.Text>
            Name : Shwetal Talavdekar<br />
            PRN : 230940320111<br />
            Branch : Kharghar<br />
            <hr />
          </Card.Text>
          <a href="https://www.linkedin.com/in/shwetal-talavdekar-a1354b139/"><Button variant="primary">Linkedin</Button></a>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="data:image/png;base64,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" />
        <Card.Body>
          <Card.Title>Urmila Nagdive</Card.Title>
          <Card.Text>
            Name : Urmila Nagdive <br />
            PRN : 230940520091 <br />
            Branch : Juhu  <br />

            <hr />
          </Card.Text>
          <a href="https://www.linkedin.com/in/urmilanagdive2311/"><Button variant="primary">Linkedin</Button></a>
        </Card.Body>
      </Card>
      <br />
      <hr />
    </div>

    </>
  );
}
