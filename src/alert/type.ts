import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface Props {
  style?: StyleProp<ViewStyle>;
  maxHeight?: number;
  timeout?: number;
  position?: 'top' | 'bottom',
  type?: 'info' | 'warning' | 'error' | 'success'
  message?: string;
  children?: ReactNode | undefined 
}

