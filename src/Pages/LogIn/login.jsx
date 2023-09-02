import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/context.auth";

const API_URL = "http://localhost:5005";

function LogIn(){
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
                navigate("/wonder/list");
            })
            .catch((error) => {
                const errorMessage = error.response.data.message;
                setErrorMessage(errorMessage);
            })
    }

    return(
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Log In</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
            <p>Do not have an account yet</p>
            <Link to="/signup">Sign Up</Link>
        </div>
    );
}

export default LogIn;