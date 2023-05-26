import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import {styles} from './Styles';
import Toast from 'react-native-root-toast';
import {User} from './Routes';
const displayToast = (message: string) => {
  Toast.show(message, {
    duration: Toast.durations.SHORT,
    textColor: 'white',
    position: Toast.positions.BOTTOM,
  });
};
const Home = ({navigation}: any) => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const {data, setData} = useContext(User);
  useEffect(() => {
    const x = AsyncStorage.getItem('data');
    x.then(i => {
      let j = JSON.parse(i);
      if (j?.length > 0) {
        setData(j);
      }
    });
  }, []);
  const deleteItem = useCallback(
    async (index: any) => {
      let tempArr = data.filter((item: any) => data.indexOf(item) != index);
      setData(tempArr);
      await AsyncStorage.setItem('data', JSON.stringify(tempArr));
    },
    [data, setData],
  );
  const editItem = useCallback(
    (item: any, index: any) => {
      navigation.navigate('Edit', [item, index]);
    },
    [navigation],
  );
  const dispItem = ({item, index}: any) => {
    if (item.name && item.email) {
      return (
        <View style={styles.flatContainer}>
          <View style={styles.subContainer}>
            <View>
              <Text style={{paddingBottom: 5, color: 'black', fontSize: 16}}>
                Name- {item?.name}
              </Text>
              <Text style={{paddingBottom: 5, color: 'black', fontSize: 16}}>
                Email- {item?.email}
              </Text>
            </View>
            <View style={styles.pressableView}>
              <Pressable
                onPress={() => deleteItem(index)}
                style={styles.flatlistButtons}>
                <Text style={{color: 'white', textAlign: 'center'}}>
                  Delete
                </Text>
              </Pressable>
              <Pressable
                onPress={() => editItem(item, index)}
                style={styles.flatlistButtons}>
                <Text style={{color: 'white', textAlign: 'center'}}>Edit</Text>
              </Pressable>
            </View>
          </View>
        </View>
      );
    }
    return null;
  };

  const handlePress = useCallback(() => {
    if (name && email) {
      setData([...data, {name: name, email: email}]);
      let temp = [...data, {name: name, email: email}];
      AsyncStorage.setItem('data', JSON.stringify(temp));
      displayToast('Data Added successfully');
    } else {
      displayToast('Enter Email and name');
    }
  }, [data, email, name, setData]);

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView />
      <View style={styles.submainContainer}>
        <View>
          <TextInput
            placeholder="Enter name"
            onChangeText={i => setName(i)}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Enter email"
            onChangeText={i => setEmail(i)}
            style={styles.textInput}
          />
        </View>
        <Pressable onPress={handlePress} style={styles.button}>
          <Text style={styles.buttontextstyle}>Add data</Text>
        </Pressable>

        {/* <View style={styles.flatMain}> */}
        <FlatList
          data={data}
          renderItem={dispItem}
          contentContainerStyle={{paddingBottom: 30}}
        />
        {/* </View> */}
      </View>
    </View>
  );
};
export default Home;
