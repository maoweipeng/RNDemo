import React, {useEffect, useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'

function Timer({onTimeout}) {
  const [time, setTime] = useState(3)

  useEffect(() => {
    function countdown() {
      if (time <= 0) {
        onTimeout()
        return
      }

      setTime(time - 1)
    }

    const timer = setTimeout(countdown, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [onTimeout, time])

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
