import React, {createContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './Login';
import {Provider} from 'react-redux';
import Store from './Redux/Store';
import Contents from './Contents';
import Tabnavigation from './Tabnavigation';
import Drawernavigation from './Drawernavigation';
import {Context} from './Context';
const Stack = createNativeStackNavigator();

const StackNav = () => {
  const {callBack} = Context();
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Drawer" component={Drawernavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default StackNav;
