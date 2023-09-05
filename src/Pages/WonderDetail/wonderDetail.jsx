import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../Context/context.auth";
import axios from 'axios';

const API_URL = "http://localhost:5005";

function WonderDetail() {
    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [wroteReview, setWroteReview] = useState(false); 

    const [addVisit, setAddVisit] = useState(true); 
    const [visitedIcon, setVisitedIcon] = useState(false); 

    const storedToken = localStorage.getItem("authToken")

    const navigate = useNavigate()
    
    const { wonderId } = useParams();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        axios.get(`${API_URL}/api/wonder/${wonderId}/reviews`)
            .then((response) => setReviews(response.data))
            .catch((error) => { console.log(error) });
    }, [wonderId]);

    useEffect(() => {
        axios.get(`${API_URL}/api/wonder/${wonderId}`)
        .then((response) => {
            const oneWonder = response.data;
            setName(oneWonder.name);
            setDescription(oneWonder.description);
            setLocation(oneWonder.location)
            setReviews(oneWonder.reviews)

            oneWonder.visitedBy.map((element)=> {
                if (element._id === user._id)
                    setVisitedIcon(true)
                setAddVisit(false)
            })
        })
        .catch((error) => { console.log(error) })
    }, [user]);

    const deleteReview = (reviewId) => {
        axios.delete(`${API_URL}/api/wonder/${wonderId}/reviews/${reviewId}`)
            .then(() => {
                // After successful deletion, you can update the reviews state to remove the deleted review.
                setReviews(reviews.filter(review => review._id !== reviewId));
            })
            .catch((error) => { console.log(error) });
    }

    const handleVisitButton = async (wonderId) => {
        try {
            await axios.post(`${API_URL}/api/user/addVisit-wonder/${wonderId}`, console.log('here') ,{
                headers: {Authorization: `Bearer ${storedToken}`}
            })
            navigate("/wonder/card")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <p>{name}</p>
            <p>{location}</p>
            <p>{description}</p>
            <Link to={`/review/create/${wonderId}`}>Create Review</Link>
            {reviews && reviews.map((review) => {
                return (
                    <div key={review._id}>
                        <p>{review.content}</p>
                        <Link to={`/wonder/${wonderId}/edit/${review._id}`}>Edit</Link>
                        <button type="button" onClick={() => deleteReview(review._id)}>Delete Review</button>
                    </div>
                )
            })}

            {visitedIcon && <>
                <p>✔️</p>
            </>}

            {addVisit && <>
                <button onClick={() => handleVisitButton(wonderId)}>Visited Country</button>
            </>}
        </div>
    )
}

export default WonderDetail;
