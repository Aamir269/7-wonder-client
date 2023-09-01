// src/Components/ReviewSection/index.jsx
import React, { useState, useEffect } from 'react';
import { getReviewsByPlaceId } from './api'; // Import the API function to fetch reviews

const ReviewSection = ({ placeId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews for the specific historical place from the backend
    getReviewsByPlaceId(placeId)
      .then((data) => setReviews(data))
      .catch((error) => console.error(error));
  }, [placeId]);

  return (
    <div>
      <h3>User Reviews</h3>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <p>Rating: {review.rating}</p>
            <p>Description: {review.description}</p>
            {/* Display other review details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewSection;
