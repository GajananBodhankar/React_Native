import React, {Image, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Tabnavigation from './Tabnavigation';
import {DrawerContent} from './DrawerContent';

const Drawer = createDrawerNavigator();
const Drawernavigation = ({route}: any) => {
  const user = route.params;
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{drawerStyle: {backgroundColor: '#F1C40F'}}}
      drawerContent={props => <DrawerContent {...props} data={{user}} />}>
      <Drawer.Screen
        name="Tab"
        component={Tabnavigation}
        options={{headerShown: false, drawerType: 'front'}}
      />
    </Drawer.Navigator>
  );
};
export default Drawernavigation;
