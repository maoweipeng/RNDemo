import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {useFocusEffect} from '@react-navigation/native'

export default function Setting({navigation}) {
  useFocusEffect(() => {
    console.log('setting')
  })

  function handlePress() {
    navigation.pop()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={handlePress}>
        设置
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
