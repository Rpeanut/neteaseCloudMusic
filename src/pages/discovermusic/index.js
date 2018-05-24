import React, { PureComponent } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import MusicScene from './musicScene';
import VideoScene from './videoScene';
import RadioScene from './radioScene';
import styles from './styles';
import { color } from '../../utils/style';

class DiscoverMusic extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: '发现音乐',
    tabBarIcon: ({ tintColor }) => <Icon name="ios-disc-outline" size={30} color={tintColor} />,
    headerTitle: (
      <TouchableOpacity style={styles.searchBar}>
        <Icon name="ios-search-outline" size={15} color="#cccccc" />
        <Text style={{ color: '#cccccc' }}>猜你喜欢 最美情侣</Text>
      </TouchableOpacity>
    ),
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate('ModalMenu', { title: '测试' })}>
        <Icon name="ios-microphone-outline" size={30} color="#ffffff" style={{ marginLeft: 20 }} />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Player', { title: '播放器' })}>
        <Icon name="ios-stats-outline" size={30} color="#ffffff" style={{ marginRight: 20 }} />
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: color.theme,
    },
  });
  render() {
    const types = [
      { title: '音乐', component: MusicScene },
      { title: '视频', component: VideoScene },
      { title: '电台', component: RadioScene },
    ];
    return (
      <ScrollableTabView
        style={{ flex: 1, backgroundColor: '#FBFCFE' }}
        tabBarBackgroundColor="#ffffff"
        tabBarActiveTextColor="#D43C33"
        tabBarInactiveTextColor="#000000"
        tabBarUnderlineStyle={{ backgroundColor: '#D43C33' }}
        renderTabBar={() => <DefaultTabBar />}
      >
        {types.map((v, i) => {
          const Component = v.component;
          return <Component key={i} tabLabel={v.title} navigation={this.props.navigation} />;
        })}
      </ScrollableTabView>
    );
  }
}

export default DiscoverMusic;
