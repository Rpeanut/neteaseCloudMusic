import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import {
  createNavigationPropConstructor,
  initializeListeners,
} from 'react-navigation-redux-helpers';
import AppNavigator from './routes';
import { queryUserInfo } from './actions/common';

const navigationPropConstructor = createNavigationPropConstructor('root');
@connect(state => ({
  nav: state.nav,
}))
export default class AppWithNavigationState extends PureComponent {
  componentWillMount() {
    const { nav, dispatch } = this.props;
    initializeListeners('root', nav);
    dispatch(queryUserInfo());
  }
  render() {
    const { dispatch, nav } = this.props;
    const navigation = navigationPropConstructor(dispatch, nav);
    return (
      <View style={{ flex: 1 }}>
        <AppNavigator navigation={navigation} />
      </View>
    );
  }
}

