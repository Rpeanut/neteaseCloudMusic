import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import AppWithNavigationState from './appNavigator';

const store = configureStore();
export default function Root() {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );
}
