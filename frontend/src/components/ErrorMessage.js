import React from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../style/Charts.css";
import logo from "../images/logo.svg";
import "../style/MyCharts.css";

export function ErrorMessage() {

    const navigate = useNavigate();
    const {credentials} = useParams();
    const {state} = useLocation();

    function handleBack() {
        //Go back to the New Chart page
        navigate(`/account/${credentials}/newchart`, {
            state: {
                accessToken: state.accessToken,
                refreshToken: state.refreshToken,
                credits: state.credits
            }
        });
    }

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo"/>
            <div className="d-flex justify-content-md-start" style={{marginTop: '30px'}}>
                <h3 className="me-2">
                    Cannot prepare your chart. Your uploaded file contained errors.
                </h3>
                <Button className="me-2" variant="outline-info" onClick={handleBack}>
                    go back
                </Button>
            </div>

        </div>
    )
}