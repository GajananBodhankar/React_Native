import React, {Image, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from './Profile';
import Home from './Home';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View} from 'react-native';
import {DrawerContent} from './DrawerContent';
import BottomTab from './BottomTab';
import MyOrders from './MyOrders';
const Drawer = createDrawerNavigator();
const DrawerNavg = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{drawerStyle: {backgroundColor: '#0078be'}}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Bottom"
        component={BottomTab}
        options={{headerShown: false, drawerType: 'front'}}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavg;
