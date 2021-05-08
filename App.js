import React, {useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen'
import Router from './app/routes'

function App() {
  useEffect(() => {
    // init
    SplashScreen.hide()

    return () => {
      // uninit
    }
  }, [])

  return <Router />
}

export default App
