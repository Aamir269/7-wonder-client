import React, { useState, useEffect } from 'react';
import { getHistoricalPlaceById } from './api'; // Import the API function to fetch a single historical place
import ReviewSection from '../../ReviewSection'; // Import the ReviewSection component

const WonderDetail = ({ match }) => {
  const [place, setPlace] = useState({});

  useEffect(() => {
    // Fetch a single historical place by ID from the backend
    getHistoricalPlaceById(match.params.id)
      .then((data) => setPlace(data))
      .catch((error) => console.error(error));
  }, [match.params.id]);

  return (
    <div>
      <h2>{place.name}</h2>
      <p>Description: {place.description}</p>
      {/* Display other details */}
      <div>
        <h3>Images:</h3>
        {place.images && place.images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
      {/* Pass the place ID to the ReviewSection */}
      <ReviewSection placeId={place._id} />
    </div>
  );
};

export default WonderDetail;
