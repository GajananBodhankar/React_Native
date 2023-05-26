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
} from 'react-native';
import {auth, db} from '../FireBaseAuth/firebase.config';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import Icon from 'react-native-vector-icons/Ionicons';
import {User1} from '../../App';
import {set, ref} from 'firebase/database';
import {ActivityIndicator} from 'react-native-paper';
const CreateAccount = ({navigation}: any) => {
  const [EmpId, setEmpid] = useState<string>('');
  const [bool, setBool] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPwd] = useState<string>('');
  const [cnf, setCnf] = useState<string>();
  const {mainData, setMainData} = useContext(User1);
  const HandleChange = () => {
    setBool(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setMainData([...mainData, (mainData[4].EmpId = EmpId)]);
        set(ref(db, `${auth.currentUser?.uid}`), {
          Food: 0,
          Travel: 0,
          Movie: 0,
          Hospital: 0,
          EmpId: EmpId,
          lastupdated: ``,
        }).then(() => {
          Alert.alert('Account created successfully');
          navigation.navigate('Login');
          setBool(false);
        });
      })
      .catch(error => {
        Alert.alert(
          'Error while creating account or the email might be registered already',
        );
        setBool(false);
      });
  };
  return (
    <SafeAreaView style={design.safeView}>
      <Icon
        name="chevron-back"
        size={30}
        onPress={() => navigation.navigate('Login')}
        style={{paddingLeft: 15}}
      />
      <View style={design.main}>
        <Image
          source={require('./Assets/PrimaryLogo.png')}
          style={{height: 200, width: 200, alignSelf: 'center'}}
          resizeMethod="resize"
          resizeMode="contain"
        />
        <TextInput
          placeholder="Employee Id"
          style={design.txtIn}
          value={EmpId}
          onChangeText={i => setEmpid(i)}
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
          value={password}
          secureTextEntry={true}
          onChangeText={j => setPwd(j)}
        />
        <TextInput
          placeholder="Confirm password"
          style={design.txtIn}
          value={cnf}
          secureTextEntry={true}
          onChangeText={j => setCnf(j)}
        />
        {bool ? <ActivityIndicator size={'small'} /> : null}
        <Pressable
          style={design.button}
          onPress={() => {
            if (password == cnf && email.includes('@') && EmpId.length > 0) {
              HandleChange();
            } else {
              Alert.alert(
                'Error: Either password might have mismatched or please include "@" in email id and Employee Id must be numeric',
              );
            }
          }}>
          <Text style={design.txt}>Create Account</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
const design = StyleSheet.create({
  main: {
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 40,
    paddingTop: 50,
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
});
export default CreateAccount;
