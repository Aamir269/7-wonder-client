import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './signup.css';

const API_URL = "http://localhost:5005";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errorMesage, setErrorMessage] = useState(undefined);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestBody = { name, email, password };

        axios.post(`${API_URL}/auth/signup`, requestBody)
        .then((response) => {
            navigate('/login');
        })
        .catch((error) => {
            let errorDescription = "There is an error";
            if (error.response) {
                errorDescription = error.response.data.message;
            }
            setErrorMessage(errorDescription);
        })
    }

    return (
        <div className="signUpContainer">
            <h1 className="secondaryTitle">Create An Account</h1>
            <form onSubmit={handleSubmit} className="formConfiguration">
                <div className="formConfiguration">
                    <label className="signUpField">
                        Name:
                        <input type="text" name="name" className="inputConfiguration" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label className="signUpField">
                        Email:
                        <input type="email" name="email" className="inputConfiguration" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label className="signUpField">
                        Password:
                        <input type="password" name="password" className="inputConfiguration" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button type="submit" className="signUpBtn border border-green-500 bg-green-500 hover:border-green-500 hover:bg-green-500">Sign Up</button>
                    {errorMesage && <p>{errorMesage}</p>}
                </div>
            </form>
            
        </div>
    );
}

export default SignUp;