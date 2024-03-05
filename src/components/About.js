import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import bulb from '../assets/image/bulb.png';
import './About.css';
import shield from '../assets/image/shield.png';
import repair from '../assets/image/repair.png';


export default function About(props) {

    return(
        <div className="container-fluid jk" >
            <div className="accordion" id="accordionExample" >
                <br></br><br></br><br></br><br></br>
                <Accordion defaultActiveKey="0">
                <Row>
                    <Col>
                    
                           <Accordion.Item eventKey="0">
                              <Accordion.Header className='car'><p><img src={bulb} alt='Management' className='par'></img></p>
                                   
                                   <p><strong className='pal'>Smart Management</strong></p> 
                              </Accordion.Header>
                              <Accordion.Body className='pal1'>
                                  <p>Feature-rich online monitoring via App or Web<br></br>
                                  Firmware updates & new monitoring features<br></br>
                                  Fast and easy commissioning via App or LCD</p>
                                  <br></br><br></br><br></br> <br></br> 
                                  <p>Find Out More</p>
                                  <br></br><br></br>
                              </Accordion.Body>
                            </Accordion.Item>
                      
                    </Col>
                    <Col>
                   
                    <Accordion.Item eventKey="1">
                              <Accordion.Header className='car1'><p><img src={shield} alt='Reliable' className='par'></img>   <br/></p>
                                  
                                   <p><strong className='pal'>Safe & Reliable</strong></p> 
                              </Accordion.Header>
                              <Accordion.Body className='pal1'>
                                  <p>Feature-rich online monitoring via App or Web<br></br>
                                  Firmware updates & new monitoring features<br></br>
                                  Fast and easy commissioning via App or LCD</p>
                                  <br></br><br></br><br></br> <br></br> 
                                  <p>Find Out More</p>
                                  <br></br><br></br>
                              </Accordion.Body>
                            </Accordion.Item>
                          
                    </Col>
                    <Col>
                   
                    <Accordion.Item eventKey="2">
                              <Accordion.Header className='car2'><p><img src={repair} alt='install' className='par'></img></p>
                                 
                                   <p><strong className='pal'>Easy Installation</strong></p> 
                              </Accordion.Header>
                              <Accordion.Body className='pal1'>
                                  <p>Trained Professionals<br></br>
                                  Hassle Free Service<br></br><br></br><br></br></p>
                                  <br></br><br></br><br></br>  
                                  <p>Find Out More</p>
                                  <br></br><br></br>
                              </Accordion.Body>
                            </Accordion.Item>
                        
                    </Col>
                </Row>
               </Accordion>
            </div>




          
        </div>
    )
}