import React, {useContext, useState} from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  View,
  Image,
  Pressable,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import IconEmail from 'react-native-vector-icons/Fontisto';
import Iconpwd from 'react-native-vector-icons/Ionicons';
import {auth, db} from './firebase.config';
import {createUserWithEmailAndPassword} from 'firebase/auth';
const CreateAcc = ({navigation}: any) => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPwd] = useState('');
  const [cnf, setCnf] = useState('');
  const HandleChange = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate('SignIn');
      })
      .catch(error => {
        console.log('Error while creating account');
      });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{paddingHorizontal: 20, paddingTop: 30}}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1280px-Firebase_Logo.svg.png',
          }}
          style={{height: 120}}
          resizeMethod="resize"
          resizeMode="contain"
        />
      </View>
      <View style={{paddingHorizontal: 20, paddingTop: 60}}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 4,
            paddingVertical: 15,
            flexDirection: 'row',
            marginVertical: 15,
          }}>
          <Icon name="user" size={25} style={{paddingLeft: 5}} />
          <TextInput
            placeholder="Enter username"
            style={{paddingLeft: 10, fontSize: 16}}
            onChangeText={i => setUser(i)}
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 4,
            paddingVertical: 15,
            flexDirection: 'row',
          }}>
          <IconEmail name="email" size={25} style={{paddingLeft: 5}} />
          <TextInput
            placeholder="Enter Email"
            style={{paddingLeft: 10, fontSize: 16}}
            onChangeText={i => setEmail(i)}
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 4,
            paddingVertical: 15,
            flexDirection: 'row',
            marginVertical: 15,
          }}>
          <Iconpwd
            name="ios-lock-closed-outline"
            size={25}
            style={{paddingLeft: 5}}
          />
          <TextInput
            placeholder="Enter Password"
            style={{paddingLeft: 10, fontSize: 16}}
            onChangeText={i => setPwd(i)}
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 4,
            paddingVertical: 15,
            flexDirection: 'row',
          }}>
          <Iconpwd
            name="ios-lock-closed-outline"
            size={25}
            style={{paddingLeft: 5}}
          />
          <TextInput
            placeholder="Confirm Password"
            style={{paddingLeft: 10, fontSize: 16}}
            onChangeText={i => setCnf(i)}
          />
        </View>
        <Pressable
          style={{
            backgroundColor: '#0589f2',
            borderRadius: 4,
            marginVertical: 15,
            paddingVertical: 15,
          }}
          onPress={HandleChange}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
            Create Account
          </Text>
        </Pressable>
        <Text style={{textAlign: 'center', fontSize: 14}}>
          Already have an account?
          <Pressable onPress={() => navigation.navigate('SignIn')}>
            <Text style={{top: 3, paddingLeft: 3, color: '#0589f2'}}>
              Sign In
            </Text>
          </Pressable>
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default CreateAcc;
