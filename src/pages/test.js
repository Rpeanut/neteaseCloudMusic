import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

export default function Test({ navigation }) {
  return (
    <TouchableHighlight
      onPress={() => navigation.goBack()}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: 'red' }}>Hello world! this is test page</Text>
    </TouchableHighlight>
  );
}
