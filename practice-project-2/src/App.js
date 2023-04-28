import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // executed after each component re-evaluation but ONLY if there is a change in the dependencies
  // if the dependencies are an empty array, the fn inside the useEffect will only run when the app starts / is reloaded
  useEffect(() => {
    const userLoggedInInfo = localStorage.getItem('isLoggedIn');
    if (userLoggedInInfo === '1') {
      setIsLoggedIn(true);
    } 
  }, [isLoggedIn]);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider 
      value={{
        isLoggedIn: isLoggedIn, 
        onLogout: logoutHandler
      }}>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>    
  );
}

export default App;
