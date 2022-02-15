import { useRef, useState } from 'react';
import { useRouts } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { NavAdminPanel } from './components/NavAdminPanel';
import { Loader } from './components/Loader';
import { Header } from './components/Header';
import Preloader from './img/preloader.svg';

function App() {
  const { login, logout, token, userId, ready } = useAuth()
  const isAuthenticated = !!token
  const routes = useRouts(isAuthenticated)

  const [preloader, setPreloader] = useState(false)
  const refPreloader = useRef()

  window.onload = function () {
    window.setTimeout(function () {
      console.log(refPreloader.current.classList.toggle('active'))
    }, 1500);
    window.setTimeout(function () {
      setPreloader(!preloader)
    }, 3000);
  }


 /*  !preloader */
  if (false) {
    return (
      <div className='wrapper_preloader'>
        <img ref={refPreloader} className='preloader' src={Preloader} />
      </div>
    )
  }


  if (!ready) {
    return (<Loader />)
  }

  return (
    <AuthContext.Provider value={{
      login, logout, token, userId, isAuthenticated
    }}>


      {isAuthenticated && <NavAdminPanel />}
      <Header />
      {routes}
    </AuthContext.Provider >
  );
}

export default App
