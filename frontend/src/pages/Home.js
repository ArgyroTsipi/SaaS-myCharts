import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import "../style/Charts.css";

import logo from "../images/logo.svg";
import network from "../images/netwrokgraph.jpg";
import column from "../images/basiccolumn.png";
import line from "../images/basicline.png";
import dependency from "../images/Dependency.png";
import polar from "../images/polar.png";
import annotation from "../images/annotation.png";
import {Card, Carousel, CarouselItem, Modal, Stack} from "react-bootstrap";
import GoogleLoginButton from "../components/GoogleLoginButton";
import {useNavigate} from "react-router-dom";

//Home Page
export function Home() {

    const [show, setShow] = useState(false);
    const [showLog, setShowLog] = useState(false);
    const navigate = useNavigate();

    function handleOpen() {
        //show the chart-message
        setShow(true);
    }

    function showLogin() {
        //show the google-login-button
        setShowLog(true);
    }

    function handleClose() {
        //close the chart-message window
        setShow(false);
    }

    function handleCloseLog() {
        //close the google-login-button window
        setShowLog(false);
    }

    function about() {
        //Go to the About page
        navigate(`/about`, {})
    }


    return (
        <div>
            <img src={logo} className="App-logo" alt="logo"/>
            <div>
                <div>
                    <Button variant="outline-info" className="button1" onClick={showLogin}>
                        Log in or Sign in with Google
                    </Button>
                    <Modal show={showLog} onHide={showLogin}>
                        <Modal.Header closeButton>
                            <Modal.Title>Welcome</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <GoogleLoginButton/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseLog}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <Modal show={show} onHide={handleOpen}>
                        <Modal.Header closeButton>
                            <Modal.Title>Hello there!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p style={{fontSize: '15px'}}>In this app you can create charts, like the one you selected,
                                by downloading a
                                template, filling it in with your data and then uploading it.
                                More instructions about the filling in of the templates will be
                                given to you along the way. Moreover you can save the diagrams you create. Enjoy!</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div style={{height: '400px', width: '900px'}}>
                    <Carousel>
                        <Carousel.Item style={{height: '500px'}}>
                            <Stack
                                direction="horizontal"
                                className="h-100 justify-content-center align-items-center"
                                gap={3}
                            >
                                <Card style={{width: "18rem"}}>
                                    <Card.Body>
                                        <Card.Title>Network graph</Card.Title>
                                        <Card.Text>
                                            library: 'highcharts'.
                                        </Card.Text>
                                        <img src={network} className="logo-main" alt="logo"/>
                                        <Button variant="outline-info" onClick={handleOpen}>Choose</Button>
                                    </Card.Body>
                                </Card>

                                <Card style={{width: "18rem"}}>
                                    <Card.Body>
                                        <Card.Title>Polar (radar) chart</Card.Title>
                                        <Card.Text>
                                            library: 'highcharts'
                                        </Card.Text>
                                        <img src={polar} className="logo-main" alt="logo"/>
                                        <Button variant="outline-info" onClick={handleOpen}>Choose</Button>
                                    </Card.Body>
                                </Card>

                                <Card style={{width: "18rem"}}>
                                    <Card.Body>
                                        <Card.Title>Basic Line chart</Card.Title>
                                        <Card.Text>
                                            library: 'highcharts'
                                        </Card.Text>
                                        <img src={line} className="logo-main" alt="logo"/>
                                        <Button variant="outline-info" onClick={handleOpen}>Choose</Button>
                                    </Card.Body>
                                </Card>
                            </Stack>
                        </Carousel.Item>
                        <CarouselItem style={{height: 500}}>
                            <Stack
                                direction="horizontal"
                                className="h-100 justify-content-center align-items-center"
                                gap={3}
                            >
                                <Card style={{width: "18rem"}}>
                                    <Card.Body>
                                        <Card.Title>Basic Column chart</Card.Title>
                                        <Card.Text>
                                            library: 'highcharts'
                                        </Card.Text>
                                        <img src={column} className="logo-main" alt="logo"/>
                                        <Button variant="outline-info" onClick={handleOpen}>Choose</Button>
                                    </Card.Body>
                                </Card>

                                <Card style={{width: "18rem"}}>
                                    <Card.Body>
                                        <Card.Title>Dependency Wheel chart</Card.Title>
                                        <Card.Text>
                                            library: 'highcharts'
                                        </Card.Text>
                                        <img src={dependency} className="logo-main" alt="logo"/>
                                        <Button variant="outline-info" onClick={handleOpen}>Choose</Button>
                                    </Card.Body>
                                </Card>

                                <Card style={{width: "18rem"}}>
                                    <Card.Body>
                                        <Card.Title>Line with annotations chart</Card.Title>
                                        <Card.Text>
                                            library: 'highcharts'
                                        </Card.Text>
                                        <img src={annotation} className="logo-main" alt="logo"/>
                                        <Button variant="outline-info" onClick={handleOpen}>Choose</Button>
                                    </Card.Body>
                                </Card>
                            </Stack>
                        </CarouselItem>
                    </Carousel>
                </div>
            </div>
            <div className='foot' style={{marginTop: '20px'}}>
                <h5> Press on a diagram to see how this works, or log in with your google account to start creating your
                    diagrams.</h5>
                <Button variant="outline-info" style={{left: '0%', position: 'absolute', marginTop: '30px'}}
                        onClick={about}> about </Button>
            </div>
        </div>
    );
}