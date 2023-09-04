import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const API_URL = "http://localhost:5005";

function CreateReview() {
    const [content, setContent] = useState("");
    const { wonderId } = useParams();
    const navigate = useNavigate();
    const handleSubmit = () => {
        async function createReview() {
            try {
                const storedToken = localStorage.getItem('authToken');
                await axios.post(
                    `${API_URL}/api/wonder/${wonderId}/reviews`,
                    { content: content },
                    {
                        headers: {
                            Authorization: `Bearer ${storedToken}`,
                        },
                    }
                );
                setContent('');
            } catch (error) {
                console.log(error);
            }
        }
        createReview();
  };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Description:
                    <input type="text" value="description" onChange={(e) => setContent(e.target.value)} />
                </label>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreateReview;