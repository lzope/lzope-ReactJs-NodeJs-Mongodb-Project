
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import "../css/Home.css"


export function Home()
{
    return(
            
         <Container>
  <Row>
            
            
            <Col style={{ height:'200px'  }}>
                
                <img src='images/registerdac.jpg' height ='200px' width ='100%'></img>
            </Col>
            <br/>
              <br/>
              <hr/>
              <div className="div-box">
  <div className="qwe">
    <h1>Software Technology</h1>
    <ul>
      <li>
        <b>Free/Open Source Software</b>
        C-DAC is spearheading the Free/Open Source Software (FOSS) initiative within the country through its NRCFOSS & BOSS initiatives....
      </li>
      <li>
        <b>e-Governance & m-Governance</b>
        C-DAC has been instrumental in supporting the (National e-Governance Plan) NeGP's vision by working on multiple levels...
      </li>
      <li>
        <b>Emerging Solutions & E-Governance</b>
        Centre of Excellence in offering Geo-Intelligent solutions for effective planning, management, and governance....
      </li>
      <li>
        <b>ICT Solutions</b>
        Solutions for the benefit of the masses that address challenges faced by Women, differently-abled, elderly people & children...
      </li>
      <li>
        <b>E-Learning</b>
        C-DAC has developed a number of indigenous solutions for content management, evaluation and assessment, virtual classroom...
      </li>
      <li>
        <b>Authentication and e-KYC</b>
        Empanelled with UIDAI as Authentication Service Agency & Authentication User Agency (AUA) for providing Aadhaar-based authentication and e-KYC services....
      </li>
    </ul>
  </div>

        
        <img src = "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.1.1072278022.1702276424&semt=ais" alt = "log"></img>
    </div>
         
          <Row style={{ height:'300px' , width:'100%' }}>
             
           
                 
             <Col style={{ height:'300px' ,width:'100%'}}>
                 
                 <img src='images/cpjohn.jpg' height ='200px' width ='300px' ></img><br></br>
                 <p><th>Dr.C.P.Johnson ,Senior Director,CDAC Mumbai</th></p>
             </Col>
             
              <Col style={{ height:'200px' , width:'100%'}}>
                  <img src='images/kiranW.jpg' height ='200px' width ='300px' ></img>
                  <p><th>Ms.Kiran Waghmare,Course Co-ordinator,CDAC Mumbai</th></p>
                 
             </Col>
             
              <Col style={{ height:'300px' , width:'300'}}>
                 
                <img src='images/adityk.jpg' height ='200px' width ='300px' ></img>
                <p><th>Mr.Aditya Kansana,Module Co-ordinater,CDAC Mumbai</th></p>
             </Col>
             
             
             
          </Row>
          </Row>
        
          
          <Row style={{ height:'800px' , width:'1300px'}}>
             
              <Col style={{marginRight:'50px',}}>
                 <p>C-DAC Mumbai, earlier known as NCST, started operations in the Juhu campus in 1985. There are two campuses in Mumbai, at Juhu and at Kharghar. It has a rich history of cutting edge R&D in areas of Computer Graphics, Computer Networks, Language Translation, Educational Applications of AI, Resource Scheduling, etc. It was among the pioneers in bringing Internet to India through the ERNET project, and also in multi-lingual technologies.</p>
                  <h5>Notable achievements of the centre include:</h5>
                  <ul>
                      <li>First virtual trade fair system developed for Common Wealth.</li>
                        <li>A series of vehicle scheduling applications for Air India, Oil Coordination Committee, and Indian oil.</li>
                        <li>Customs Valuation project for Indian Customs, Kenya and Ethiopia.</li>
                        <li>National and State level e-Governance Service Delivery Gateway.</li>
                        <li>Biometrics solutions for Fingerprint, Iris, and Face Recognition.</li>
                        <li>A collection of virtual lab experiments for schools (Olabs)</li>
                        <li>ILO compliant seafarer identification solution for DG Shipping.</li>
                        <li>Providing the entire software solution for the GATE examination spanning from candidate registration to score report and counselling.</li>
                        <li>Mobile Seva project.</li>
                        <li>Long Range Identification and Tracking for DG Shipping.</li>
                      
                  </ul>
                  <p>
                      Currently the centre is working in areas like Authentication Technologies, Disaster Recovery, Microservice based application development, Deep Learning applications, Mobile Computing, Blockchain Solutions, Virtual Labs, Educational games, Robotics, Accessibility, Online Assessment, etc.

The Centre runs the PG-DAC and PG-DBDA 6-month diploma programmes at both the campuses, with excellent placement records so far.
                  </p>
              </Col>
              <Col style={{ height:'400px' , width:'500px'}}>
               
              </Col>
          </Row>
          
          
          
          
           
<Row style={{ height:'500px'  ,width:'100%'}}>
        
<Carousel>
          
      <Carousel.Item interval={500}>
        <img src='images/img4.jpeg' height ='500px' width ='100%' alt='cdac image'></img>
        <Carousel.Caption>
          <h3>CDAC MUMBAI</h3>
          <p>Centre for Development of Advanced Computing
                C-DAC Innovation Park.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='images/img2.jpeg' height ='500px' width ='100%' alt='cdac image'></img>
        <Carousel.Caption>
          <h3>CDAC MUMBAI</h3>
          <p>
          Centre for Development of Advanced Computing
                C-DAC Innovation Park
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img src='images/img3.jpeg' height ='500px' width ='100%' alt='cdac image'></img>
        <Carousel.Caption>
          <h3>CDAC MUMBAI</h3>
          <p>
           Centre for Development of Advanced Computing
                C-DAC Innovation Park
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img src='images/img4.jpeg' height ='500px' width ='100%' alt='cdac image'></img>
        <Carousel.Caption>
          <h3>CDAC MUMBAI</h3>
          <p>
            Centre for Development of Advanced Computing
                C-DAC Innovation Park
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img src='images/cdac-logo.png' height ='500px' width ='100%' alt='cdac image'></img>
        <Carousel.Caption>
          <h3>CDAC MUMBAI</h3>
          <p>
            Centre for Development of Advanced Computing
                C-DAC Innovation Park
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    
            </Row>
            
            
<Row  style={{ height:'400px'  ,width:'100%'}}>
         
         <Col>
             
             <h1>CENTERS</h1>
            <ul >
                <li >    Bengaluru   </li>
                <li> Chennai      </li>
                <li>   Delhi    </li>
                <li>  Hyderabad     </li>
                <li>   Kolkata    </li>
                <li>     Mohali  </li>
                <li>     Mumbai  </li>
                <li>      Noida </li>
                <li>    Patna   </li>
                <li>   Pune    </li>
                 <li>   Silchar    </li>
                  <li>   Thiruvananthapuram </li>
                 
                
            </ul>
         </Col>
          <Col>
             
             <h1>LINKS</h1>
              <ul >
                <li >    About Us   </li>
                <li> Products & Services   </li>
                <li>  R & D  </li>
                <li> Careers   </li>
                <li>   Tenders    </li>
                <li>     Press Kit </li>
                <li>     Video Gallery  </li>
                <li>      Noida </li>
                <li>    Events   </li>
                <li>Awards   </li>
                 <li>  Downloads  </li>
                  <li>   Achievements </li>
                 
                
            </ul>
         </Col>
          <Col>
             <h1>CONTACT US</h1>
             <p >Centre for Development of Advanced Computing
                C-DAC Innovation Park,
           Gulmohar Cross Road No. 9
Juhu, Mumbai - 400 049
Maharashtra (India)
Phone: +91-22-26201606/1574
Fax: +91-22-26232195/ 26210139</p>
             
         </Col>
          
          
           </Row>
            
      
    </Container>
    
    );
}