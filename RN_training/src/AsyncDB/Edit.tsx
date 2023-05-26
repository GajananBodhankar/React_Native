import React, {useContext, useState} from 'react';
import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';
import {styles} from './Styles';
import {User} from './Routes';
import Toast from 'react-native-root-toast';
import {ref, set} from 'firebase/database';
import {auth, db} from '../ChatGPT/firebase.config';

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
  const [search, setSearch] = useState<any>(item.task);

  const editData = () => {
    if (search) {
      setData([...data, (data[index].task = search)]);
      let tempData = data.filter(i => i['task']);
      setData(tempData);
      set(ref(db, `${auth.currentUser?.uid}`), tempData).then(() => {
        displayToast('Edited successufully');
        navigation.navigate('Home');
      });
    } else {
      displayToast('Enter some task');
    }
  };
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView />
      <View style={styles.submainContainer}>
        <View style={{paddingHorizontal: 20}}>
          <TextInput
            value={search}
            onChangeText={i => setSearch(i)}
            style={styles.textInput}
          />
          <Pressable onPress={editData} style={styles.button}>
            <Text style={styles.buttontextstyle}>Done</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
