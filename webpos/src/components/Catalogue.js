import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CataloguePage = () => {
  const [catalogue, setCatalogue] = useState([]);

  useEffect(() => {
    const fetchCatalogue = async () => {
      try {
        const response = await axios.get('/api/catalogue');
        setCatalogue(response.data);
      } catch (error) {
        console.error('Error fetching catalogue:', error);
      }
    };
    fetchCatalogue();
  }, []);

  return (
    <div>
      <h2>Catalogue</h2>
      <ul>
        {catalogue.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default CataloguePage;
