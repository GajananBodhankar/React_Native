import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useAppDispatch, useAppSelector} from './Redux/Redu';
import {GetData} from './Redux/Slice';
import {ActivityIndicator} from 'react-native-paper';
import Toast from 'react-native-root-toast';
import Contents from './Contents';
import {nowUser} from './Redux/SliceUser';

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState<String>('');
  const [user, setUser] = useState<String>('');
  const [bool, setBool] = useState<boolean>(false);
  const {data, status} = useAppSelector(state => state.SliceReducer);
  const Dispatch = useAppDispatch();
  async function FetchData() {
    if (user && email) {
      setBool(true);
      await Dispatch(GetData());
      let count = 0;
      if (status === 'Success') {
        data.forEach(i => {
          if (user == i.username && email == i.email) {
            count++;
            setUser('');
            setEmail('');
            Dispatch(nowUser(i.id));
            navigation.navigate('Drawer', user);
          }
        });
        if (count === 0) {
          Toast.show('Invalid Credentials', {
            duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM,
          });
        }
        setBool(false);
      }
    } else {
      Toast.show('Enter Credentials', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
      });
    }
  }

  return (
    <SafeAreaView style={stylesLogin.mainContainer}>
      <ScrollView>
        <View style={stylesLogin.SubView}>
          <Image
            source={require('./Assets/Image1.png')}
            style={stylesLogin.image}
          />
        </View>
        <View style={stylesLogin.TextView}>
          <Text style={stylesLogin.loginText}>Login</Text>
          <TextInput
            placeholder="Enter Username*"
            style={stylesLogin.textinput}
            onChangeText={i => setUser(i)}
            value={user}
          />
          <TextInput
            placeholder="Enter Email*"
            style={stylesLogin.textinput}
            onChangeText={i => setEmail(i)}
            value={email}
          />
          <Pressable style={stylesLogin.pressable} onPress={FetchData}>
            {!bool ? (
              <Text style={stylesLogin.loginbutton}>Login</Text>
            ) : (
              <View style={stylesLogin.activity}>
                <ActivityIndicator size={'small'} />
              </View>
            )}
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export const stylesLogin = StyleSheet.create({
  image: {
    height: 250,
    width: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  textinput: {
    paddingTop: 10,
    borderWidth: 0.5,
    borderRadius: 3,
    paddingBottom: 10,
    paddingLeft: 10,
    marginVertical: 10,
    fontSize: 16,
  },
  SubView: {
    paddingTop: 100,
  },
  TextView: {
    paddingHorizontal: 35,
  },
  loginText: {
    color: '#1B2E72',
    paddingTop: 20,
    fontWeight: '600',
    fontSize: 22,
    paddingBottom: 10,
  },
  pressable: {
    marginVertical: 10,
    backgroundColor: '#F1C40F',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 3,
    shadowOffset: {height: 5, width: 0},
    shadowOpacity: 0.3,
  },
  loginbutton: {
    textAlign: 'center',
    color: '#1B2E72',
    fontSize: 16,
  },
  activity: {
    alignSelf: 'center',
  },
});
export default Login;
