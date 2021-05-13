import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from 'react'
import {StyleSheet, Text} from 'react-native'
import PropTypes from 'prop-types'

const RefreshControl = forwardRef((props, ref) => {
  const {children, onRefresh, refreshing, renderContent} = props
  const [nativeRefreshing, setNativeRefreshing] = useState(false)

  useEffect(() => {
    setNativeRefreshing(refreshing)
  }, [refreshing])

  useImperativeHandle(ref, () => ({
    setNativeRefreshing: (value = false) => {
      setNativeRefreshing(value)
    },
  }))

  if (nativeRefreshing) {
    return (
      <>
        {renderContent()}
        {children}
      </>
    )
  }

  return children
})

const styles = StyleSheet.create({})

RefreshControl.propTypes = {
  /** 在视图开始刷新时调用 */
  onRefresh: PropTypes.func,
  /** 视图是否应该在刷新时显示指示器 */
  refreshing: PropTypes.bool,
  /** 指示器内容 */
  renderContent: PropTypes.func.isRequired,
}

RefreshControl.defaultProps = {
  onRefresh: () => {},
  refreshing: false,
}

export default RefreshControl
