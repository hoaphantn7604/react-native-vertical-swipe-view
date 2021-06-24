import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  maxHeight: number;
  position?: 'top' | 'bottom';
  autoShow?: boolean;
  renderHeader?: () => JSX.Element;
  onShow?: (status: boolean)=> void;
}

export type SwipeView = React.FC<Props>;
