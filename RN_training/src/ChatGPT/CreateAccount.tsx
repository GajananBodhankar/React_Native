import React, {useState} from 'react';
import {
  Text,
  TextInput,
  SafeAreaView,
  Image,
  Pressable,
  Alert,
  View,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {auth} from './firebase.config';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import Toast from 'react-native-root-toast';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {createAccountStyle} from './Styles';

const displayToast = (message: string) => {
  Toast.show(message, {
    duration: Toast.durations.SHORT,
    textColor: 'white',
    position: Toast.positions.BOTTOM,
  });
};

const CreateAccount = ({navigation}: any) => {
  const [bool, setBool] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPwd] = useState<string>('');
  const [cnf, setCnf] = useState<string>();
  const [isVisible, setVisible] = useState<boolean>(true);
  const [isVisiblecnf, setVisiblecnf] = useState<boolean>(true);
  const HandleChange = () => {
    setBool(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setBool(false);
        displayToast('Account created successfully');
        navigation.navigate('Login');
      })
      .catch(() => {
        Alert.alert(
          'Error while creating account or the email might be registered already',
        );
        setBool(false);
      });
  };
  return (
    <KeyboardAwareScrollView
      extraHeight={200}
      contentContainerStyle={{
        flex: Platform.OS == 'android' ? 0 : 1,
      }}>
      <SafeAreaView style={createAccountStyle.safeView}>
        <View style={createAccountStyle.backButtonView}>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Image
              source={{uri: 'https://img.icons8.com/ios/50/null/back--v1.png'}}
              style={createAccountStyle.backButton}
            />
          </Pressable>
        </View>
        <View style={createAccountStyle.main}>
          <Image
            source={require('./Assets/PrimaryLogo.png')}
            style={createAccountStyle.image}
            resizeMethod="resize"
            resizeMode="contain"
          />
          <TextInput
            placeholder="Email Address"
            placeholderTextColor={'grey'}
            style={createAccountStyle.txtIn}
            value={email}
            onChangeText={i => setEmail(i)}
          />
          {/* <TextInput
            placeholder="Password"
            placeholderTextColor={'grey'}
            style={createAccountStyle.txtIn}
            value={password}
            secureTextEntry={true}
            onChangeText={j => setPwd(j)}
          /> */}
          <View style={createAccountStyle.pwdContainer}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={'grey'}
              style={createAccountStyle.pwdTxtIn}
              value={password}
              secureTextEntry={isVisible}
              onChangeText={j => setPwd(j)}
            />
            <Pressable
              style={createAccountStyle.pwdPressable}
              onPress={() => setVisible(!isVisible)}>
              <Image
                source={
                  isVisible
                    ? require('./Assets/Visible.png')
                    : require('./Assets/Invisible.png')
                }
                style={createAccountStyle.visibleImage}
                resizeMethod="resize"
                resizeMode="contain"
              />
            </Pressable>
          </View>
          <View style={createAccountStyle.pwdContainer}>
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor={'grey'}
              style={createAccountStyle.pwdTxtIn}
              value={cnf}
              secureTextEntry={isVisiblecnf}
              onChangeText={j => setCnf(j)}
            />
            <Pressable
              style={createAccountStyle.pwdPressable}
              onPress={() => setVisiblecnf(!isVisiblecnf)}>
              <Image
                source={
                  isVisiblecnf
                    ? require('./Assets/Visible.png')
                    : require('./Assets/Invisible.png')
                }
                style={createAccountStyle.visibleImage}
                resizeMethod="resize"
                resizeMode="contain"
              />
            </Pressable>
          </View>
          {/* <TextInput
            placeholder="Confirm password"
            placeholderTextColor={'grey'}
            style={createAccountStyle.txtIn}
            value={cnf}
            secureTextEntry={true}
            onChangeText={j => setCnf(j)}
          /> */}

          <Pressable
            style={createAccountStyle.button}
            onPress={() => {
              if (password === cnf && email.includes('@')) {
                HandleChange();
              } else {
                Alert.alert(
                  'Error: Either password might have mismatched or please include "@" and .com in email id',
                );
              }
            }}>
            {bool ? (
              <ActivityIndicator size={'small'} />
            ) : (
              <Text style={createAccountStyle.txt}>Create Account</Text>
            )}
          </Pressable>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default CreateAccount;
