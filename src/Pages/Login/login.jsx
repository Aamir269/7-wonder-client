import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/context.auth";
import './login.css';

const API_URL = "http://localhost:5005";

function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const { storeToken, authenticateUser } = useContext(AuthContext)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestBody = { email, password };

        axios.post(`${API_URL}/auth/login`, requestBody)
            .then((response) => {
                storeToken(response.data.authToken);
                authenticateUser();
                navigate("/wonder/card");
            })
            .catch((error) => {
                const errorMessage = error.response.data.message;
                setErrorMessage(errorMessage);
            })
    }

    return (
        <div>
            <h1 className="secondaryTitle">Log In</h1>
            <form onSubmit={handleSubmit} className="formConfiguration">
                <div className="formConfiguration">
                    <label className="signUpField">
                        Email:
                        <input type="email" name="email" className="inputLogInConfiguration" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label className="signUpField">
                        Password:
                        <input type="password" name="password" className="inputLogInConfiguration" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button type="submit" className="logInBtn border border-green-500 bg-green-500 hover:border-green-500 hover:bg-green-500">Log In</button>
                    <div>
                        {errorMessage && <p>{errorMessage}</p>}
                        <p>Do not have an account yet</p>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LogIn;