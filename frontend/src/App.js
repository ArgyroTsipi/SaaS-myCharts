import './style/App.css';
import './pages/Home.js';
import {Home} from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NewChart from "./pages/NewChart";
import Account from "./pages/Account";
import BuyCredits from "./pages/BuyCredits";
import About from "./pages/About";
import {GoogleOAuthProvider} from '@react-oauth/google';
import DisplayChart from "./pages/DisplayChart";
import {MyCharts} from "./pages/MyCharts";
import {ErrorMessage} from "./components/ErrorMessage";
import NewUser from "./pages/NewUser";

function App() {
    return (
        <GoogleOAuthProvider clientId='1068088482416-5ta3i9a1s4ki9d1fiilvdv8uiu16pot1.apps.googleusercontent.com'>
            <div className="App">
                <header className="App-header">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/account/:credentials/newchart" element={<NewChart/>}/>
                            <Route path="/account/:credentials" element={<Account/>}/>
                            <Route path="/account/:credentials/buy" element={<BuyCredits/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/account/:credentials/error" element={<DisplayChart/>}/>
                            <Route path="/account/:credentials/mycharts" element={<MyCharts/>}/>
                            <Route path="/account/:credentials/errormessage" element={<ErrorMessage/>}/>
                            <Route path="/account/newuser" element={<NewUser/>}/>

                        </Routes>
                    </BrowserRouter>
                </header>
            </div>
        </GoogleOAuthProvider>
    );
}

export default App;
