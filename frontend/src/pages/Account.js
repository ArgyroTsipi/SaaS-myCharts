import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../style/Charts.css";
import logo from "../images/logo.svg";
import {ButtonGroup, ButtonToolbar, Col, Row} from "react-bootstrap";
import "../style/Account.css";
import {useNavigate} from "react-router-dom";
import "../components/GoogleLoginButton.js";

//Account Page
export default function Account() {

    const {state} = useLocation();
    const [nocharts, setNoCharts] = useState();
    const navigate = useNavigate();
    const {credentials} = useParams();
    const [account, setAccount] = useState();
    console.log(state.accessToken, state.refreshToken);

    useEffect(() => {
        //fetch the user's account information(email,last_login,number of credits)
        fetch('http://localhost:4004/userInfo/getInfo', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${state.accessToken}`,
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAccount(data);
            })
    }, [state.accessToken]);


    useEffect(() => {
        //fetch the number of charts the user has
        fetch('http://localhost:4003/user-chart/countCharts', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${state.accessToken}`,
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setNoCharts(data);
            })
    }, [state.accessToken]);

    function handleMyCharts() {
        //Go to MyCharts page
        console.log("my charts");
        navigate(`/account/${credentials}/mycharts`, {
            state: {
                accessToken: state.accessToken,
                refreshToken: state.refreshToken,
                email: account.email
            },
        });
    }

    function handleNewChart() {
        //Go to New Chart page
        console.log("new chart");
        navigate(`/account/${credentials}/newchart`, {
            state: {
                accessToken: state.accessToken,
                refreshToken: state.refreshToken,
                credits: account.numberOfCredits,
                email: account.email
            },
        });
    }

    function handleBuyCredits() {
        //Go to Purchase Credits page
        console.log("buy credits");
        navigate(`/account/${credentials}/buy`, {
            state: {
                accessToken: state.accessToken,
                refreshToken: state.refreshToken,
                email: account.email
            },
        });
    }

    function handleLogout() {
        //Logout: Go back to the Home page, account disconnected
        console.log("logout");
        console.log(state.refreshToken);
        fetch('http://localhost:4000/auth/logout', {
            method: 'POST',
            body: JSON.stringify({refreshToken: state.refreshToken}),
            headers: {
                'Authorization': `Bearer ${state.accessToken}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                console.log(res.status);
                navigate(`/`, {
                    state: {
                        accessToken: null,
                        refreshToken: null,
                        email: null
                    }
                })
            });
    }

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo"/>
            <div className="justify-content-start">

                <Col>
                    <div className='mt-5'>
                        <Row>
                            <h3>
                                Hello {account && (account.email)}
                            </h3>
                        </Row>
                    </div>
                    <div className='mt-5'>
                        <Row>
                            <h6>
                                n. of charts {/* no of charts: account.noCharts */}
                                {nocharts && (nocharts.count)}
                            </h6>
                        </Row>
                    </div>
                    <div className='mt-3'>
                        <Row>
                            <h6>
                                available credits {/* user's credits: account.credits */}
                                {account && (account.numberOfCredits)}
                            </h6>
                        </Row>
                    </div>
                    <div className='mt-3'>
                        <Row>
                            <h6>
                                last login {/* last date of log in: account.dateLogin */}
                                {account && (account.lastLogin)}
                            </h6>
                        </Row>
                    </div>
                </Col>
            </div>
            <div className='mt-5'>
                <ButtonToolbar>
                    <ButtonGroup className="me-2">
                        <Button variant="outline-info" onClick={handleMyCharts}>
                            My charts
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-2">
                        <Button variant="outline-info" onClick={handleNewChart}>
                            New chart
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-2">
                        <Button variant="outline-info" onClick={handleBuyCredits}>
                            Buy credits
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-2">
                        <Button variant="outline-info" onClick={handleLogout}>Logout</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        </div>
    );
}
