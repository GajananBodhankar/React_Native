import React, {useContext, useEffect, useState} from 'react';
import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';
import {styles} from './Styles';
import {User} from './Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-root-toast';

const displayToast = (message: string) => {
  Toast.show(message, {
    duration: Toast.durations.SHORT,
    textColor: 'white',
    position: Toast.positions.BOTTOM,
  });
};

export const Edit = ({navigation, route}: any) => {
  const {data, setData} = useContext(User);
  const [item, index] = route.params;
  const [name, setName] = useState<any>(item.name);
  const [email, setEmail] = useState<any>(item.email);
  const editData = () => {
    let temp: Array<Object> = [
      ...data,
      (data[index].name = name),
      (data[index].email = email),
    ];
    setData([...data, (data[index].name = name), (data[index].email = email)]);
    AsyncStorage.setItem('data', JSON.stringify(temp)).then(() => {
      displayToast('Edited successufully');
      navigation.navigate('Home');
    });
  };
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView />
      <View style={styles.submainContainer}>
        <TextInput
          value={name}
          onChangeText={i => setName(i)}
          style={styles.textInput}
        />
        <TextInput
          value={email}
          onChangeText={i => setEmail(i)}
          style={styles.textInput}
        />
        <Pressable onPress={editData} style={styles.button}>
          <Text style={styles.buttontextstyle}>Done</Text>
        </Pressable>
      </View>
    </View>
  );
};
