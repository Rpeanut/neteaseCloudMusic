import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

class Root extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Text>11133333333333</Text>
        </View>
      </Provider>
    );
  }
}

export default Root;
