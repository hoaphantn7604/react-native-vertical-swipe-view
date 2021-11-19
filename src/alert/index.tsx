import React, { useEffect, useImperativeHandle, useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { Props } from "./type";
import SwipeView from '../swipeView';
import { styles } from "./styles";

const icon_info = require('./assets/info.png');
const icon_warning = require('./assets/warning.png');
const icon_error = require('./assets/error.png');
const icon_success = require('./assets/success.png');
const icon_close = require('./assets/close.png');

const AlertComponent = React.forwardRef((props: Props, ref) => {
  const { maxHeight = 80, timeout = 2000, message = "Message...", position = 'top', type = 'info' } = props;
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

  const renderContent = () => {
    if (type === 'info') {
      return <View style={[styles.row, { backgroundColor: '#87CEFA' }]}>
        <Image style={[styles.image, { tintColor: '#1874CD' }]} source={icon_info} />
        <View style={styles.content}>
          <Text style={[styles.text, { color: '#1874CD' }]}>{message}</Text>
        </View>
        <TouchableOpacity onPress={()=> setVisible(false)}>
          <Image style={[styles.image, { tintColor: '#1874CD' }]} source={icon_close} />
        </TouchableOpacity>
      </View>
    }

    if (type === 'warning') {
      return <View style={[styles.row, { backgroundColor: '#FFF68F' }]}>
        <Image style={[styles.image, { tintColor: '#8B7500' }]} source={icon_warning} />
        <View style={styles.content}>
          <Text style={[styles.text, { color: '#8B7500' }]}>{message}</Text>
        </View>
        <TouchableOpacity onPress={()=> setVisible(false)}>
          <Image style={[styles.image, { tintColor: '#8B7500' }]} source={icon_close} />
        </TouchableOpacity>
      </View>
    }

    if (type === 'error') {
      return <View style={[styles.row, { backgroundColor: '#FA8072' }]}>
        <Image style={[styles.image, { tintColor: '#00CD66' }]} source={icon_error} />
        <View style={styles.content}>
          <Text style={[styles.text, { color: '#CD3333' }]}>{message}</Text>
        </View>
        <TouchableOpacity onPress={()=> setVisible(false)}>
          <Image style={[styles.image, { tintColor: '#CD3333' }]} source={icon_close} />
        </TouchableOpacity>
      </View>
    }

    if (type === 'success') {
      return <View style={[styles.row, { backgroundColor: '#98FB98' }]}>
        <Image style={[styles.image, { tintColor: '#008B45' }]} source={icon_success} />
        <View style={styles.content}>
          <Text style={[styles.text, { color: '#008B45' }]}>{message}</Text>
        </View>
        <TouchableOpacity onPress={()=> setVisible(false)}>
          <Image style={[styles.image, { tintColor: '#008B45' }]} source={icon_close} />
        </TouchableOpacity>
      </View>
    }
    return null;
  }

  return <SwipeView
    visible={visible}
    style={[styles.swipeView, position === 'top' ? { top: 0 } : { bottom: 0 }]}
    maxHeight={maxHeight}
    headerStyle={styles.headerTop}
    renderHeader={() => <View />}>
    {props?.children ? props?.children : renderContent()}
  </SwipeView>
});

export default AlertComponent;
