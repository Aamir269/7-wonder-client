import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

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
            <form onSubmit={handleSubmit}>
                <label>
                    Description:
                    <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
                </label>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreateReview;