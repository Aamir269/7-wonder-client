import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const API_URL = "http://localhost:5005";

function CreateReview(){
    const [ content, setContent ] = useState("");
    const { wonderId } = useParams();
    const navigate = useNavigate();

   // Handle Submit Function
  const handleSubmit = (e) => {
     e.preventDefault();

     const requestBody = { content };

      axios.post(`${API_URL}/api/wonder/${wonderId}/reviews`, requestBody)
     .then(() => {
         navigate(`/wonder/${wonderId}`);
     })
     .catch((error) => {console.log(error)});
   }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label>
				Description:
				<input type="text" value="description" onChange={(e) => setDescription(e.target.value)} />
			</label>
            <button type="submit">Create</button>
          </form>
        </div>
    );
}

export default CreateReview;
