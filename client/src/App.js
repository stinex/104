import { useEffect, useRef, useState } from 'react';

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
  },
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
  },
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

  // cursor

  const cursor = useRef(null)
  const aura = useRef(null)
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1
  })




  const [st, setSt] = useState(false)
  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event
      const mouseX = clientX
      const mouseY = clientY

      positionRef.current.mouseX = mouseX - aura.current.clientWidth / 2
      positionRef.current.mouseY = mouseY - aura.current.clientHeight / 2

      cursor.current.style.transform = `
      translate3d(${mouseX - cursor.current.clientWidth / 2}px, ${mouseY - cursor.current.clientHeight / 2}px, 0)
      `
      return () => { }
    })
    setSt(true)
  }, [])

  useEffect(() => {
    if (st === true) {
      const followMouse = () => {
        positionRef.current.key = requestAnimationFrame(followMouse)

        const {
          mouseX,
          mouseY,
          destinationX,
          destinationY,
          distanceX,
          distanceY,
        } = positionRef.current

        if (!destinationX | !destinationY) {
          positionRef.current.destinationX = mouseX
          positionRef.current.destinationY = mouseY
        } else {
          positionRef.current.distanceX = (mouseX - destinationX) * 0.1
          positionRef.current.distanceY = (mouseY - destinationY) * 0.1

          if (Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) < 0.1) {
            positionRef.current.destinationX = mouseX
            positionRef.current.destinationY = mouseY
          } else {
            positionRef.current.destinationX += distanceX
            positionRef.current.destinationY += distanceY
          }
        }

        aura.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`
      }
      followMouse()

      const link = document.querySelectorAll('a')

      link.forEach(a => {
        a.addEventListener('mouseover', () => {
          cursor.current.classList.add('hover')
        })
        a.addEventListener('mouseleave', () => {
          cursor.current.classList.remove('hover')
        })
      })
    }


  }, [st])






  /*  !preloader */
  if (!preloader && location.pathname === '/') {
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
        <div ref={cursor} className="cursor"></div>
        <div ref={aura} className="aura"></div>
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