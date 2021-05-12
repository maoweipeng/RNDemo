import React from 'react'
import {StyleSheet, View} from 'react-native'
import LottieView from 'lottie-react-native'
import {px2pt} from '../../utils/ui'

export default function Loading() {
  return (
    <View style={styles.loading}>
      <LottieView
        source={require('../lotties/json/loading.json')}
        resizeMode="cover"
        loop
        autoPlay
      />
    </View>
  )
}

const styles = StyleSheet.create({
  loading: {
    height: px2pt(160),
    width: px2pt(160),
  },
})
