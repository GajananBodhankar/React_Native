import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../programs/nav_home';
import LogScreen from '../programs/Nav_Log';
import LogScreen2 from '../programs/nav_Log2';
import Nav from '../programs/Navigation/Main';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        //screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My Home',
            headerTitleAlign: 'center',
            headerTintColor: 'red',
            headerStyle: {backgroundColor: 'black'},
          }}
        />
        <Stack.Screen
          name="Log"
          component={LogScreen}
          options={{
            title: 'Log screen I',
            headerTitleAlign: 'center',
            headerTintColor: 'red',
            headerStyle: {backgroundColor: 'black'},
          }}
        />
        <Stack.Screen
          name="LogScreen2"
          component={LogScreen2}
          options={{
            title: 'Log screen II',
            headerTitleAlign: 'center',
            headerTintColor: 'red',
            headerStyle: {backgroundColor: 'black'},
          }}
        />
        <Stack.Screen name="Nav" component={Nav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
