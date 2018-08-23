import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
});
const Avatar = (props) => {
  const { img, size } = props;
  const styleR = size ? { height: size, width: size, borderRadius: size / 2 } : {};
  return <Image source={img} style={[styles.avatar, styleR]} />;
};

export default Avatar;
