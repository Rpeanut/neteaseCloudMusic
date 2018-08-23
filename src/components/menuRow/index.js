import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { width, color, onePixel } from '../../utils/style';
import { H4, Tip, H3 } from '../text';

const styles = StyleSheet.create({
  contain: {
    height: width * 0.137,
    paddingLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightArea: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
  },
  tipContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 8,
  },
});

const MenuRow = (props) => {
  const {
    leftIcon, title, subTitle, rightIcon, border = true, rightTip, image,
  } = props;
  const borderStyle = border ? { borderBottomWidth: onePixel, borderColor: color.border } : {};
  return (
    <View style={styles.contain}>
      <View style={[styles.center, { width: 45, marginRight: image ? 10 : 0 }]}>
        {leftIcon && <Icon name={leftIcon} size={25} />}
        {image && <Image source={image} style={{ width: '100%', height: '90%', marginLeft: 10 }} />}
      </View>
      <View style={[styles.rightArea, borderStyle]}>
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <H3 numberOfLines={1}>{title}</H3>
          {subTitle && <H4 numberOfLines={1} style={{ marginTop: 5 }}>{subTitle}</H4>}
        </View>
        <View style={styles.tipContainer}>
          {rightTip && <H4 numberOfLines={1} style={{ marginRight: 4 }}>{rightTip}</H4>}
          {rightIcon && <Icon name="ios-arrow-forward-outline" size={20} />}
        </View>
      </View>
    </View>
  );
};
export default MenuRow;
