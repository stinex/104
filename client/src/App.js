import React from 'react';
import 'materialize-css'
import { BrowserRouter as Router, } from "react-router-dom";
import { useRouts } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { NavAdminPanel } from './components/NavAdminPanel';
import { Loader } from './components/Loader';


function App() {
  const { login, logout, token, userId, ready } = useAuth()
  const isAuthenticated = !!token
  const routes = useRouts(isAuthenticated)

  if (!ready){
    return(<Loader/>)
  }

  return (
    <AuthContext.Provider value={{
      login, logout, token, userId, isAuthenticated
    }}>

      <Router>
        {isAuthenticated && <NavAdminPanel />}
        <div className='container'>
          {routes}
        </div>
      </Router>

    </AuthContext.Provider>
  );
}

export default App
