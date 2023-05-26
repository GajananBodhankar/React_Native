import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Operation from './nameEmail';
import Edit from './edit';
const NavNameEmail = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Operation">
        <Stack.Screen name="Operation" component={Operation} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default NavNameEmail;
