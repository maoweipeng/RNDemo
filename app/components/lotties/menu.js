import React, {useRef, useState} from 'react'
import {StyleSheet, TouchableOpacity, Animated, Easing} from 'react-native'
import LottieView from 'lottie-react-native'
import {px2pt} from '../../utils/ui'

export default function Loading() {
  const progress = useRef(new Animated.Value(0)).current
  const [show, setShow] = useState(false)

  function handlePress() {
    Animated.timing(progress, {
      toValue: show ? 0 : 1,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start()

    setShow(!show)
  }

  return (
    <TouchableOpacity style={styles.loading} onPress={handlePress}>
      <LottieView source={require('./json/menu.json')} progress={progress} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  loading: {
    height: px2pt(80),
    width: px2pt(80),
  },
})
