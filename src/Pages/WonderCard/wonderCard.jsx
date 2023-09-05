import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './wonderCard.css';

const API_URL = "http://localhost:5005";

function WonderCard() {
    const [wonders, setWonders] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/api/wonder`)
        .then((response) => setWonders(response.data))
        .catch((error) => { console.log(error) });
    }, []);

    return (
        <div>
            {wonders.map((wonder) => {
                return (
                    <div key={wonder._id} className="flex">
                        <Link to={`/wonder/${wonder._id}`} className="text-center">
                            <h3>{wonder.name}</h3>
                            <img src={wonder.img_url} alt="Logo" className="imageConfiguration" /> 
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default WonderCard;