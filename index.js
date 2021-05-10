/**
 * @format
 */

import {AppRegistry, Text, TextInput} from 'react-native'
import App from './App'
import {name as appName} from './app.json'

if (!__DEV__) {
  console.info = () => {}
  console.log = () => {}
  console.warn = () => {}
  console.debug = () => {}
  console.error = () => {}
}

// 控制字体不根据系统的“字体大小”辅助选项来进行缩放
TextInput.defaultProps = Object.assign({}, TextInput.defaultProps, {
  allowFontScaling: false,
})
Text.defaultProps = Object.assign({}, Text.defaultProps, {
  allowFontScaling: false,
})

AppRegistry.registerComponent(appName, () => App)
