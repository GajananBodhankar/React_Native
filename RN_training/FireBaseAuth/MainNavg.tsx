import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import CreateAcc from './CreateAcc';
import Home from './Home';
import SignIn from './SignIn';

const Stack = createNativeStackNavigator();
const MainNavg = () => {

  const [initializing, setInitializing] = useState(true);
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CreateAcc"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="CreateAcc" component={CreateAcc} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavg;
