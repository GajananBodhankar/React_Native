/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Home from './Home';
import MyOrders from './MyOrders';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFnt from 'react-native-vector-icons/FontAwesome';
import DrawerNavg from './DrawerNavg';
import IconPackage from 'react-native-vector-icons/Octicons';
import {Image} from 'react-native';
const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}: any) => ({
        tabBarIcon: ({focused, color, size}) => {
          var icon: any;
          if (route.name == 'Home') {
            icon = focused ? (icon = 'white') : (icon = '#acacac');
            return <Icon name={'ios-home-outline'} size={25} color={icon} />;
          } else if (route.name == 'Profile') {
            icon = focused ? 'white' : '#acacac';
            return <IconFnt name={'user-o'} size={25} color={icon} />;
          } else if (route.name == 'MyOrders') {
            icon = focused ? (icon = 'white') : (icon = '#acacac');
            return <IconPackage name={'package'} size={25} color={icon} />;
          }
        },
        tabBarStyle: {backgroundColor: '#0078be'},
        tabBarLabelStyle: {fontSize: 14},
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#d8d8d8',
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="MyOrders"
        component={MyOrders}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
