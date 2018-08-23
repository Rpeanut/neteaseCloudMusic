import React, { PureComponent } from 'react';
import { View, TouchableOpacity, SectionList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { queryUserPlayList } from '../../actions/mymusic';
import { color } from '../../utils/style';
import MenuRow from '../../components/menuRow';
import { H2, Tip } from '../../components/text';
import styles from './styles';

@connect(
  state => ({
    mymusic: state.mymusic,
  }),
  { queryUserPlayList },
)
class MyMusic extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: '我的音乐',
    tabBarIcon: ({ tintColor }) => <Icon name="ios-musical-notes-outline" size={31} color={tintColor} />,
    headerTitle: (
      <View style={styles.TopBar}>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="ios-cloud-outline" size={30} color={color.white} />
        </TouchableOpacity>
        <H2 color={color.white}>我的音乐</H2>
        <TouchableOpacity onPress={() => navigation.navigate('Player', { title: '播放器' })}>
          <Icon name="ios-stats-outline" size={30} color={color.white} />
        </TouchableOpacity>
      </View>
    ),
    headerStyle: {
      backgroundColor: color.theme,
    },
  });
  componentWillMount() {
    this.props.queryUserPlayList();
  }
  toDetail = (id) => {
    const { navigation } = this.props;
    navigation.navigate('Detail', { title: '歌单', id });
  };
  renderHeader = () => (
    <View>
      <MenuRow title="本地音乐" leftIcon="ios-musical-notes-outline" rightIcon rightTip="10" />
      <MenuRow title="最近播放" leftIcon="ios-play-outline" rightIcon rightTip="100" />
      <MenuRow title="我的电台" leftIcon="ios-radio-outline" rightIcon rightTip="5" />
      <MenuRow title="我的收藏" leftIcon="ios-star-outline" rightIcon rightTip="80" border={false} />
    </View>
  );
  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.toDetail(item.id)}>
      <MenuRow
        title={item.name}
        subTitle={`${item.trackCount}首，  by ${item.creator.nickname}`}
        image={{ uri: `${item.coverImgUrl}?param=140y140` }}
      />
    </TouchableOpacity>
  );
  sectionHeader = ({ section }) => (
    <View style={styles.sectionHeader}>
      <Icon name="ios-arrow-down-outline" size={15} style={{ marginLeft: 15 }} />
      <Tip style={{ marginLeft: 15 }}>{section.title}</Tip>
    </View>
  );
  render() {
    const { createPlaylist, collectPlaylist } = this.props.mymusic;
    const sections = [
      { key: 'createPlaylist', title: `我创建的歌单(${createPlaylist.length})`, data: createPlaylist },
      { key: 'collectPlaylist', title: `我收藏的歌单(${collectPlaylist.length})`, data: collectPlaylist },
    ];
    return (
      <SectionList
        style={{ backgroundColor: '#fff' }}
        keyExtractor={(item, index) => index}
        sections={sections}
        renderItem={this.renderItem}
        renderSectionHeader={this.sectionHeader}
        ListHeaderComponent={this.renderHeader}
        stickySectionHeadersEnabled
      />
    );
  }
}

export default MyMusic;
