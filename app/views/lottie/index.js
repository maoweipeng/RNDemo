import React, {useCallback, useState, useEffect} from 'react'
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  ScrollView,
} from 'react-native'
import {useFocusEffect} from '@react-navigation/native'

import Header from '../../components/header'
import Menu from '../../components/lotties/menu'
import Loading from '../../components/lotties/loading'
import Smile from '../../components/lotties/smile'
import Heart from '../../components/lotties/heart'
import RefreshControl from '../../components/refreshControl'

export default function Lottie({navigation}) {
  const isDarkMode = useColorScheme() === 'dark'
  const [refreshing, setRefreshing] = useState(true)

  useEffect(() => {
    setRefreshing(true)

    const timer = setTimeout(() => {
      setRefreshing(false)
    }, 5000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  useFocusEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? 'dark-content' : 'light-content')
  })

  const handlePress = useCallback(() => {
    navigation.pop()
  }, [navigation])

  const handleRefresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 5000)
    console.log('onRefresh')
  }, [])

  return (
    <View style={styles.container}>
      <Header
        style={styles.header}
        leftText="返回"
        title="动画"
        onLeftPress={handlePress}
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            renderContent={() => <Text>refreshing</Text>}
          />
        }>
        <Menu />
        <Loading />
        <Smile />
        <Heart />
        <Menu />
        <Loading />
        <Smile />
        <Heart />
        <Menu />
        <Loading />
        <Smile />
        <Heart />
        <Menu />
        <Loading />
        <Smile />
        <Heart />
        <Menu />
        <Loading />
        <Smile />
        <Heart />
        <Menu />
        <Loading />
        <Smile />
        <Heart />
        <Menu />
        <Loading />
        <Smile />
        <Heart />
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
  scrollView: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
  },
})
