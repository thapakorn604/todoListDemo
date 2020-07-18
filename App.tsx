import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from 'core/store';
import { HomeScreen } from '@app/screens';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
