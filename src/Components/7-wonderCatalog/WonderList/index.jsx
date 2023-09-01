import React, { useState, useEffect } from 'react';
import { getHistoricalPlaces } from './api'; // Import the API function to fetch historical places

const WonderList = () => {
  const [places, setPlaces] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Fetch historical places from the backend when the component mounts
    getHistoricalPlaces()
      .then((data) => setPlaces(data))
      .catch((error) => console.error(error));
  }, []);

  // Function to filter places based on search and selected filters
  const filteredPlaces = places.filter((place) => {
    // Implement your filtering logic here
    // You can use the searchTerm, selectedLocation, and selectedCategory
    // to filter the places based on name, location, and category
    return (
      place.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLocation === '' || place.location === selectedLocation) &&
      (selectedCategory === '' || place.category === selectedCategory)
    );
  });

  return (
    <div>
      <h2>Historical Places</h2>
      {/* Search form and filter dropdowns */}
      {/* Implement the search and filter input fields */}
      
      {/* Display the filtered list of places */}
      <ul>
        {filteredPlaces.map((place) => (
          <li key={place._id}>{place.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default WonderList;
