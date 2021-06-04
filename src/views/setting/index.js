import React from 'react'
import {StatusBar, StyleSheet, useColorScheme, View} from 'react-native'
import {useFocusEffect} from '@react-navigation/native'

import Header from '../../components/header'

export default function Setting({navigation}) {
  const isDarkMode = useColorScheme() === 'dark'

  useFocusEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? 'dark-content' : 'light-content')
  })

  function handlePress() {
    navigation.pop()
  }

  return (
    <View style={styles.container}>
      <Header
        style={styles.header}
        leftText="返回"
        title="设置"
        onLeftPress={handlePress}
      />
      <View style={styles.content} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#eee',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
