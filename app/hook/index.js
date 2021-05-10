import {useState, useEffect} from 'react'
import {NativeModules, Platform, StatusBar} from 'react-native'

/**
 * 获取状态栏高度
 * @param {Number} initValue 默认值
 * @returns {Number} 单位: px
 */
export function useStatusHeight(initValue = 0) {
  const [height, setHeight] = useState(initValue)

  useEffect(() => {
    if (Platform.OS === 'android') {
      setHeight(StatusBar.currentHeight)
    } else if (Platform.OS === 'ios') {
      const {StatusBarManager} = NativeModules
      StatusBarManager.getHeight(res => {
        setHeight(res.height || 0)
      })
    }
  }, [])

  return height
}
