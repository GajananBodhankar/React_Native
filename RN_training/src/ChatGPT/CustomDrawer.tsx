/* eslint-disable react-native/no-inline-styles */
import {signOut} from 'firebase/auth';
import React, {useState} from 'react';
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import {auth} from './firebase.config';
import {customDrawerstyle} from './Styles';

export const CustomDrawer = (props: {
  navigation: {navigate: (arg0: string) => void};
}) => {
  const [ChatGPTBool, setChatGPT] = useState<boolean>(true);
  const [TodoBool, setTodo] = useState<boolean>(false);
  const [logoutBool, setLogout] = useState<boolean>(false);
  const [alertBool, setalertBool] = useState<boolean>(false);
  function logout() {
    signOut(auth).then(() => props.navigation.navigate('Login'));
    setalertBool(false);
  }
  return (
    <View style={customDrawerstyle.mainContainer}>
      <SafeAreaView />
      <Image
        source={{
          uri: 'https://rapidapi-prod-apis.s3.amazonaws.com/b42aa17d-8ae0-4a28-b29f-587af5454390.png',
        }}
        style={customDrawerstyle.dummyImage}
        //resizeMethod="resize"
        resizeMode="contain"
      />
      <View style={customDrawerstyle.subContainer}>
        <Pressable
          onPress={() => {
            props.navigation.navigate('Validate');
            setTodo(false);
            setLogout(false);
            setChatGPT(true);
          }}
          style={{backgroundColor: ChatGPTBool ? '#323E77' : 'white'}}>
          <Text
            style={[
              customDrawerstyle.txtstyle,
              {color: ChatGPTBool ? 'white' : '#323E77'},
            ]}>
            ChatGPT
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            props.navigation.navigate('Routes');
            setTodo(true);
            setLogout(false);
            setChatGPT(false);
          }}
          style={{backgroundColor: TodoBool ? '#323E77' : 'white'}}>
          <Text
            style={[
              customDrawerstyle.txtstyle,
              {color: TodoBool ? 'white' : '#323E77'},
            ]}>
            To-Do List
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setTodo(false);
            setLogout(true);
            setChatGPT(false);
            setalertBool(true);
          }}
          style={{backgroundColor: logoutBool ? '#323E77' : 'white'}}>
          <Text
            style={[
              customDrawerstyle.txtstyle,
              {color: logoutBool ? 'white' : '#323E77'},
            ]}>
            Logout
          </Text>
          <AwesomeAlert
            show={alertBool}
            title="Logout"
            titleStyle={{color: '#323E77'}}
            messageStyle={{color: 'black'}}
            message="Are you sure, you want to logout?"
            confirmText="Logout"
            cancelText="Cancel"
            showCancelButton={true}
            showConfirmButton={true}
            confirmButtonColor="#323E77"
            cancelButtonColor="grey"
            confirmButtonTextStyle={{paddingHorizontal: 20}}
            cancelButtonStyle={{paddingHorizontal: 25}}
            onCancelPressed={() => setalertBool(false)}
            onConfirmPressed={logout}
          />
        </Pressable>
      </View>
    </View>
  );
};
