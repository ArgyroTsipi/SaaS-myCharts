import React from "react";
import "../style/Charts.css";
import "../style/About.css"
import logo from "../images/logo.svg";


//About page: Information about the team and the application
export default function About() {

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo"/>
            <div>
                <br/>
                <br/>
                <h3>Who we are</h3>
                <p style={{fontSize: '15px'}}> We are a team of undergraduate students of Electrical and Computer
                    Engineering
                    at National Technical University of Athens.
                    Meet the team: Argyro Tsipi, Theodora Boutsini and Vangelis Kontogiannis.
                    We are specialized in Software Development and we are the creators of 'MyCharts'. MyCharts is a
                    website
                    hosted
                    on localhost that lets the user drag and drop excel files and it creates them as diagrams.
                    We have been working together since 2022 and have also founded 'IntelliQ'. IntelliQ is also a
                    website on
                    localhost that
                    lets the user create and/or answer questionnaires and view their statistics.

                </p>
                <br/>
                <h3>Pricing</h3>
                <p style={{fontSize: '15px'}}> MyCharts pricing concerning credits is the following: 5 credits for
                    0.99$, 10 credits for 1.99$, 15
                    credits for 14.99$, 20 credits for 19.99$
                    Each chart you create costs 1 credit. </p>
                <br/>
                <h3>For Developers</h3>
                <p>
                    If you're interested in joining our team, please send us your CV in English at xxxxx@gmail.com. We'd
                    be
                    glad to work with you!
                </p>
            </div>
        </div>
    );
}
