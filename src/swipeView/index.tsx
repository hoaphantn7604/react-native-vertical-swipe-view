import React, { useEffect, useRef, useState } from 'react';
import { Easing, PanResponder, View } from 'react-native';
import { Animated } from 'react-native';
import { styles } from './styles';
import type { SwipeView } from './type';

const SwipeViewComponent: SwipeView = (props) => {
  const {
    style,
    headerStyle,
    backgroundColor = 'transparent',
    maxHeight = 180,
    renderHeader,
    position = 'top',
    visible = false,
    onRequestClose,
    onRequestShow,
  } = props;
  const minHeight = 0;
  const [viewHeight] = useState(new Animated.Value(minHeight));
  let currentHeight = 0;

  useEffect(() => {
    if (visible) {
      checkshow(visible);
    } else {
      checkshow(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const checkshow = (status: boolean) => {
    Animated.timing(viewHeight, {
      toValue: status ? maxHeight : minHeight,
      duration: 180,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      currentHeight = status ? maxHeight : minHeight;
    });
  };

  const handlerShow = (status: boolean) => {
    if (!status) {
      if (onRequestClose) {
        onRequestClose();
      }
    } else {
      if (onRequestShow) {
        onRequestShow();
      }
    }
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (_evt, _gestureState) => {
        return true;
      },
      onPanResponderEnd: (_evt, _gestureState) => {
        return true;
      },
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_evt, gestureState) => {
        const { dy } = gestureState;

        if (position === 'top') {
          if (dy > 0) {
            if (currentHeight < maxHeight) {
              currentHeight = dy;
            }
          } else {
            currentHeight = maxHeight + dy;
          }
        } else {
          if (dy < 0) {
            if (currentHeight < maxHeight) {
              currentHeight = minHeight - dy;
            }
          } else {
            currentHeight = maxHeight - dy;
          }
        }

        if (currentHeight < maxHeight && currentHeight > 0) {
          Animated.timing(viewHeight, {
            toValue: currentHeight,
            duration: 80,
            easing: Easing.linear,
            useNativeDriver: false,
          }).start(() => {});
        }
      },
      onPanResponderRelease: (_evt, gestureState) => {
        const { dy } = gestureState;
        if (dy !== 0) {
          if (position === 'top') {
            if (dy > 0) {
              Animated.timing(viewHeight, {
                toValue: maxHeight,
                duration: 180,
                easing: Easing.linear,
                useNativeDriver: false,
              }).start(() => {
                currentHeight = maxHeight;
                handlerShow(true);
              });
            } else {
              Animated.timing(viewHeight, {
                toValue: minHeight,
                duration: 180,
                easing: Easing.linear,
                useNativeDriver: false,
              }).start(() => {
                currentHeight = minHeight;
                handlerShow(false);
              });
            }
          } else {
            if (dy < 0) {
              Animated.timing(viewHeight, {
                toValue: maxHeight,
                duration: 180,
                easing: Easing.linear,
                useNativeDriver: false,
              }).start(() => {
                currentHeight = maxHeight;
                handlerShow(true);
              });
            } else {
              Animated.timing(viewHeight, {
                toValue: minHeight,
                duration: 180,
                easing: Easing.linear,
                useNativeDriver: false,
              }).start(() => {
                currentHeight = minHeight;
                handlerShow(false);
              });
            }
          }
        }
      },
    })
  ).current;

  const _renderTop = () => {
    return (
      <View style={[styles.containerTop, style]}>
        <Animated.View
          style={{
            backgroundColor: backgroundColor,
            height: viewHeight,
          }}
        >
          {props?.children}
        </Animated.View>
        <Animated.View
          {...panResponder.panHandlers}
          style={[styles.header, headerStyle]}
        >
          {renderHeader ? renderHeader() : <View style={styles.pan} />}
        </Animated.View>
      </View>
    );
  };

  const _renderBottom = () => {
    return (
      <View style={[styles.containerBottom, style]}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[styles.header, headerStyle]}
        >
          {renderHeader ? renderHeader() : <View style={styles.pan} />}
        </Animated.View>
        <Animated.View
          style={{
            backgroundColor: backgroundColor,
            height: viewHeight,
          }}
        >
          {props?.children}
        </Animated.View>
      </View>
    );
  };

  if (position === 'top') {
    return _renderTop();
  }
  return _renderBottom();
};

export default SwipeViewComponent;
