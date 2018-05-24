import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { width as screenWidth } from '../../utils/style';
import { Small, Normal, Tip } from '../text';

const GridItem = (props) => {
  const {
    width = 0.325, height = 0.325, title, subTitle, image, picUrl, item,
  } = props;
  const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      width: screenWidth * width,
    },
    imgContainer: {
      width: screenWidth * width,
      height: screenWidth * height,
      backgroundColor: 'transparent',
    },
    img: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: 1,
    },
    tipText: {
      position: 'absolute',
      top: 2,
      right: 5,
      zIndex: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    textContainer: {
      width: screenWidth * width,
      padding: 5,
    },
  });
  const calculateCount = count => (count > 10000 && `${(count / 10000).toFixed(1)}万`) || count;
  return (
    <TouchableOpacity style={[styles.container, this.props.style]} onPress={this.props.onPress}>
      <View style={styles.imgContainer}>
        {image && <Image source={image} style={styles.img} />}
        {picUrl && <Image source={{ uri: picUrl }} style={styles.img} />}
        {item.playCount && (
          <View style={styles.tipText}>
            <Icon name="ios-volume-down-outline" color="#ffffff" size={16} />
            <Small title={calculateCount(item.playCount)} style={{ color: '#ffffff' }} />
          </View>
        )}
      </View>
      <View style={styles.textContainer}>
        {/* 小标题存在则限制显示一行 */}
        <Normal title={title} numberOfLines={subTitle ? 1 : 2} />
        {subTitle && <Tip title={subTitle} numberOfLines={1} />}
      </View>
    </TouchableOpacity>
  );
};

export default GridItem;
