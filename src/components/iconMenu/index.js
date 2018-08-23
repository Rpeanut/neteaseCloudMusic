import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { width, color } from '../../utils/style';
import { H4 } from '../text';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 4,
    height: width / 4,
  },
  iconContainer: {
    height: '50%',
    width: '50%',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: color.theme,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 5,
    color: color.black,
  },
});
const IconMenu = ({ title, icon }) => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      <Icon name={icon} size={25} color="#D43C33" />
    </View>
    <H4 style={styles.text}>{title}</H4>
  </View>
);
export default IconMenu;
