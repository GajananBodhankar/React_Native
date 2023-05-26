import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Drawer from './Drawer';
import {Splash} from './Splash';
const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Drawer" component={Drawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStack;
