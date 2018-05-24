import React from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { width } from '../../utils/style';
import styles from './styles';

export default function ({ banner }) {
  return (
    <View style={styles.container}>
      {banner &&
        banner.length > 0 && (
          <Swiper
            style={styles.wrapper}
            height={width / 3}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
            paginationStyle={styles.pagination}
            loop
            autoplay
            removeClippedSubviews={false}
          >
            {banner.map((v, i) => (
              <View style={styles.slide} key={i}>
                <Image resizeMode="stretch" style={styles.image} source={{ uri: `${v.pic}?param=500y200` }} />
              </View>
            ))}
          </Swiper>
        )}
    </View>
  );
}
