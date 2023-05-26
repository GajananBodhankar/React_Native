import React, {useEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import IconEmail from 'react-native-vector-icons/Fontisto';
import Iconpwd from 'react-native-vector-icons/Ionicons';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {auth, db} from './firebase.config';
import {ref, remove, set} from 'firebase/database';
const SignIn = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPwd] = useState('');
  const [UID, setUID] = useState<string>();
  const writeTodb = () => {};

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
      <View style={{paddingHorizontal: 20, paddingTop: 90}}>
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
            style={{paddingLeft: 10, fontSize: 16}} //ab
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
        <Pressable
          style={{
            backgroundColor: '#0589f2',
            borderRadius: 4,

            paddingVertical: 15,
          }}
          onPress={() => {
            signInWithEmailAndPassword(auth, email, password)
              .then(userCredential => {
                set(ref(db, `${userCredential.user.uid}/`), {
                  mailid: email,
                });
                set(ref(db, `${userCredential.user.uid}/`), {
                  name: 'gajanan',
                });

                //remove(ref(db, `${userCredential.user.uid}`));
                navigation.navigate('Home');
              })
              .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
              });
            writeTodb();
          }}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
            Sign In
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default SignIn;
