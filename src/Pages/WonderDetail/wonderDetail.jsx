import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
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
            })
            .catch((error) => { console.log(error) })
    }, [wonderId]);

    const deleteReview = (reviewId) => {
        axios.delete(`${API_URL}/api/wonder/${wonderId}/deleteReviews/${reviewId}`)
            .then(() => {
                navigate('/');
            })
            .catch((error) => { console.log(error) });
    }

    return (
        <div>
            <p>{name}</p>
            <p>{location}</p>
            <p>{description}</p>
            <Link to={`/review/create/${wonderId}`} element={<CreateReview />}>Create Review</Link>
            {reviews.map((review) => {
                return (
                    <div key={review._id}>
                        <p>{review.author}</p>
                        <p>{review.content}</p>
                        <Link to={`/wonder/update/${review._id}/${wonderId}`} element={<UpdateReview />}>Update</Link>
                        <button type="submit" onClick={deleteReview(review._id)}>Delete Review</button>
                    </div>
                )
            })}

        </div>
    );
}

export default WonderDetail;