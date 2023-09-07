import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import './createReview.css';

const API_URL = "http://localhost:5005";

function CreateReview() {
    const [content, setContent] = useState("");
    const { wonderId } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {content}

        try {
            const storedToken = localStorage.getItem('authToken');
            await axios.post(
                `${API_URL}/api/wonder/${wonderId}/reviews`,
                body,
                {
                    headers: {
                        Authorization: `Bearer ${storedToken}`,
                    },
                }
            ).then(() => {
                navigate(`/wonder/card`);
            });
            setContent('');
            
        } catch (error) {
            console.log(error)
        }
  };

    return (
        <div>
            <h3 className="text-center text-4xl pt-5">Create a Review</h3>
            <form onSubmit={handleSubmit} className="formCreateReview">
                <div className="formCreateReview pb-3">
                    <label className="createReviewField">
                        Description:
                        <textarea value={content} className="inputCreateReviewConfiguration" onChange={(e) => setContent(e.target.value)} />
                    </label>
                    <button type="submit" className="createBtn border-green-600 hover:border-green-900 bg-green-600 hover:bg-green-900 text-slate-100 rounded">
                        <p>Create</p>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateReview;