import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default function My({navigation}) {
  function handlePress() {
    navigation.push('Setting')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={handlePress}>
        我的
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
