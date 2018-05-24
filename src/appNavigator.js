import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import {
  createNavigationPropConstructor,
  initializeListeners,
} from 'react-navigation-redux-helpers';
import AppNavigator from './routes';

const navigationPropConstructor = createNavigationPropConstructor('root');
// @connect()
class AppWithNavigationState extends PureComponent {
  state = {};
  componentDidMount() {
    initializeListeners('root', this.props.nav);
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

export default connect(state => ({
  nav: state.nav,
}))(AppWithNavigationState);
