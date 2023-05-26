import React, {useCallback, useContext, useEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {styles} from './Styles';
import Toast from 'react-native-root-toast';
import {User} from './Routes';
import {db, auth} from '../ChatGPT/firebase.config';
import {get, set, ref} from 'firebase/database';

const displayToast = (message: string) => {
  Toast.show(message, {
    duration: Toast.durations.SHORT,
    textColor: 'white',
    position: Toast.positions.BOTTOM,
  });
};
const Home = ({navigation}: any) => {
  const [search, setSearch] = useState<any>([]);
  const [bool, setBool] = useState<boolean>(false);
  const [tempData, setTempData] = useState<any>([]);
  const {data, setData} = useContext(User);
  useEffect(() => {
    get(ref(db, `${auth.currentUser?.uid}`)).then(response => {
      if (response.exists()) {
        var temp = [];
        for (let i in response.val()) {
          temp.push({task: response.val()[i].task});
        }
        var main = data;
        temp.forEach(i => {
          main.push(i);
        });
        setTempData(main);
      }
    });
  }, []);
  useEffect(() => {
    setBool(true);
    setData(tempData);
    console.log(bool, data);
  }, [tempData]);
  const deleteItem = useCallback(
    async (index: any) => {
      let tempArr = data.filter((item: any) => data.indexOf(item) !== index);
      setData(tempArr);
      set(ref(db, `${auth.currentUser?.uid}`), tempArr);
    },
    [data, setData],
  );
  const editItem = useCallback(
    (item: any, index: any) => {
      navigation.navigate('Edit', [item, index]);
    },
    [navigation],
  );
  const handlePress = useCallback(() => {
    if (search) {
      setData([...data, {task: search}]);
      let temp = [...data, {task: search}];
      set(ref(db, `${auth.currentUser?.uid}`), temp).then(Response =>
        console.log(Response),
      );
      displayToast('Data Added successfully');
    } else {
      displayToast('Enter task');
    }
  }, [data, search, setData]);

  const dispItem = ({item, index}: any) => {
    if (item?.task) {
      return (
        <View style={styles.flatContainer}>
          <View style={styles.subContainer}>
            <View>
              <Text style={homeStyle.itemView} textBreakStrategy="balanced">
                {index + 1}. {item.task}
              </Text>
            </View>
            <View style={styles.pressableView}>
              <Pressable
                onPress={() => deleteItem(index)}
                style={styles.flatlistButtons}>
                <Text style={homeStyle.txtdelete}>Delete</Text>
              </Pressable>
              <Pressable
                onPress={() => editItem(item, index)}
                style={styles.flatlistButtons}>
                <Text style={homeStyle.txtedit}>Edit</Text>
              </Pressable>
            </View>
          </View>
        </View>
      );
    }
    return null;
  };
  let content;
  if (bool === false) {
    content = <ActivityIndicator color={'blue'} size={'small'} />;
  } else {
    content = (
      <FlatList
        data={data}
        renderItem={dispItem}
        contentContainerStyle={{paddingBottom: 30}}
      />
    );
  }
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView />
      <View style={styles.submainContainer}>
        <View style={homeStyle.subContainer}>
          <View style={homeStyle.drawerView}>
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image
                source={require('../ChatGPT/Assets/menu.png')}
                style={homeStyle.drawerImage}
              />
            </Pressable>
          </View>
          <TextInput
            placeholder="Add task"
            placeholderTextColor={'grey'}
            onChangeText={i => setSearch(i)}
            style={styles.textInput}
          />
        </View>
        <View style={homeStyle.txtaddtask}>
          <Pressable onPress={handlePress} style={styles.button}>
            <Text style={styles.buttontextstyle}>Add task</Text>
          </Pressable>
        </View>
        <View style={styles.flatMain}>{content}</View>
      </View>
    </View>
  );
};
const homeStyle = StyleSheet.create({
  itemView: {
    paddingBottom: 5,
    color: 'black',
    fontSize: 16,
    width: 250,
  },
  txtdelete: {color: 'white', textAlign: 'center'},
  txtedit: {color: 'white', textAlign: 'center'},
  subContainer: {flexDirection: 'row', paddingRight: 60},
  drawerView: {alignSelf: 'center', paddingRight: 10, paddingLeft: 15},
  drawerImage: {height: 20, width: 20},
  txtaddtask: {paddingHorizontal: 90},
});
export default Home;
