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
  /** ?????? */
  style: PropTypes.object,
  /** ???????????? */
  leftImage: PropTypes.number,
  /** ???????????? */
  rightImage: PropTypes.number,
  /** ???????????? */
  leftText: PropTypes.string,
  /** ???????????? */
  rightText: PropTypes.string,
  /** ???????????? */
  leftNode: PropTypes.node,
  /** ???????????? */
  rightNode: PropTypes.node,
  /** ???????????? */
  title: PropTypes.string,
  /** ???????????? */
  centerNode: PropTypes.node,
  /** ???????????? */
  onLeftPress: PropTypes.func,
  /** ???????????? */
  onRightPress: PropTypes.func,
  /** ?????????????????? */
  leftTextColor: PropTypes.string,
  /** ?????????????????? */
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
