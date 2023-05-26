import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {createContext} from 'react';
import Home from './Home';
import {NavigationContainer} from '@react-navigation/native';
import {Edit} from './Edit';
import {Store} from './Context';
export const User = createContext({
  data: [],
  setData: (i: any) => {},
});
const Stack = createNativeStackNavigator();
const Routes = () => {
  const {mainData} = Store();
  return (
    <User.Provider value={mainData}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
    </User.Provider>
  );
};
export default Routes;
