import {useLocation, useNavigate, useParams} from "react-router-dom";
import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import * as xlsx from "xlsx";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ButtonGroup, ButtonToolbar, Button} from "react-bootstrap";

export default function MyDropzone() {

    const navigate = useNavigate();
    const {credentials} = useParams();
    const [files, setFiles] = useState([]);
    const [chartData, setChartData] = useState();
    const {state} = useLocation();
    console.log("THis is in dropzone component");
    console.log(state);


    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader();
            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.onload = async () => {
                console.log("in the onload method");
                const fileContent = reader.result;
                const workbook = xlsx.read(fileContent, {type: 'binary'});
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = xlsx.utils.sheet_to_json(worksheet, {header: 1, blankrows: false});
                //take the uploaded files
                setChartData(jsonData);
                //inform the user that the upload of his data has completed
                toast.info('Upload completed!', {
                    position: toast.POSITION.TOP_RIGHT,
                    hideProgressBar: true
                });
            };
            reader.readAsBinaryString(file);
        });
        setFiles([...files, ...acceptedFiles]);
    }, [files]);
    const {getRootProps, getInputProps} = useDropzone({onDrop})


    async function handleCreate() {
        //Check if user has credits
        if (state.credits > 0) {
            state.credits = state.credits - 1;
            const requestOptions = {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${state.accessToken}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            };
            //Decrease the number of user's credits upon creation of a chart
            const url = `http://localhost:4500/credits/purchaseCredits/${-1}`
            await fetch(url, requestOptions)
                .then((res) => {
                    console.log(res)
                })
                .catch(err => console.log(err));
        } else {
            //inform the user that he hasn't enough credits to create a chart
            toast.info('Not enough credits!', {
                position: toast.POSITION.TOP_RIGHT,
                hideProgressBar: true
            });
            return;
        }

        //If he has enough credits the created chart is fetched
        try {
            const response = await fetch('http://localhost:4001/create-chart/create', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${state.accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(chartData),
            });
            //If the data were valid and the chart was created
            //then navigate to the Display Chart page
            if (response.ok) {
                // Handle the successful response from the backend
                console.log('Request sent successfully');
                const data = await response.json();
                console.log('Response:', data);
                navigate(`/account/${credentials}/error`, {
                        state: {
                            files: data,
                            accessToken: state.accessToken,
                            refreshToken: state.refreshToken,
                            credits: state.credits,
                            email: state.email,
                        }
                    }
                );

            } else {
                // Handle the error response from the backend
                console.log('Request failed:', response.status, response.statusText);
                navigate(`/account/${credentials}/errormessage`, {
                    state: {
                        accessToken: state.accessToken,
                        refreshToken: state.refreshToken,
                        credits: state.credits
                    }
                });
            }
        } catch (error) {
            // Handle network errors or other exceptions
            console.error('An error occurred:', error);
        }
    }

    function handleBack() {
        navigate(`/account/${credentials}`, {
            state: {
                accessToken: state.accessToken,
                refreshToken: state.refreshToken,
            }
        });
    }

    return (
        <div>
            <div style={{
                height: '150px',
                backgroundColor: 'whitesmoke', border: '3px dashed #65DFF6',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }} {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="d-flex-justify-content-center" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <p style={{
                        fontSize: '16px',
                        color: '#0C6170'
                    }}>Drag 'n' drop some files here, or click to select files</p>
                </div>
                <Button variant="outline-info"> Upload </Button>
            </div>
            <div className='mt-5'>
                <ButtonToolbar>
                    <ButtonGroup className="me-2">
                        <Button variant="outline-info" onClick={handleCreate}>
                            Create Chart
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-2">
                        <Button variant="outline-info" onClick={handleBack}>
                            Go Back
                        </Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
            <ToastContainer/>
        </div>

    )
}