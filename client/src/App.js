import { useRef, useState } from 'react';

import { useRouts } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { NavAdminPanel } from './components/NavAdminPanel';
import { Loader } from './components/Loader';
import { Header } from './components/Header';
import Preloader from './ui/104.mp4';
import { useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { typography } from '@mui/system';


const MainTheme = createTheme({
  palette: {
    background: {
      default: "#000"
    },
    text: {
      primary: '#fff'
    }
  },
  typography: {
    fontSize: 12,
    fontFamily: 'Poppins, sans-serif',
  }
});

const AdminTheme = createTheme({
  palette: {
    background: {
      default: "#fff"
    },
    text: {
      primary: '#343434'
    }
  },
  typography: {
    fontSize: 12,
    fontFamily: 'Poppins, sans-serif',
  }
});

function App() {
  const { login, logout, token, userId, ready } = useAuth()
  const isAuthenticated = !!token
  const routes = useRouts(isAuthenticated)

  const [preloader, setPreloader] = useState(false)
  const refPreloader = useRef()
  let location = useLocation();

  if (location.pathname === '/') {
    window.onload = function () {
      window.setTimeout(function () {
        refPreloader.current.classList.toggle('active')
      }, 1500);
      window.setTimeout(function () {
        setPreloader(!preloader)
      }, 5000);
    }
  }

  /*  !preloader */
  if (false && location.pathname === '/') {
    return (
      <div className='wrapper_preloader'>
        <video ref={refPreloader} className='preloader' playsinline autoplay='true' muted loop id="myVideo">
          <source src={Preloader} type="video/mp4" />
        </video>
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
      <ThemeProvider theme={
        location.pathname === '/admin-concerts-page' ||
          location.pathname === '/admin-tracks-page' ||
          location.pathname === '/admin-video-page' ||
          location.pathname === '/admin' ||
          location.pathname === '/authpanel' ? AdminTheme : MainTheme
      } >
        <CssBaseline />
        {isAuthenticated &&
          location.pathname === '/admin-concerts-page' ||
          location.pathname === '/admin-tracks-page' ||
          location.pathname === '/admin-video-page' ||
          location.pathname === '/admin' ||
          location.pathname === '/authpanel' ?
          <NavAdminPanel /> : ''}
        {location.pathname !== '/admin-concerts-page' &&
          location.pathname !== '/admin-tracks-page' &&
          location.pathname !== '/admin-video-page' &&
          location.pathname !== '/admin' &&
          location.pathname !== '/authpanel' ? < Header /> : ''}
        {routes}
      </ThemeProvider>
    </AuthContext.Provider >
  );
}
export default App