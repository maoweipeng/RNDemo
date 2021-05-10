import React, {useRef} from 'react'
import {StatusBar, StyleSheet, useColorScheme, View} from 'react-native'
import {useFocusEffect} from '@react-navigation/native'
import {Animated, Easing} from 'react-native'
import LottieView from 'lottie-react-native'

import Header from '../../components/header'

export default function Setting({navigation}) {
  const progress = useRef(new Animated.Value(0)).current
  const isDarkMode = useColorScheme() === 'dark'

  useFocusEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? 'dark-content' : 'light-content')

    Animated.timing(progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start()
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
      <View style={styles.content}>
        <View style={styles.lottie}>
          <LottieView
            source={require('../../lotties/smile.json')}
            progress={progress}
          />
        </View>
      </View>
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
  text: {
    fontSize: 36,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    height: 200,
    width: 200,
  },
})
