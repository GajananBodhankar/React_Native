import React from 'react';
import {
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
  TextInput,
  Image,
} from 'react-native';
import {useState, useEffect} from 'react';
const Home = ({navigation}) => {
  const [n, setn] = useState('');
  const [a, seta] = useState('');
  return (
    <View style={styles.view}>
      <Text style={{fontSize: 30, color: 'black', marginTop: 20}}>
        Welcome to first page!!
      </Text>

      <TextInput
        placeholder="Enter name"
        keyboardType="default"
        onChangeText={x => setn(x)}
        style={styles.text}
      />
      <TextInput
        placeholder="Enter age"
        keyboardType="numeric"
        onChangeText={y => seta(y)}
        style={styles.text}
      />
      <TouchableOpacity
        style={styles.label}
        onPress={() => {
          if (n == 'Gajanan') {
            Alert.alert(`hello ${n} and your age is ${a}..!!`);
          } else {
            Alert.alert(`hello ${n}`);
          }
        }}>
        <Text style={{textAlign: 'center', fontSize: 22, color: 'white'}}>
          Submit
        </Text>
      </TouchableOpacity>
      <Button title="Move_touser" onPress={() => navigation.navigate('Home page')} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginTop: 60,
    width: 100,
    height: 50,
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 2,
    backgroundColor: 'dodgerblue',
  },
  view: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'khaki',
  },
  text: {
    borderWidth: 2,
    borderRadius: 5,
    fontSize: 18,
    height: 60,
    color: 'black',
    width: 230,
    backgroundColor: 'lavender',
    marginVertical: 10,
  },
});
export default Home;
