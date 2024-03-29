export async function fetchAvailablePLaces() {
    const response = await fetch('http://localhost:3000/places');
    if (!response.ok) {
      throw new Error('Faled to fetch places.');
    }

    const resData = await response.json();

    return resData.places;
}

export async function fetchUserPLaces() {
    const response = await fetch('http://localhost:3000/user-places');
    if (!response.ok) {
      throw new Error('Faled to fetch user places.');
    }

    const resData = await response.json();

    return resData.places;
}

export async function updateUserPlaces(places) {
    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({ places }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Failed to update user data.');
    }

    const resData = await response.json();

    return resData.message;
}