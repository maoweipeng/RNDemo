import React from 'react'
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableWithoutFeedback,
} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from '../views/tab/home'
import My from '../views/tab/my'
import Discovery from '../views/tab/discovery'

import Ad from '../views/ad'
import Setting from '../views/setting'
import Lottie from '../views/lottie'

import {px2pt} from '../utils/ui'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const emptyPage = () => <View />

function TabPage({navigation}) {
  function handleFBtnPress() {
    navigation.navigate('Discovery')
  }

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabNavigator,
        tabStyle: styles.tabBottom,
        allowFontScaling: false,
        activeTintColor: '#09f',
        inactiveTintColor: '#999',
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName

          if (route.name === 'Home') {
            iconName = require('../images/home.png')
          } else if (route.name === 'My') {
            iconName = require('../images/my.png')
          }

          return (
            iconName && (
              <Image
                style={[styles.icon, {tintColor: color}]}
                source={iconName}
              />
            )
          )
        },
        tabBarLabel: ({focused, color, position}) => {
          let label

          if (route.name === 'Home') {
            label = '首页'
          } else if (route.name === 'Discovery') {
            label = '发现'
          } else if (route.name === 'My') {
            label = '我的'
          }

          return <Text style={[styles.label, {color}]}>{label}</Text>
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Discovery"
        component={emptyPage}
        options={{
          unmountOnBlur: true,
          tabBarVisible: false,
          tabBarVisibilityAnimationConfig: {
            show: {animation: 'spring', config: {duration: 100}},
            hide: {animation: 'timing', config: {duration: 100}},
          },
          tabBarButton: props => {
            return (
              <TouchableWithoutFeedback onPress={handleFBtnPress}>
                <View style={styles.tabBottom}>
                  <View style={styles.floatButton}>
                    <Image
                      style={styles.floatButtonIcon}
                      source={require('../images/discovery.png')}
                    />
                  </View>
                  {props.children}
                </View>
              </TouchableWithoutFeedback>
            )
          },
        }}
      />
      <Tab.Screen name="My" component={My} />
    </Tab.Navigator>
  )
}

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Ad" component={Ad} options={{headerShown: false}} />
        <Stack.Screen
          name="Index"
          component={TabPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Discovery"
          component={Discovery}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Lottie"
          component={Lottie}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  tabNavigator: {
    backgroundColor: '#fff',
  },
  tabBottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: px2pt(30),
    marginBottom: px2pt(6),
    textAlign: 'center',
  },
  labelColor: {
    color: '#a1a1a1',
  },
  focusedLabelColor: {
    color: '#007aff',
  },
  tintColor: {
    tintColor: '#09f',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: px2pt(50),
    width: px2pt(50),
  },
  floatButton: {
    position: 'absolute',
    top: px2pt(-50),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: px2pt(50),
  },
  floatButtonIcon: {
    height: px2pt(100),
    width: px2pt(100),
  },
})
