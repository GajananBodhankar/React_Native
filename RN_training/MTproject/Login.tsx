import React, {useContext, useState} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Image,
  Pressable,
  Alert,
  View,
  ActivityIndicator,
} from 'react-native';
import {auth, db} from '../FireBaseAuth/firebase.config';
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {User1} from '../../App';
import {get, ref, set} from 'firebase/database';
import Toast from 'react-native-root-toast';
const Login = ({navigation}: any) => {
  const {mainData, setMainData} = useContext(User1);
  const [bool, setBool] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPwd] = useState<string>('');
  function ResetData() {
    setEmail('');
    setPwd('');
  }
  const HandleChange = () => {
    setBool(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        get(ref(db, `${auth.currentUser?.uid}`))
          .then(data => {
            if (data.exists()) {
              setMainData([
                ...mainData,
                (mainData[0].amount = data.val().Food),
                (mainData[1].amount = data.val().Travel),
                (mainData[2].amount = data.val().Movie),
                (mainData[3].amount = data.val().Hospital),
                (mainData[4].EmpId = data.val().EmpId),
                (mainData[5].lastupdated = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`),
              ]);
              navigation.navigate('Contents');
              ResetData();
              setBool(false);
            }
          })
          .catch(() => {
            if (email && password) {
              Alert.alert('Invalid credentials');
            } else {
              Toast.show('Please enter Email and Password', {
                duration: Toast.durations.SHORT,
                backgroundColor: '#323E77',
                textColor: 'white',
                position: Toast.positions.BOTTOM,
              });
            }
            setBool(false);
          });
      })
      .catch((error: {code: any; message: any}) => {
        if (email && password) {
          Alert.alert('Invalid credentials');
        } else {
          Toast.show('Please enter Email and Password', {
            duration: Toast.durations.SHORT,
            backgroundColor: '#323E77',
            textColor: 'white',
            position: Toast.positions.BOTTOM,
          });
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
    <SafeAreaView style={design.safeView}>
      <View style={design.main}>
        <Image
          source={require('./Assets/PrimaryLogo.png')}
          style={{height: 200, width: 200, alignSelf: 'center'}}
          resizeMethod="resize"
          resizeMode="contain"
        />
        <TextInput
          placeholder="Email Address"
          style={design.txtIn}
          value={email}
          onChangeText={i => setEmail(i)}
        />
        <TextInput
          placeholder="Password"
          style={design.txtIn}
          autoFocus={false}
          value={password}
          secureTextEntry={true}
          onChangeText={j => setPwd(j)}
        />

        <Pressable style={design.button} onPress={HandleChange}>
          {bool ? (
            <ActivityIndicator color={'white'} />
          ) : (
            <Text style={design.txt}>Login</Text>
          )}
        </Pressable>
        <Text style={{textAlign: 'center', fontSize: 14}}>
          Don't have an account?
          <Pressable onPress={() => navigation.navigate('CreateAccount')}>
            <Text style={{top: 3, paddingLeft: 3, color: '#323E77'}}>
              Create Account
            </Text>
          </Pressable>
        </Text>
        <View style={{alignSelf: 'center', paddingTop: 10}}>
          <Pressable onPress={ForgotPassword}>
            <Text style={design.forgotPwd}>Forgot Password?</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};
const design = StyleSheet.create({
  main: {
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 40,
    paddingTop: 150,
  },
  txtIn: {
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 16,
    color: 'black',
    borderColor: '#323E77',
    padding: 15,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
  },
  safeView: {flex: 1, backgroundColor: 'white'},
  button: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#323E77',
    borderRadius: 4,
    marginVertical: 10,
    padding: 15,
  },
  txt: {fontSize: 18, color: 'white', textAlign: 'center'},
  forgotPwd: {
    top: 3,
    paddingLeft: 3,
    color: '#323E77',
    textAlign: 'center',
  },
});
export default Login;
