/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  TextInput,
  Image,
  Pressable,
  Alert,
  View,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {auth} from './firebase.config';
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {loginStyle} from './Styles';
import AwesomeAlert from 'react-native-awesome-alerts';

const Login = ({navigation}: any) => {
  const [bool, setBool] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPwd] = useState<string>('');
  const [isVisible, setVisible] = useState<boolean>(true);
  const [alert, setAlert] = useState<boolean>(false);
  function ResetData() {
    setEmail('');
    setPwd('');
  }
  const HandleChange = () => {
    setBool(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate('Drawer');
        setBool(false);
        ResetData();
      })
      .catch(() => {
        if (email && password) {
          Alert.alert('Invalid credentials');
        } else {
          setAlert(true);
        }
        setBool(false);
      });
  };
  const ForgotPassword = () => {
    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          Alert.alert('Password reset mail has been sent');
        })
        .catch(() => {
          Alert.alert('Invalid email-id');
        });
    } else {
      Alert.alert('Enter a valid email-id');
    }
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flex: Platform.OS === 'android' ? 0 : 1,
      }}>
      <View style={loginStyle.safeView}>
        <View style={loginStyle.main}>
          <Image
            source={require('./Assets/PrimaryLogo.png')}
            style={loginStyle.image}
            resizeMethod="resize"
            resizeMode="contain"
          />
          <TextInput
            placeholder="Email Address"
            placeholderTextColor={'grey'}
            style={loginStyle.txtIn}
            value={email}
            onChangeText={i => setEmail(i)}
          />
          <View style={loginStyle.pwdContainer}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={'grey'}
              style={loginStyle.pwdTxtIn}
              value={password}
              secureTextEntry={isVisible}
              onChangeText={j => setPwd(j)}
            />
            <Pressable
              style={loginStyle.pwdPressable}
              onPress={() => setVisible(!isVisible)}>
              <Image
                source={
                  isVisible
                    ? require('./Assets/Visible.png')
                    : require('./Assets/Invisible.png')
                }
                style={loginStyle.visibleImage}
                resizeMethod="resize"
                resizeMode="contain"
              />
            </Pressable>
          </View>
          <AwesomeAlert
            show={alert}
            title="Error"
            titleStyle={{color: '#323E77'}}
            messageStyle={{color: 'black'}}
            message="Enter all credentials in valid format"
            confirmText="OK"
            cancelText="Cancel"
            showCancelButton={false}
            showConfirmButton={true}
            confirmButtonColor="#323E77"
            cancelButtonColor="grey"
            confirmButtonTextStyle={{paddingHorizontal: 20}}
            cancelButtonStyle={{paddingHorizontal: 25}}
            onConfirmPressed={() => setAlert(false)}
          />
          <Pressable style={loginStyle.button} onPress={HandleChange}>
            {bool ? (
              <ActivityIndicator color={'white'} size={'small'} />
            ) : (
              <Text style={loginStyle.txt}>Login</Text>
            )}
          </Pressable>
          <Text style={loginStyle.txtdontaccount}>
            Don't have an account?
            <Pressable onPress={() => navigation.navigate('CreateAccount')}>
              <Text style={loginStyle.txtcreateacc}>Create Account</Text>
            </Pressable>
          </Text>
          <View style={loginStyle.txtforgot}>
            <Pressable onPress={ForgotPassword}>
              <Text style={loginStyle.forgotPwd}>Forgot Password?</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
