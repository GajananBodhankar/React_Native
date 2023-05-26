/* eslint-disable react/react-in-jsx-scope */
import {createDrawerNavigator} from '@react-navigation/drawer';
import Validate from './Validate';
import Routes from '../AsyncDB/Routes';
import {CustomDrawer} from './CustomDrawer';
const DrawerTab = createDrawerNavigator();
const Drawer = () => {
  return (
    <DrawerTab.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <DrawerTab.Screen name="Validate" component={Validate} />
      <DrawerTab.Screen name="Routes" component={Routes} />
    </DrawerTab.Navigator>
  );
};
export default Drawer;
