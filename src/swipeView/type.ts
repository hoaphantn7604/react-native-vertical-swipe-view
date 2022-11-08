import type React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  maxHeight: number;
  position?: 'top' | 'bottom';
  visible?: boolean;
  renderHeader?: () => React.ReactNode;
  onRequestClose?: () => void;
  onRequestShow?: () => void;
}

export type SwipeView = React.FC<Props>;
