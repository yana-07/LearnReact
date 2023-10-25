import { useState, useEffect } from 'react';

import Places from './Places.jsx';
import Error from './Erros.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    // fetch('http://localhost:3000/places')
    //   .then(response => response.json())
    //   .then(resData => setAvailablePlaces(resData.places));

    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const response = await fetch('http://localhost:3000/places');
        if (!response.ok) {
          throw new Error('Faled to fetch places.');
        }

        const resData = await response.json();
        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({ message: error.message || 'Could not fetch places, please try again later.' });
      }
      
      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching places data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
