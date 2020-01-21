
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './configureStore'
import Navigation from './RootNavigator';
import {Provider} from 'react-redux';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import NavigationService from './navigationService';
import images from './src/resources/images';

export const AuthLoading = () => (
  <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#2196f3'}}>
    <Text style={{color: 'white', fontSize: 34}}>PokeCart</Text>
    <Image resizeMode={'contain'} style={{width: 80, height: 80}} source={images.pikachu} /> 
  </View>
)

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
        <PersistGate loading={<AuthLoading />} persistor={persistor}>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={{backgroundColor: 'transparent', flex:1 }}>
              <View style={{flexGrow: 1}}>
                <Navigation ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }} />
            </View>
          </SafeAreaView>
        </PersistGate>
    </Provider>
  );
};
export default App;
