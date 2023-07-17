import React, {useRef, useEffect} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import "../style/Charts.css";
import logo from "../images/logo.svg";
import {ButtonGroup, ButtonToolbar, Card, Button} from "react-bootstrap";
import "../style/Account.css";
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import HighchartSankey from "highcharts/modules/sankey";
import HighchartsWheel from "highcharts/modules/dependency-wheel";
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsNetwork from "highcharts/modules/networkgraph";
import AnnotationsModule from 'highcharts/modules/annotations';

AnnotationsModule(Highcharts);
HighchartsMore(Highcharts);
HighchartSankey(Highcharts);
HighchartsWheel(Highcharts);
HighchartsNetwork(Highcharts);

//Display Chart page
export default function DisplayChart() {

    const navigate = useNavigate();
    const {credentials} = useParams();
    const {state} = useLocation();
    console.log(state);
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current && chartRef.current.chart) {
            // Call chart.reflow() to make the chart responsive
            chartRef.current.chart.reflow();
        }
    }, []);

    function handleDiscard() {
        //navigate to the Account page
        navigate(`/account/${credentials}`, {
            state: {
                accessToken: state.accessToken,
                refreshToken: state.refreshToken
            },
        });
    }

    async function handleSave() {
        //save the chart for this user
        console.log(state.files);
        const today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        const requestOptions = {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${state.accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(state.files),
        };
        const url = `http://localhost:4003/user-chart/save/${date}`
        /*await*/
        await fetch(url, requestOptions).then((res) => {
            console.log("Your chart has been saved and the backend response is:");
            console.log(res);
            navigate(`/account/${credentials}/mycharts`, {
                state: {
                    accessToken: state.accessToken,
                    refreshToken: state.refreshToken,
                    email: state.email,
                },
            });
        });

    }

    return (
        <div>
            <br/>
            <h5>Your chart is ready. </h5>
            <img src={logo} className="template-logo" alt="logo"/>
            <Card style={{height: 600, width: 600}}>
                <div style={{width: '100%', height: '100%', alignSelf: 'center'}} ref={chartRef}>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={state.files}
                    />
                </div>
            </Card>
            <ButtonToolbar className='mt-3'>
                <ButtonGroup className="me-2">
                    <Button variant={"outline-info"} onClick={handleSave}>
                        Save to my charts
                    </Button>
                </ButtonGroup>
                <ButtonGroup className="me-2">
                    <Button variant={"outline-dark"} onClick={handleDiscard}>
                        Discard
                    </Button>
                </ButtonGroup>
            </ButtonToolbar>
        </div>
    );
}
