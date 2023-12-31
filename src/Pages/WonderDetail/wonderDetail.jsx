import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/context.auth";
import axios from "axios";

import "./wonderDetail.css";

const API_URL = "https://seven-wonder-of-the-world.onrender.com";

function WonderDetail() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [wroteReview, setWroteReview] = useState(false);

  const [addVisit, setAddVisit] = useState(true);
  const [visitedIcon, setVisitedIcon] = useState(false);

  const storedToken = localStorage.getItem("authToken");

  const navigate = useNavigate();

  const { wonderId } = useParams();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/wonder/${wonderId}/reviews`)
      .then((response) => setReviews(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, [wonderId]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/wonder/${wonderId}`)
      .then((response) => {
        const oneWonder = response.data;
        setName(oneWonder.name);
        setDescription(oneWonder.description);
        setLocation(oneWonder.location);
        setReviews(oneWonder.reviews);
        setImage(oneWonder.img_url);

        oneWonder.visitedBy.map((element) => {
          if (element._id === user._id) setVisitedIcon(true);
          setAddVisit(false);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  const deleteReview = (reviewId) => {
    axios
      .delete(`${API_URL}/api/wonder/${wonderId}/reviews/${reviewId}`)
      .then(() => {
        // After successful deletion, you can update the reviews state to remove the deleted review.
        setReviews(reviews.filter((review) => review._id !== reviewId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleVisitButton = async (wonderId) => {
    try {
      await axios.post(
        `${API_URL}/api/user/addVisit-wonder/${wonderId}`,
        console.log("here"),
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      navigate("/wonder/card");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p className="text-center text-4xl">{name}</p>
      <p className="text-center text-2xl">{location}</p>
      <p className="text-center">{description}</p>
      <div className="imageContainer">
        <img src={image} className="imageDetailConfiguration" />
      </div>
      <div className="text-center mt-4">
        <Link to={`/review/create/${wonderId}`}>
          <button
            type="button"
            className="border-green-600 hover:border-green-900 bg-green-600 hover:bg-green-900 text-slate-100 rounded"
          >
            <p className="m-1.5">Create Review</p>
          </button>
        </Link>
      </div>
      {reviews &&
        reviews.map((review) => {
          return (
            <div key={review._id} className="btnsConfiguration text-center">
              <p>{review.content}</p>
              <Link to={`/wonder/${wonderId}/edit/${review._id}`}>
                <button
                  type="button"
                  className="border-yellow-600 hover:border-yellow-900 bg-yellow-600 hover:bg-yellow-900 text-slate-100 rounded mr-1"
                >
                  <p className="m-1.5">Edit Review</p>
                </button>
              </Link>
              <button
                type="button"
                className="border-red-600 hover:border-red-900 bg-red-600 hover:bg-red-900 text-slate-100 rounded ml-1"
                onClick={() => deleteReview(review._id)}
              >
                <p className="m-1.5">Delete Review</p>
              </button>
            </div>
          );
        })}

      {visitedIcon && (
        <div className="text-center">
          <p>✔️</p>
        </div>
      )}

      {addVisit && (
        <div className="text-center">
          <button onClick={() => handleVisitButton(wonderId)}>
            Visited Country
          </button>
        </div>
      )}
    </div>
  );
}

export default WonderDetail;
