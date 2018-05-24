//  分隔线组件
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { width, onePixel, color } from '../../utils/style';

const styles = StyleSheet.create({
  line: {
    width,
    height: onePixel,
    backgroundColor: color.border,
  },
});
export function Separator({ style }) {
  return <View style={[styles.line, style]} />;
}
export function VerticalSeparator({ height = 20 }) {
  return <View style={{ width: onePixel, height, backgroundColor: color.border }} />;
}
