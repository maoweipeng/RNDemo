import React, {useEffect} from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default function Other({navigation}) {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('focus')
    })

    return unsubscribe
  }, [navigation])

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      console.log('blur')
    })

    return unsubscribe
  }, [navigation])

  function handlePress() {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={handlePress}>
        发现
      </Text>
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
