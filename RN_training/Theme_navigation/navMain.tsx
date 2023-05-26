import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LogOne from './LogOne';
import LogThree from './LogThree';
import LogTwo from './LogTwo';
const Nav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogOne" component={LogOne} />
        <Stack.Screen name="LogTwo" component={LogTwo} />
        <Stack.Screen name="LogThree" component={LogThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Nav;
