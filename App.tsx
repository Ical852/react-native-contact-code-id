import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppNavigator from './src/routes';
import 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;
