import React from 'react'
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  ScrollView,
} from 'react-native'
import {useFocusEffect} from '@react-navigation/native'

import Header from '../../components/header'
import Menu from '../../components/lotties/menu'
import Loading from '../../components/lotties/loading'
import Smile from '../../components/lotties/smile'

export default function Lottie({navigation}) {
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
        title="动画"
        onLeftPress={handlePress}
      />

      <ScrollView contentContainerStyle={styles.content}>
        <Menu />
        <Loading />
        <Smile />
      </ScrollView>
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
  },
})
