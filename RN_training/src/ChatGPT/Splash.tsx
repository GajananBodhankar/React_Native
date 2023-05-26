import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {splashStyle} from './Styles';

export const Splash = ({navigation}: any) => {
  return (
    <View style={splashStyle.mainContainer}>
      <ImageBackground
        source={require('./Assets/PrimaryLogo.png')}
        style={splashStyle.image}
        resizeMethod="resize"
        resizeMode="contain"
      />
      <SafeAreaView />
      <Text style={splashStyle.txtwelcome}>WELCOME TO THE</Text>
      <Text style={splashStyle.txtwelcome}>APPLICATION!!</Text>
      <View style={splashStyle.subContainer}>
        <Pressable
          style={splashStyle.pressable}
          onPress={() => navigation.navigate('Login')}>
          <Text style={splashStyle.txtgetstart}>Get Started</Text>
          <Image source={require('./Assets/FrontIcon.png')} />
        </Pressable>
      </View>
    </View>
  );
};
