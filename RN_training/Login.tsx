import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
} from 'react-native';
import CheckBox from 'react-native-checkbox';
import {Alert} from 'react-native';
const app = () => {
  const [user, userfn] = useState('');
  const [pwd, pwdfn] = useState(undefined);
  const [cnf, cnfn] = useState(undefined);
  const [phone, phfn] = useState(undefined);
  const [check1, fn1] = useState('Female');
  const [check2, fn2] = useState('Male');
  const [edit1, edfn1] = useState(false);
  const [edit2, edfn2] = useState(false);
  return (
    <View style={styles.view}>
      <ImageBackground
        source={{
          uri: 'https://t4.ftcdn.net/jpg/01/19/11/55/360_F_119115529_mEnw3lGpLdlDkfLgRcVSbFRuVl6sMDty.jpg',
        }}
        style={styles.image}>
        <Text style={styles.text}>Registration Page</Text>
        <TextInput
          placeholder="Username"
          style={styles.user}
          value={user}
          onChangeText={x => {
            userfn(x);
          }}
        />
        <TextInput
          placeholder="Password"
          style={styles.user}
          value={pwd}
          onChangeText={y => {
            pwdfn(y);
          }}
          maxLength={6}
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.user}
          value={cnf}
          onChangeText={z => {
            cnfn(z);
          }}
          maxLength={6}
        />
        <TextInput
          placeholder="Phone Number"
          style={styles.user}
          value={phone}
          onChangeText={i => {
            phfn(i);
          }}
          maxLength={10}
        />
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            paddingLeft: 130,
          }}>
          <CheckBox
            label="Female"
            value={check2}
            style={{fontSize: 22}}
            checked={edit1}
            onChange={() => {
              edfn1(true);
              edfn2(false);
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            paddingLeft: 130,
          }}>
          <CheckBox
            label="Male"
            value={check1}
            style={{fontSize: 22}}
            checked={edit2}
            onChange={() => {
              edfn2(true);
              edfn1(false);
            }}
          />
        </View>
        <View
          style={{
            marginVertical: 30,
            alignContent: 'center',
            paddingLeft: 100,
            paddingRight: 100,
          }}>
          <Button
            title="submit"
            color="firebrick"
            onPress={() => {
              {
                user.length >= 1
                  ? !isNaN(pwd) && pwd != null
                    ? pwd == cnf
                      ? !isNaN(phone) && phone != null
                        ? edit1 == true || edit2 == true
                          ? Alert.alert(
                              `The details are ${user}-${phone} and gender is ${
                                edit1 ? check1 : check2
                              }`,
                            )
                          : Alert.alert('select gender')
                        : Alert.alert('Enter correct Phone Number')
                      : Alert.alert('Password not matched')
                    : Alert.alert('Enter password in numeric')
                  : Alert.alert('Username Not entered');
              }
              {
                pwdfn(undefined);
                userfn('');
                cnfn(undefined);
                phfn(undefined);
                edfn1(false);
                edfn2(false);
              }
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {height: '100%', width: '100%'},
  view: {flex: 1},
  text: {
    color: 'white',
    fontSize: 32,
    marginVertical: 30,
    alignSelf: 'center',
  },
  user: {
    width: 300,
    alignSelf: 'center',
    height: 50,
    padding: 10,
    fontSize: 18,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  checktxt: {
    color: 'Black',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
export default app;
