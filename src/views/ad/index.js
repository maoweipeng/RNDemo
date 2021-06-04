import React, {useEffect, useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'

function useTimeout(initValue, callback) {
  const [time, setTime] = useState(initValue)

  useEffect(() => {
    function countdown() {
      setTime(time - 1)

      if (time <= 1) {
        callback()
        return
      }
    }

    const timer = setTimeout(countdown, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [callback, time])

  return time
}

function Timer({onTimeout}) {
  const time = useTimeout(3, onTimeout)
  return <Text style={styles.text}>{time}</Text>
}

export default function Ad({navigation}) {
  function handleTimeout() {
    navigation.replace('Index')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>广告</Text>
      <Timer onTimeout={handleTimeout} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 36,
  },
})
