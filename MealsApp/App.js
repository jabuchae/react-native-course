import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import DrawerNavigator from './navigation/DrawerNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';

import { createStore, combineReducers } from 'redux';
import mealsReducer from  './store/reducers/meals';

enableScreens();
const rootReducer = combineReducers({
  meals: mealsReducer
});

const store = createStore(rootReducer);

const App = () => {
  return  (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <DrawerNavigator/>
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
