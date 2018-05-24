import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { GridItem } from '../../components/girdItem';
import { H3 } from '../../components/text';
import color from '../../utils/style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
class ListContainer extends PureComponent {
  // toDetail = (item) => {
  //   // const { navigation, type = 'playlist' } = this.props;
  //   // type === 'playlist' && navigation.navigate('Detail', { title: '歌单', id: item.id });
  //   // type === 'mv' && navigation.navigate('MvDetail', { title: 'MV', id: item.id });
  //   // type === 'djprogram' && navigation.navigate('DjDetail', { title: '电台', item });
  // };
  render() {
    const { title, dataList } = this.props;
    return (
      <View style={[styles.container, { marginTop: title ? 10 : 0 }]}>
        {title && (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                width: 2,
                height: 10,
                backgroundColor: color.theme,
                marginRight: 10,
              }}
            />
            <H3 title={`${title} >`} />
          </View>
        )}
        <View style={styles.gridContainer}>
          {dataList.map((v, i) => (
            <GridItem
              item={v}
              width={v.width || 0.325}
              key={i}
              title={v.title}
              subTitle={v.subTitle}
              image={v.image}
              picUrl={v.picUrl}
              onPress={() => this.toDetail(v)}
            />
          ))}
        </View>
      </View>
    );
  }
}

export default ListContainer;
