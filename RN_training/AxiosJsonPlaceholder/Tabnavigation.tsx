import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Post from 'react-native-vector-icons/MaterialCommunityIcons';
import Comment from 'react-native-vector-icons/FontAwesome';
import Posts from './Posts';
import ToDo from './ToDo';
import Comments from './Comments';
import Contents from './Contents';
const Tab = createBottomTabNavigator();
const Tabnavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name == 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
            return <Icon name={iconName} size={20} />;
          } else if (route.name == 'Posts') {
            iconName = focused ? 'post' : 'post-outline';
            return <Post name={iconName} size={20} />;
          } else if (route.name == 'ToDo') {
            iconName = focused ? 'view-list' : 'view-list-outline';
            return <Post name={iconName} size={20} />;
          } else if (route.name == 'Comments') {
            iconName = focused ? 'comments' : 'comments-o';
            return <Comment name={iconName} size={20} />;
          }
        },
        tabBarLabelStyle: {fontSize: 14, fontWeight: 500},
        tabBarActiveTintColor: 'black',
      })}>
      <Tab.Screen
        name={'Home'}
        component={Contents}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={'Posts'}
        component={Posts}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={'ToDo'}
        component={ToDo}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={'Comments'}
        component={Comments}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
export default Tabnavigation;
