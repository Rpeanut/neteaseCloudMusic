import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import DiscoverMusic from './pages/discovermusic';
import MyMusic from './pages/mymusic';
import Account from './pages/account';
import Friends from './pages/friends';
import Test from './pages/test';
import { color } from './utils/style';

const TabScreens = {
  DiscoverMusic: {
    screen: DiscoverMusic,
    path: '/',
  },
  MyMusic: {
    screen: MyMusic,
  },
  Friends: {
    screen: Friends,
  },
  Account: {
    screen: Account,
  },
};
const TabNav = createBottomTabNavigator(TabScreens, {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: color.white,
    labelStyle: {
      marginBottom: 2.5,
    },
    style: {
      backgroundColor: color.tabColor,
    },
  },
});
TabNav.navigationOptions = (configProps) => {
  const focusedRouteName = configProps.navigation.state.routes[configProps.navigation.state.index].routeName;
  const childNavigationOptions = TabScreens[focusedRouteName].screen.navigationOptions;
  if (childNavigationOptions) {
    return childNavigationOptions(configProps);
  }
  return null;
};

const AppNavigator = createStackNavigator(
  {
    Tab: {
      screen: TabNav,
    },
    Test: { screen: Test },
  },
  {
    navigationOptions: {
      headerBackTitle: '返回aaa',
      headerTintColor: '#333333',
      showIcon: true,
    },
  },
);
export default AppNavigator;
