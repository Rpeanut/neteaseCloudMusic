import React, { PureComponent } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import IconMenu from '../../components/iconMenu';
import ImageSWiper from '../../components/imageSwiper';
import { Separator } from '../../components/separator';
import ListContainer from './listContainer';
import { musicSceneAction } from '../../actions/discovermusic';

@connect(
  state => ({
    musicModel: state.discovermusic.musicModel,
  }),
  { ...musicSceneAction },
)
class MusicScene extends PureComponent {
  componentWillMount() {
    const {
      queryBanner,
      queryPersonalized,
      queryPersonalizedPrivatecontent,
      queryPersonalizedNewSong,
      queryPersonalizedMv,
    } = this.props;
    queryBanner();
    queryPersonalized();
    queryPersonalizedPrivatecontent();
    queryPersonalizedNewSong();
    queryPersonalizedMv();
  }
  renderHeader = () => (
    <View>
      <ImageSWiper banner={this.props.musicModel.banners} />
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <IconMenu icon="md-radio" title="私人FM" />
        <IconMenu icon="md-calendar" title="每日推荐" />
        <IconMenu icon="md-musical-note" title="歌单" />
        <IconMenu icon="md-stats" title="排行榜" />
      </View>
      <Separator />
    </View>
  );
  renderItem = ({ item }) => (
    <ListContainer
      title={item.title}
      dataList={item.data}
      navigation={this.props.navigation}
      type={item.type}
    />
  );
  render() {
    const {
      personalized, personalizedPrivatecontent, personalizedNewSong, personalizedMv,
    } = this.props.musicModel;
    const sections = [
      {
        title: '推荐歌单',
        type: 'playlist',
        data: personalized,
      },
      {
        title: '独家放送',
        type: 'special',
        data: personalizedPrivatecontent,
      },
      {
        title: '最新音乐',
        type: 'newsongs',
        data: personalizedNewSong,
      },
      {
        title: '推荐MV',
        type: 'mv',
        data: personalizedMv,
      },
    ];
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={sections}
          keyExtractor={item => item.type}
          ListHeaderComponent={this.renderHeader}
          renderItem={this.renderItem}
          ListFooterComponent={() => (
            <Text style={{ textAlign: 'center', padding: 10, transform: [{ scale: 0.857143 }] }}>看视频，发现更多有趣内容</Text>
          )}
        />
      </View>
    );
  }
}

export default MusicScene;
