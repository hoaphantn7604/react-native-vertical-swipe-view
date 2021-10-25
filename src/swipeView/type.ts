import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  maxHeight: number;
  position?: 'top' | 'bottom';
  visible?: boolean;
  renderHeader?: () => JSX.Element;
  onRequestClose?: ()=> void;
  onRequestShow?: ()=> void;
}

export type SwipeView = React.FC<Props>;
