import {Dimensions, PixelRatio} from 'react-native'

const window = Dimensions.get('screen')
const windowWidth = window ? window.width : 375
// 设计稿尺寸
const designSize = {
  width: 750,
  height: 1334,
}

const designScale =
  designSize.width / PixelRatio.getPixelSizeForLayoutSize(windowWidth)

/**
 * 根据屏幕宽度等比缩放
 * @param {Number} size 尺寸
 * @returns {Number}
 */
export function px2pt(size) {
  const dp = size / 2
  return (dp * windowWidth) / 375
}

export function pt2px(size) {
  return PixelRatio.getPixelSizeForLayoutSize(size) * designScale
}
