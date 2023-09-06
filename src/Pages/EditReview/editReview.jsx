// src/Pages/EditReview/EditReview.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import './editReview.css';

const API_URL = "http://localhost:5005";

function EditReview() {
    const [content, setContent] = useState("");
    const { reviewId, wonderId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API_URL}/api/wonder/${wonderId}/reviews/${reviewId}`)
            .then((response) => {
                const oneReview = response.data;
                setContent(oneReview.content); // Set the current content in the state
            })
            .catch((error) => { console.log(error) })
    }, [reviewId, wonderId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = { content };

        axios.put(`${API_URL}/api/wonder/${wonderId}/reviews/${reviewId}`, requestBody)
        .then(() => {
            navigate(`/wonder/${wonderId}`);
        })
        .catch((error) => { console.log(error) });
    }

    return (
        <div>
            <h3 className="text-center text-4xl">Edit Review</h3>
            <form onSubmit={handleSubmit} className="formUpdateReview">
                <div className="formUpdateReview">
                    <label className="updateReviewField">
                        Description:
                        <textarea className="inputUpdateReviewConfiguration" name="content" value={content} onChange={(e) => setContent(e.target.value)} />
                    </label>
                    <button type="submit" className="updateBtn border-green-600 hover:border-green-900 bg-green-600 hover:bg-green-900 text-slate-100 rounded">
                        <p className="m-1">Update Review</p>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditReview;
