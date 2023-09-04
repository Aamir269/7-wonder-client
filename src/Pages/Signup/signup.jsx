import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
        <div>
            <h1>Create An Account</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Sign Up</button>
                {errorMesage && <p>{errorMesage}</p>}
            </form>
        </div>
    );
}

export default SignUp;