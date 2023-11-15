import React, { useState, useEffect } from 'react';

function App() {
  // State to hold the dog image URL
  const [dogImage, setDogImage] = useState(null);
  // State to track loading status
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch a random dog image
    const fetchDogImage = async () => {
      try {
        // Set loading to true while fetching
        setLoading(true);

        // Fetch data from the API
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();

        // Update state with the dog image URL
        setDogImage(data.message);
      } catch (error) {
        console.error('Error fetching dog image:', error);
      } finally {
        // Set loading to false when the request is complete
        setLoading(false);
      }
    };

    // Call the fetchDogImage function
    fetchDogImage();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <div>
      <h1>Random Dog Image</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" style={{ maxWidth: '100%' }} />
      )}
    </div>
  );
}

export default App;
