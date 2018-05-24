import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
// import DiscoverMusic from './pages/discovermusic';
import MyMusic from './pages/mymusic';
import Account from './pages/account';
import Friends from './pages/friends';

const Tab = TabNavigator(
  {
    // DiscoverMusic: {
    //   screen: DiscoverMusic,
    // },
    MyMusic: {
      screen: MyMusic,
    },
    Friends: {
      screen: Friends,
    },
    Account: {
      screen: Account,
    },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    initialRouteName: 'MyMusic',
    lazy: true,
    tabBarOptions: {
      activeTintColor: '#ffffff',
      inactiveTintColor: '#cccccc',
      style: {
        backgroundColor: '#333333',
      },
    },
  },
);

const AppNavigator = StackNavigator(
  {
    Tab: { screen: Tab },
  },
  {
    navigationOptions: {
      headerBackTitle: '返回',
      headerTintColor: '#333333',
      showIcon: true,
    },
    mode: 'modal',
    headerMode: 'none',
  },
);
export default AppNavigator;
