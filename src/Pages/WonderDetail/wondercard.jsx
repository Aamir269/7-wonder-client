import WonderDetail from "./wondercard";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = "http://localhost:5005";

function WonderCard(){
    const [wonders, setWonders] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/api/wonder`)
            .then((response) => setWonders(response.data))
            .catch((error) => { console.log(error) });
    }, []);

    return(
        <div>
            {wonders.map((wonder) => {
                return (
                    <div key={wonder.id}>
                        <Link to={`/wonder/${wonder.id}`}>
                            <h3>{wonder.name}</h3>
                            <p>{wonder.location}</p>
                            <p>{wonder.description}</p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default WonderCard;