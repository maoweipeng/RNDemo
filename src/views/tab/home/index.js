import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {useFocusEffect} from '@react-navigation/native'

export default function Home({navigation}) {
  useFocusEffect(() => {
    console.log('fo')
  })

  function handlePress() {
    navigation.navigate('Lottie')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={handlePress}>
        首页
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
