export async function fetchAvailablePLaces() {
    const response = await fetch('http://localhost:3000/places');
    if (!response.ok) {
      throw new Error('Faled to fetch places.');
    }

    const resData = await response.json();
    
    return resData.places;
}