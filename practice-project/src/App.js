import React, {useState} from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (addedUser) => {
    setUsersList(prevUsersList => [
      {
        id: Math.random().toString(),
        ...addedUser
      },
      ...prevUsersList
    ])
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
