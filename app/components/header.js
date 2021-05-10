import React from 'react'
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'

import {px2pt} from '../utils/ui'
import {useStatusHeight} from '../hook'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: px2pt(88),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#eee',
  },
  image: {
    height: px2pt(40),
    width: px2pt(40),
  },
  node: {
    position: 'absolute',
    height: '100%',
    paddingLeft: px2pt(32),
    paddingRight: px2pt(32),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lrText: {
    fontSize: px2pt(30),
    color: '#3080ED',
  },
  title: {
    fontSize: px2pt(36),
    maxWidth: px2pt(500),
    color: '#333',
    fontWeight: 'bold',
  },
  paddingHorizontal0: {
    paddingHorizontal: 0,
  },
  left0: {
    left: 0,
  },
  right0: {
    right: 0,
  },
})

function renderNode(node, image, text, onPress, textColor, isLeft) {
  if (node) {
    return (
      <View
        style={[
          styles.node,
          isLeft ? styles.left0 : styles.right0,
          styles.paddingHorizontal0,
        ]}>
        {node}
      </View>
    )
  }

  let imageNode = null
  let textNode = null
  if (image) {
    imageNode = (
      <Image style={styles.image} source={image} resizeMode="contain" />
    )
  }

  if (text) {
    textNode = (
      <Text
        style={[styles.lrText, textColor ? {color: textColor} : null]}
        allowFontScaling={false}>
        {text}
      </Text>
    )
  }

  return (
    <TouchableOpacity
      style={[styles.node, isLeft ? styles.left0 : styles.right0]}
      onPress={() => {
        onPress()
      }}>
      {imageNode}
      {textNode}
    </TouchableOpacity>
  )
}

function renderCenter(node, title) {
  if (node) {
    return node
  }

  return (
    <Text style={styles.title} numberOfLines={1}>
      {title}
    </Text>
  )
}

function Index(props) {
  const {
    style,
    leftImage,
    rightImage,
    leftText,
    rightText,
    leftNode,
    rightNode,
    title,
    centerNode,
    onLeftPress,
    onRightPress,
    leftTextColor,
    rightTextColor,
  } = props

  const statusBarHeight = useStatusHeight()

  return (
    <View
      style={[
        styles.container,
        {
          marginTop: px2pt(statusBarHeight),
        },
        style,
      ]}>
      {renderNode(
        leftNode,
        leftImage,
        leftText,
        onLeftPress,
        leftTextColor,
        true,
      )}
      {renderCenter(centerNode, title)}
      {renderNode(
        rightNode,
        rightImage,
        rightText,
        onRightPress,
        rightTextColor,
      )}
    </View>
  )
}

Index.propTypes = {
  /** 样式 */
  style: PropTypes.object,
  /** 左边图片 */
  leftImage: PropTypes.number,
  /** 右边图片 */
  rightImage: PropTypes.number,
  /** 左边文字 */
  leftText: PropTypes.string,
  /** 右边文字 */
  rightText: PropTypes.string,
  /** 左边节点 */
  leftNode: PropTypes.node,
  /** 右边节点 */
  rightNode: PropTypes.node,
  /** 中间文字 */
  title: PropTypes.string,
  /** 中间节点 */
  centerNode: PropTypes.node,
  /** 左边点击 */
  onLeftPress: PropTypes.func,
  /** 右边点击 */
  onRightPress: PropTypes.func,
  /** 左边文字颜色 */
  leftTextColor: PropTypes.string,
  /** 右边文字颜色 */
  rightTextColor: PropTypes.string,
}

Index.defaultProps = {
  style: null,
  leftImage: null,
  rightImage: null,
  leftText: '',
  rightText: '',
  leftNode: null,
  rightNode: null,
  title: '',
  centerNode: null,
  onLeftPress: () => {},
  onRightPress: () => {},
  leftTextColor: '',
  rightTextColor: '',
}

export default Index
