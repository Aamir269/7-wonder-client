import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import UpdateReview from "../UpdateReview/updateReview";
import CreateReview from "../CreateReview/createReview";


const API_URL = "http://localhost:5005";

function WonderDetail() {
    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const { wonderId } = useParams();

    const navigate = useNavigate();

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
            console.log("reviews",oneWonder.reviews)
        })
        .catch((error) => { console.log(error) })
    }, [wonderId]);

    /* const deleteReview = (reviewId) => {
        axios.delete(`${API_URL}/api/wonder/${wonderId}/deleteReviews/${reviewId}`)
            .then(() => {
                navigate('/');
            })
            .catch((error) => { console.log(error) });
    } */


    return (
        <div>
            <p>{name}</p>
            <p>{location}</p>
            <p>{description}</p>
            <Link to={`/review/create/${wonderId}`} element={<CreateReview />}>Create Review</Link>
            {reviews && reviews.map((review) => {
                return (
                    <div>
                        {/* <p>{review.author}</p> */}
                        <p>{review.content}</p>
                        <Link to={`/wonder/update/${review._id}/${wonderId}`} element={<UpdateReview />}>Update</Link>
                        {/* <button type="submit" onClick={deleteReview(reviews._id)}>Delete Review</button> */}
                    </div>
                 )
            })}

        </div>
    );
}

export default WonderDetail;