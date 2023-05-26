import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { useReduxDevToolsExtension } from '@react-navigation/devtools';
import {useFlipper} from '@react-navigation/devtools';
import Login from './Login';
import Details from './Details';
import Contents from './Contents';
import CreateAccount from './CreateAccount';

const Stack = createNativeStackNavigator();

const MainNavg = () => {
  const navigationRef = useNavigationContainerRef();

  useReduxDevToolsExtension(navigationRef);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Contents"
          component={Contents}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavg;
