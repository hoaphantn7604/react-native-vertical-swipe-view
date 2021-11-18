import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface Props {
  style?: StyleProp<ViewStyle>;
  maxHeight?: number;
  timeout?: number;
  position?: 'top' | 'bottom',
  backgroundColor?: string;
  children?: ReactNode | undefined 
}

