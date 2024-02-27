import "./App.css";
import facebook from "./assets/image/facebook.png";
import instagram from "./assets/image/instagram.png";
import twitter from "./assets/image/twitter.png";
import youtube from "./assets/image/youtube.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import About from "./components/About";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import minus from "./assets/image/minus.png";
import plus from "./assets/image/plus.png";
import LED from "./assets/image/LED.png";
import Stepper from "react-stepper-horizontal";

function App() {
  const [show, setShow] = useState(false);
  const onShowClick = () => {
    if (show === false) {
      setShow(true);
    } else setShow(false);
  };

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else setCount(0);
  };

  const [count1, setCount1] = useState(0);
  const increment1 = () => {
    setCount1(count1 + 1);
  };
  const decrement1 = () => {
    if (count1 > 0) {
      setCount1(count1 - 1);
    } else setCount1(0);
  };

  const [count2, setCount2] = useState(0);
  const increment2 = () => {
    setCount2(count2 + 1);
  };
  const decrement2 = () => {
    if (count2 > 0) {
      setCount2(count2 - 1);
    } else setCount2(0);
  };

  const [count3, setCount3] = useState(0);
  const increment3 = () => {
    setCount3(count3 + 1);
  };
  const decrement3 = () => {
    if (count3 > 0) {
      setCount3(count3 - 1);
    } else setCount3(0);
  };

  const [count4, setCount4] = useState(0);
  const increment4 = () => {
    setCount4(count4 + 1);
  };
  const decrement4 = () => {
    if (count4 > 0) {
      setCount4(count4 - 1);
    } else setCount4(0);
  };

  const [count5, setCount5] = useState(0);
  const increment5 = () => {
    setCount5(count5 + 1);
  };
  const decrement5 = () => {
    if (count5 > 0) {
      setCount5(count5 - 1);
    } else setCount5(0);
  };

  const [count6, setCount6] = useState(0);
  const increment6 = () => {
    setCount6(count6 + 1);
  };
  const decrement6 = () => {
    if (count6 > 0) {
      setCount6(count6 - 1);
    } else setCount6(0);
  };

  const [count7, setCount7] = useState(0);
  const increment7 = () => {
    setCount7(count7 + 1);
  };
  const decrement7 = () => {
    if (count7 > 0) {
      setCount7(count7 - 1);
    } else setCount7(0);
  };

  // const [count8, setCount8] = useState(0);
  // const increment8 = () =>{
  //   setCount8(count8 + 1)
  // }
  // const decrement8 = () =>{
  //   if(count8>0){
  //   setCount8(count8 - 1)
  // } else setCount8(0);
  // };

  const Reset = () => {
    setCount(0);
    setCount1(0);
    setCount2(0);
    setCount3(0);
    setCount4(0);
    setCount5(0);
    setCount6(0);
    setCount7(0);
  };

  function Calculate() {
    return (
      <div className="container-fluid">
        <Row>
          <Col md={5}>
            <Form.Label>Enter Total Load (In Watts)</Form.Label>
            <Form.Control placeholder="Enter the Value or Calculate via Estimation Tool" />
          </Col>
          <Col md={2} className="kg">
            OR
          </Col>
          <Col md={5} className="came2">
            <button onClick={onShowClick} className="mul">
              Calculate via Estimation tool
            </button>
          </Col>
          <Col md={12}>
            <br></br>
            {show && (
              <Card>
                <br></br>
                <br></br>
                <Row className="subb">
                  <Col md={10} className="dina">
                    <h4>Load Estimation Tool</h4>
                  </Col>
                  <Col md={1} className="dina1">
                    <button onClick={Reset} className="sam">
                      <h5>Reset</h5>
                    </button>
                  </Col>
                  <Col md={1} className="dina2">
                    <button onClick={onShowClick} className="sam">
                      <h5>Collapse</h5>
                    </button>
                  </Col>
                </Row>
                <Row>
                  <Col></Col>
                </Row>
                <br></br>
                <br></br>
                <Tab.Container defaultActiveKey="Light">
                  <Nav fill variant="pills" className="dip">
                    <Nav.Item>
                      <Nav.Link className="bar" eventKey="Light">
                        Lights
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="bar" eventKey="Fan">
                        Fan
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="bar" eventKey="HomeAppliance">
                        Home Appliances
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="bar" eventKey="Laptop" disabled>
                        Laptop & Computer
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="bar" eventKey="Motor" disabled>
                        Motor
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        className="bar"
                        eventKey="OtherAppliance"
                        disabled
                      >
                        Other Appliances
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <br />
                  <h4 className="man">
                    Total Load : &nbsp;
                    {count * 8 +
                      count1 * 12 +
                      count2 * 43 +
                      count3 * 75 +
                      count4 * 1500 +
                      count5 * 150 +
                      count6 * 800 +
                      count7 * 50}{" "}
                    Watts
                  </h4>
                  <Tab.Content className="pav">
                    <Tab.Pane eventKey="Light">
                      <Row>
                        <Col style={{ display: "flex" }}>
                          <Col md={2} style={{ display: "flex" }}>
                            <div>
                              <Card
                                style={{
                                  width: "10rem",
                                  alignItems: "center",
                                  display: "flex",
                                }}
                              >
                                <p style={{ textAlign: "center" }}>
                                  LED Bulb - 8W
                                </p>
                                <img
                                  src={LED}
                                  alt="LedBulb"
                                  style={{ width: "56px", height: "96px" }}
                                />
                                <br />
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    textAlign: "center",
                                  }}
                                >
                                  <button
                                    type="rounded-button"
                                    onClick={decrement}
                                    style={{
                                      borderRadius: "50%",
                                      justifyContent: "center !important",
                                      textAlign: "center !important",
                                      border: "1px solid",
                                    }}
                                  >
                                    <img src={minus} alt="decrease" />
                                  </button>
                                  <h6
                                    style={{
                                      paddingLeft: "10px",
                                      paddingRight: "10px",
                                    }}
                                  >
                                    {count}
                                  </h6>
                                  <button
                                    type="rounded-button"
                                    onClick={increment}
                                    style={{
                                      borderRadius: "50%",
                                      justifyContent: "center !important",
                                      textAlign: "center !important",
                                      border: "1px solid",
                                    }}
                                  >
                                    <img src={plus} alt="increase" />
                                  </button>
                                </div>
                              </Card>
                              <p
                                style={{
                                  textAlign: "center",
                                  fontWeight: "bold",
                                }}
                              >
                                {count * 8} Watts
                              </p>
                            </div>
                          </Col>

                          <Col md={2} style={{ display: "flex" }}>
                            <div>
                              <Card
                                style={{
                                  width: "10rem",
                                  alignItems: "center",
                                  display: "flex",
                                }}
                              >
                                <p style={{ textAlign: "center" }}>CFL - 12W</p>
                                <img
                                  src={LED}
                                  alt="LedBulb"
                                  style={{ width: "56px", height: "96px" }}
                                />
                                <br />
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    textAlign: "center",
                                  }}
                                >
                                  <button
                                    type="rounded-button"
                                    onClick={decrement1}
                                    style={{
                                      borderRadius: "50%",
                                      justifyContent: "center !important",
                                      textAlign: "center !important",
                                      border: "1px solid ",
                                    }}
                                  >
                                    <img src={minus} alt="decrease" />
                                  </button>
                                  <h6
                                    style={{
                                      paddingLeft: "10px",
                                      paddingRight: "10px",
                                    }}
                                  >
                                    {count1}
                                  </h6>
                                  <button
                                    type="rounded-button"
                                    onClick={increment1}
                                    style={{
                                      borderRadius: "50%",
                                      justifyContent: "center !important",
                                      textAlign: "center !important",
                                      border: "1px solid",
                                    }}
                                  >
                                    <img src={plus} alt="increase" />
                                  </button>
                                </div>
                              </Card>
                              <p
                                style={{
                                  textAlign: "center",
                                  fontWeight: "bold",
                                }}
                              >
                                {count1 * 12} Watts
                              </p>
                            </div>
                          </Col>

                          <Col md={6} style={{ display: "flex" }}>
                            <div>
                              <Card
                                style={{
                                  width: "10rem",
                                  alignItems: "center",
                                  display: "flex",
                                }}
                              >
                                <p style={{ textAlign: "center" }}>
                                  Tube Light - 43W
                                </p>
                                <img
                                  src={LED}
                                  alt="LedBulb"
                                  style={{ width: "56px", height: "96px" }}
                                />
                                <br />
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    textAlign: "center",
                                  }}
                                >
                                  <button
                                    type="rounded-button"
                                    onClick={decrement2}
                                    style={{
                                      borderRadius: "50%",
                                      justifycontent: "center !important",
                                      textAlign: "center !important",
                                      border: "1px solid ",
                                    }}
                                  >
                                    <img src={minus} alt="decrease" />
                                  </button>
                                  <h6
                                    style={{
                                      paddingLeft: "10px",
                                      paddingRight: "10px",
                                    }}
                                  >
                                    {count2}
                                  </h6>
                                  <button
                                    type="rounded-button"
                                    onClick={increment2}
                                    style={{
                                      borderRadius: "50%",
                                      justifyContent: "center !important",
                                      textAlign: "center !important",
                                      border: "1px solid",
                                    }}
                                  >
                                    <img src={plus} alt="increase" />
                                  </button>
                                </div>
                              </Card>
                              <p
                                style={{
                                  textAlign: "center",
                                  fontWeight: "bold",
                                }}
                              >
                                {count2 * 43} Watts
                              </p>
                            </div>
                          </Col>
                          <Col md={1}></Col>
                        </Col>
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Fan">
                      <Row>
                        <Col md={2} style={{ display: "flex" }}>
                          <div>
                            <Card
                              style={{ width: "10rem", alignItems: "center" }}
                            >
                              <p style={{ textAlign: "center" }}>
                                Ceiling Fan - 75W
                              </p>
                              <img
                                src={LED}
                                alt="LedBulb"
                                style={{ width: "56px", height: "96px" }}
                              />
                              <br />
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  textAlign: "center",
                                }}
                              >
                                <button
                                  type="rounded-button"
                                  onClick={decrement3}
                                  style={{
                                    borderRadius: "50%",
                                    justifyContent: "center !important",
                                    textAlign: "center !importan",
                                    border: "1px solid ",
                                  }}
                                >
                                  <img src={minus} alt="decrease" />
                                </button>
                                <h6
                                  style={{
                                    paddingLeft: "10px",
                                    paddingRight: "10px",
                                  }}
                                >
                                  {count3}
                                </h6>
                                <button
                                  type="rounded-button"
                                  onClick={increment3}
                                  style={{
                                    borderRadius: "50%",
                                    justifyContent: "center !important",
                                    textAlign: "center !important",
                                    border: "1px solid",
                                  }}
                                >
                                  <img src={plus} alt="increase" />
                                </button>
                              </div>
                            </Card>

                            <p
                              style={{
                                textAlign: "center",
                                fontWeight: "bold",
                              }}
                            >
                              {count3 * 75} Watts
                            </p>
                          </div>
                        </Col>

                        <Col md={2} style={{ display: "flex" }}>
                          <div>
                            <Card
                              style={{ width: "10rem", alignItems: "center" }}
                            >
                              <p style={{ textAlign: "center" }}>AC - 1500W</p>
                              <img
                                src={LED}
                                alt="LedBulb"
                                style={{ width: "56px", height: "96px" }}
                              />
                              <br />
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  textAlign: "center",
                                }}
                              >
                                <button
                                  type="rounded-button"
                                  onClick={decrement4}
                                  style={{
                                    borderRadius: "50%",
                                    justifyContent: "center !important",
                                    textAlign: "center !important",
                                    border: "1px solid ",
                                  }}
                                >
                                  <img src={minus} alt="decrease" />
                                </button>
                                <h6
                                  style={{
                                    paddingLeft: "10px",
                                    paddingRight: "10px",
                                  }}
                                >
                                  {count4}
                                </h6>
                                <button
                                  type="rounded-button"
                                  onClick={increment4}
                                  style={{
                                    borderRadius: "50%",
                                    justifyContent: "center !important",
                                    textAlign: "center !important",
                                    border: "1px solid",
                                  }}
                                >
                                  <img src={plus} alt="increase" />
                                </button>
                              </div>
                            </Card>
                            <p
                              style={{
                                textAlign: "center",
                                fontWeight: "bold",
                              }}
                            >
                              {count4 * 1500} Watts
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="HomeAppliance">
                      <Row>
                        <Col md={2} style={{ display: "flex" }}>
                          <div>
                            <Card
                              style={{ width: "10rem", alignItems: "center" }}
                            >
                              <p style={{ textAlign: "center" }}>
                                Refrigirator - 150W
                              </p>
                              <img
                                src={LED}
                                alt="LedBulb"
                                style={{ width: "56px", height: "96px" }}
                              />
                              <br />
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  textAlign: "center",
                                }}
                              >
                                <button
                                  type="rounded-button"
                                  onClick={decrement5}
                                  style={{
                                    borderRadius: "50%",
                                    justifyContent: "center !important",
                                    textAlign: "center !important",
                                    border: "1px solid ",
                                  }}
                                >
                                  <img src={minus} alt="decrease" />
                                </button>
                                <h6
                                  style={{
                                    paddingLeft: "10px",
                                    paddingRight: "10px",
                                  }}
                                >
                                  {count5}
                                </h6>
                                <button
                                  type="rounded-button"
                                  onClick={increment5}
                                  style={{
                                    borderRadius: "50%",
                                    justifyContent: "center !important",
                                    textAlign: "center !important",
                                    border: "1px solid",
                                  }}
                                >
                                  <img src={plus} alt="increase" />
                                </button>
                              </div>
                            </Card>
                            <p
                              style={{
                                textAlign: "center",
                                fontWeight: "bold",
                              }}
                            >
                              {count5 * 150} Watts
                            </p>
                          </div>
                        </Col>

                        <Col md={2} style={{ display: "flex" }}>
                          <div>
                            <Card
                              style={{ width: "10rem", alignItems: "center" }}
                            >
                              <p style={{ textAlign: "center" }}>
                                Microwave - 800W
                              </p>
                              <img
                                src={LED}
                                alt="LedBulb"
                                style={{ width: "56px", height: "96px" }}
                              />
                              <br />
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  textAlign: "center",
                                }}
                              >
                                <button
                                  type="rounded-button"
                                  onClick={decrement6}
                                  style={{
                                    borderRadius: "50%",
                                    justifyContent: "center !important",
                                    textAlign: "center !important",
                                    border: "1px solid ",
                                  }}
                                >
                                  <img src={minus} alt="decrease" />
                                </button>
                                <h6
                                  style={{
                                    paddingLeft: "10px",
                                    paddingRight: "10px",
                                  }}
                                >
                                  {count6}
                                </h6>
                                <button
                                  type="rounded-button"
                                  onClick={increment6}
                                  style={{
                                    borderRadius: "50%",
                                    justifyContent: "center !important",
                                    textAlign: "center !important",
                                    border: "1px solid",
                                  }}
                                >
                                  <img src={plus} alt="increase" />
                                </button>
                              </div>
                            </Card>
                            <p
                              style={{
                                textAlign: "center",
                                fontWeight: "bold",
                              }}
                            >
                              {count6 * 800} Watts
                            </p>
                          </div>
                        </Col>

                        <Col md={6} style={{ display: "flex" }}>
                          <div>
                            <Card
                              style={{ width: "10rem", alignItems: "center" }}
                            >
                              <p style={{ textAlign: "center" }}>TV - 50W</p>
                              <img
                                src={LED}
                                alt="LedBulb"
                                style={{ width: "56px", height: "96px" }}
                              />
                              <br />
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  textAlign: "center",
                                }}
                              >
                                <button
                                  type="rounded-button"
                                  onClick={decrement7}
                                  style={{
                                    borderRadius: "50%",
                                    justifyContent: "center !important",
                                    textAlign: "center !important",
                                    border: "1px solid",
                                  }}
                                >
                                  <img src={minus} alt="decrease" />
                                </button>
                                <h6
                                  style={{
                                    paddingLeft: "10px",
                                    paddingRight: "10px",
                                  }}
                                >
                                  {count7}
                                </h6>
                                <button
                                  type="rounded-button"
                                  onClick={increment7}
                                  style={{
                                    borderRadius: "50%",
                                    justifyContent: "center !important",
                                    textAlign: "center !important",
                                    border: "1px solid",
                                  }}
                                >
                                  <img src={plus} alt="increase" />
                                </button>
                              </div>
                            </Card>
                            <p
                              style={{
                                textAlign: "center",
                                fontWeight: "bold",
                              }}
                            >
                              {count7 * 50} Watts
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                <br></br>
              </Card>
            )}
          </Col>
          <Col md={5}>
            <br></br>
            <br></br>
            <Form.Label>Enter Load Duration (In Hours)</Form.Label>
            <Form.Control placeholder="Enter the value" />
          </Col>
          <Col md={2}></Col>
          <Col md={5}>
            <br></br>
            <br></br>
            <Form.Label>Select Project Location</Form.Label>
            <Form.Control placeholder="Enter Project Location" />
          </Col>
          <Col md={12}>
            <br></br>
          </Col>
          <Col md={5}>
            <br></br>
            <br></br>
            <Form.Label>Dependency on Solar PV</Form.Label>
            <Form.Control placeholder="Enter the Value" />
          </Col>
          <Col md={2}></Col>
          <Col md={5}>
            <br></br>
            <br></br>
            <Form.Label>Select Inverter Type</Form.Label>
            <ul className="nav nav-pills">
              <li className="active">
                <a className="space" href="/">
                  Option 1
                </a>
              </li>
              <li>
                <a className="space" href="/">
                  Option 2
                </a>
              </li>
              <li>
                <a className="space" href="/">
                  Option 3
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }

  function Payment() {
    return <h2>Payment information</h2>;
  }

  const [activeStep, setActiveStep] = useState(0);

  function getSectionComponent() {
    switch (activeStep) {
      case 0:
        return <Calculate />;
      case 1:
        return <Payment />;
      default:
        return null;
    }
  }

  const steps = [
    {
      title: "Calculate",
      style: { fontWeight: "bold" },
      onClick: () => setActiveStep(0),
    },
    { title: "Solution", onClick: () => setActiveStep(2) },
  ];

  return (
    <div>
      <Navbar bg="transparent" className="exd" expand="lg">
        <Navbar.Brand className="pho">EXIDE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="pho1">
          <Nav className="mr-auto">
            <Nav.Link className="Quo">About</Nav.Link>
            <Nav.Link className="vip">Our Products</Nav.Link>
            <Nav>
              <a href="#cal" className="add">
                Calculate Load
              </a>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Carousel slide={false}>
        <Carousel.Item>
          <img
            src="https://static-cse.canva.com/blob/1145215/1.magebyRodionKutsaevviaUnsplash.9634f837.avif"
            alt="Test"
            className="fan"
          />
          <Carousel.Caption>
            <div className="demo">
              <div className="bottom">
                <h1>
                  Own Your<br></br>Electricity With
                </h1>{" "}
                <h1>Our Solar Solutions</h1>
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adip<br></br>elit, sed
                  do eiusmod tempor incididunt ut
                </h2>
                <button className="btn">Let's Talk</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://www.chromethemer.com/download/hd-wallpapers/goku-dragon-ball-super-1920x1080.jpg"
            className="fan"
            alt="test"
          />
          <Carousel.Caption>
            <div className="demo">
              <div className="bottom">
                <h1>
                  Own Your<br></br>Electricity With
                </h1>{" "}
                <h1>Our Solar Solutions</h1>
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adip<br></br>elit, sed
                  do eiusmod tempor incididunt ut
                </h2>
                <button className="btn">Let's Talk</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://cdnb.artstation.com/p/assets/images/images/067/735/821/large/dominic-tt-dominik256-son-goku-epic-red-super-saiyan-neon-noir-illustratio-10a0ca16-cba2-41d6-a416-ab6290cfa624-clipdrop-enhance.jpg?1696100345"
            alt="test"
            className="fan"
          />
          <Carousel.Caption>
            <div className="demo">
              <div className="bottom">
                <h1>
                  Own Your<br></br>Electricity With
                </h1>{" "}
                <h1>Our Solar Solutions</h1>
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adip<br></br>elit, sed
                  do eiusmod tempor incididunt ut
                </h2>
                <button className="btn">Let's Talk</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="second">
        <h2 className="sec" text-align="left">
          Our Vision
        </h2>
        <h1 text-align="left">
          A new vision<br></br>
          of what the <font color="red">FUTURE</font> could be
        </h1>
        <p className="sec1" text-align="left">
          Lorem ipsum dolor sit amet, consectetur adipiscing<br></br>
          elit, sed do eiusmod tempor incididunt ut labore et<br></br>
          dolore magna aliqua. Ut enim ad minim veniam, quis<br></br>
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br></br>
          commodo consequat. Duis aute irure dolor in reprehenderit<br></br>
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>

      <About></About>

      <Row className="came">
        <Col md={6} className="came1">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2>
            <font color="red">Lorem</font>
          </h2>
          <h1>How our</h1>
          <h1>
            <font color="red">SYSTEM</font> works
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur<br></br>
            adipiscing elit, sed do eiusmod tempor<br></br>
            incididunt ut labore et dolore magna aliqua.
          </p>
          <br></br>
          <br></br>
          <a href="/" className="ani">
            Learn More
          </a>
        </Col>
        <Col>
          <img
            className="img-responsive"
            src="https://regenpower.com/wp-content/uploads/2021/08/residential-solar-rooftop.jpg"
            alt="Video"
          ></img>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>

      <div className="fifth" id="cal">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2>
          <font color="red">Solutions</font>
        </h2>
        <h1>Calculate Load</h1>
        <p>
          Using power load calculator, you can decide to choose the best
          inverter battery for your home, hospital, shop, factory, school, etc.
          <br></br> An inverter is the central component of power backup
          solution. It cannot be upgrade or downgrade in any situation after
          purchasing.
          <br></br>
          <br></br> To simply this complexity, Exide has developed home load
          calculator, so you can easily estimate your power backup solution.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <div className="cid">
          <Stepper steps={steps} activeStep={activeStep} />
          <div style={{ padding: "20px" }}>
            {getSectionComponent()}

            {activeStep !== steps.length - 1 && (
              <button
                className="btn9"
                onClick={() => setActiveStep(activeStep + 1)}
              >
                Calculate
              </button>
            )}
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
      </div>

      <div className="sixth">
        <br></br>
        <br></br>
        <h1>Need help regarding our products?</h1>
        <h1>Need customized solutions?</h1>
        <br></br>
        <button className="btn4">
          <h3>Contact Us</h3>
        </button>
      </div>

      <div className="seventh grid">
        <div className="sevenths">
          <div className="leftbottom">
            © 2021 All rights reserved by EXIDE INDUSTRIES LTD
          </div>
        </div>

        <div className="sevenths">
          <a
            href="https://react-bootstrap.netlify.app/docs/components/images/"
            className="nike"
          >
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="twitter.com">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="instagram.com" className="nike">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="youtube.com">
            <img src={youtube} alt="Youtube" />
          </a>
        </div>

        <Row className="came3">
          <Col className="rightbottom1">Disclaimer </Col>
          <Col className="rightbottom">Privacy</Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
