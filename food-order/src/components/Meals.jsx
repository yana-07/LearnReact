import { useState } from 'react';

import MealItem from './MealItem.jsx';
import Error from './Error.jsx';
import { useHttp } from '../hooks/useHttp.js';

// create config object outside of the component function, because otherwise the object as a reference type gets recreated 
// each time the component re-renders, and since it is a dependency of the useCallback hook in the useHttp hook, the sendRequest function
// also gets re-created each time and subsequently the function in the useEffect hook also gets called each time, as its sendRequest dependency
// changes every time, which results in tons of http requests being sent
const requestConfig = {};

export default function Meals() {
    const {
      data: loadedMeals,
      isLoading,
      error
    } = useHttp('http://localhost:3000/meals', requestConfig, []);

    if (isLoading) {
      return <p className="center">Fetching meals...</p>
    }

    if (error) {
      return <Error title="Failed to fetch meals." message={error} />
    }

    return (
      <ul id="meals">
        {loadedMeals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    );
}