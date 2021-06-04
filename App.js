import React, {useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen'
import Router from './src/routes'

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
