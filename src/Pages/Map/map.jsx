import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet';
import axios from 'axios';

const API_URL = 'http://localhost:5005';

import EgyptImage from '/Images/Egypt.jpg'; // Import images
import JordanImage from '/Images/Jordan.jpg';
import BrazilImage from '/Images/Brazil.jpg';
import MexicoImage from '/Images/Mexico.jpg';
import RomeImage from '/Images/Rome.jpg';
import ChinaImage from '/Images/China.jpg';
import PeruImage from '/Images/Peru.jpg';
import IndiaImage from '/Images/India.jpg';

const Map = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [map, setMap] = useState(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  useEffect(() => {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
      return;
    }

    if (!mapContainer._leaflet_id) {
      const myMap = L.map('map').setView([15.7, 21.4], 2);
      setMap(myMap);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(myMap);

      const locations = [
        { name: 'Great Pyramid of Giza, Egypt', coordinates: [29.978828502962422, 31.134093570982742] },
        { name: 'The Treasury, Petra, Jordan', coordinates: [30.391888854317806, 35.67211323753393] },
        { name: 'Christ the Redeemer, Brazil', coordinates: [-22.94867782459306, -43.209607798529] },
        { name: 'Chichen Itza, Mexico', coordinates: [20.683151117945936, -88.56866121860331] },
        { name: 'Colosseum, Rome', coordinates: [41.893125607716144, 12.487576289030617] },
        { name: "China's Great Wall, China", coordinates: [40.34653945604379, 116.00356738440544] },
        { name: 'Machu Picchu, Peru', coordinates: [-13.162297522344424, -72.51600886419962] },
        { name: 'Taj Mahal, India', coordinates: [27.175096806975052, 78.04211829454162] },
        // Add more locations as needed
      ];

      
      locations.forEach((location) => {
        const marker = L.marker(location.coordinates).addTo(myMap);

        const popupContent = `
          <div>
            <h2>${location.name}</h2>
            <img src="${getImageForLocation(location.name)}" alt="${location.name}" />
            <button onclick="handleSignup('${location.name}')">Sign Up</button>
          </div>
        `;

        marker.bindPopup(popupContent);
      });
    }
  }, []);

  const locationImages = {
    'Great Pyramid of Giza, Egypt': EgyptImage,
    'The Treasury, Petra, Jordan': JordanImage,
    'Christ the Redeemer, Brazil': BrazilImage,
    'Chichen Itza, Mexico': MexicoImage,
    'Colosseum, Rome': RomeImage,
    "China's Great Wall, China": ChinaImage,
    'Machu Picchu, Peru': PeruImage,
    'Taj Mahal, India': IndiaImage,
    // Add more mappings as needed
  };

  const getImageForLocation = (locationName) => {
    return locationImages[locationName] || '';
  };

  const handleSearch = () => {
    const results = [];
    const locations = [
      { name: 'Great Pyramid of Giza, Egypt', coordinates: [29.978828502962422, 31.134093570982742] },
      { name: 'The Treasury, Petra, Jordan', coordinates: [30.391888854317806, 35.67211323753393] },
      { name: 'Christ the Redeemer, Brazil', coordinates: [-22.94867782459306, -43.209607798529] },
      { name: 'Chichen Itza, Mexico', coordinates: [20.683151117945936, -88.56866121860331] },
      { name: 'Colosseum, Rome', coordinates: [41.893125607716144, 12.487576289030617] },
      { name: "China's Great Wall, China", coordinates: [40.34653945604379, 116.00356738440544] },
      { name: 'Machu Picchu, Peru', coordinates: [-13.162297522344424, -72.51600886419962] },
      { name: 'Taj Mahal, India', coordinates: [27.175096806975052, 78.04211829454162] },
      // Add more locations as needed
    ];

    locations.forEach((location) => {
      if (location.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        results.push(location);
      }
    });

    setSearchResults(results);

    if (results.length > 0 && map) {
      map.setView(results[0].coordinates, 10);
    }
  };

  const handleSignup = (locationName) => {
    const requestBody = { name, email, password, location: locationName };

    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        alert('Signup successful!'); // You can replace this with a more user-friendly notification
      })
      .catch((error) => {
        let errorDescription = 'There is an error';
        if (error.response) {
          errorDescription = error.response.data.message;
        }
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search by place or country"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="searchButton" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div id="map" style={{ height: '1000px' }}></div>
      <div className="searchResults">
        {searchResults.map((result, index) => (
          <div key={index}>
            <h2>{result.name}</h2>
            <img src={getImageForLocation(result.name)} alt={result.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Map;
