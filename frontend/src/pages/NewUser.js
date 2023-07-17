import {useLocation, useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import jwt_decode from "jwt-decode";

const NewUser = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const googleResponse = state.googleRes;
    console.log(googleResponse);

    function handleCancel() {
        navigate('/home');
    }

    async function handleContinue() {
        const {credential} = googleResponse;
        const userObject = jwt_decode(credential);
        const {name, sub, email} = userObject;

        await fetch('http://localhost:4000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: sub, name: name, email: email})
        })
            .then(loginResponse => loginResponse.text())
            .then(loginData => {
                console.log("New user logged in")
                console.log(loginData);
                const logindata = JSON.parse(loginData);
                console.log(logindata);
                navigate(
                    `/account/${googleResponse.credential}`,
                    {
                        state: {
                            accessToken: logindata.accessToken,
                            refreshToken: logindata.refreshToken,
                        },
                    });
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div>
            <h3 style={{padding: '100px'}}>
                Are you sure you want to log in with google? Your data will be stored in our database and will be
                processed based on our policy.
            </h3>
            <Button variant="outline-info" style={{marginRight: '5px'}} onClick={handleContinue}>
                Continue
            </Button>
            <Button variant="outline-info" onClick={handleCancel}>
                Cancel
            </Button>
        </div>
    );
};

export default NewUser;
