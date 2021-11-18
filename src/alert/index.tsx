import React, { useEffect, useImperativeHandle, useState } from "react";
import { View } from "react-native";
import { Props } from "./type";
import SwipeView from '../swipeView';
import { styles } from "./styles";

const AlertComponent = React.forwardRef((props: Props, ref) => {
  const { maxHeight = 150, timeout = 2000, backgroundColor = '#DDDDDD', position = 'top' } = props;
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => {
    return { show, hide };
  });

  useEffect(() => {
    let interval: any = null
    if (timeout && visible) {
      interval = setInterval(() => {
        setVisible(false);
      }, timeout);


    }
    return () => {
      clearInterval(interval);
    }
  }, [timeout, visible])

  const show = () => {
    setVisible(true);
  }

  const hide = () => {
    setVisible(false);
  }

  return <SwipeView
    visible={visible}
    style={[styles.swipeView, { backgroundColor: backgroundColor }, position === 'top' ? { top: 0 } : { bottom: 0 }]}
    maxHeight={maxHeight}
    headerStyle={styles.headerTop}
    renderHeader={() => <View />}>
    {props?.children}
  </SwipeView>
});

export default AlertComponent;
