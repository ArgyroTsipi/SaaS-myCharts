import Button from "react-bootstrap/Button";
import "../style/NewChart.css";
import logo from "../images/logo.svg";
import {Carousel, CarouselItem, Col} from "react-bootstrap";
import Dropzone from "../components/Dropzone";
import {charts} from '../components/data.js';
import {useLocation} from "react-router-dom";
import template from "../images/template.png"

//New Chart page
function NewChart() {

    const {state} = useLocation();
    console.log(state);
    const downloadFile = (chartType, isExample) => {

        //download the selected template
        fetch(`http://localhost:4002/download-templates/template/${chartType}/${isExample}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${state.accessToken}`,
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.blob();
                } else {
                    throw new Error('Error downloading template');
                }
            })
            .then((blob) => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                if (isExample === "false")
                    a.download = 'template.xlsx';
                else
                    a.download = 'example_template.xlsx';
                a.click();
                URL.revokeObjectURL(url);
            })
            .catch((error) => {
                // Handle error
                console.error(error);
            });
    };

    return (
        <div>
            <Col>
                <img src={logo} className="template-logo" alt="logo"/>
            </Col>
            <Col>
                <h2 className='mt-5'> Let's create your own chart!</h2>

                <Carousel style={{backgroundColor: "lightblue", borderColor: "black", width: '480px'}}>
                    {charts.map((chart) => (
                        <CarouselItem key={chart.chartID}
                                      style={{height: 280}}>
                            <Carousel.Caption style={{color: "black", backgroundColor: " #lightblue"}}>
                                {chart.chartTitle}
                                <div style={{display: "flex", justifyContent: "center"}}>
                                    <img src={template} style={{maxWidth: "50%", maxHeight: "50%"}} alt=""/>
                                </div>
                                <div className="justify-content-xl-end">
                                    <Button variant="outline-dark" onClick={() => {
                                        downloadFile(chart.chartType, "false")
                                    }}>
                                        Download template
                                    </Button>
                                    <Button style={{marginLeft: '6px'}} variant="outline-dark" onClick={() => {
                                        downloadFile(chart.chartType, "true")
                                    }}>
                                        Download Example
                                    </Button>
                                </div>
                            </Carousel.Caption>
                        </CarouselItem>
                    ))}
                </Carousel>
                <div className='mt-5'>
                    <Dropzone/>
                </div>
            </Col>
        </div>
    );
}

export default NewChart;





