import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, TextInput, View} from 'react-native';
import {styles} from './Contents';
import Icon from 'react-native-vector-icons/Octicons';
import {useAppDispatch, useAppSelector} from './Redux/Redu';
import {GetDataTodo} from './ReduxTodo/SliceTodo';
import {ActivityIndicator} from 'react-native-paper';

const ToDo = ({navigation}: any) => {
  const [bool, setBool] = useState<boolean>(false);
  const [tempData, setTempdata] = useState<any>([]);
  const [search, setSearch] = useState<string>('');
  const {currentUser} = useAppSelector(state => state.SliceReducerUser);
  const {dataTodo, status} = useAppSelector(state => state.SliceReducerTodo);
  const [data, setData] = useState<any>([]);

  const Dispatch = useAppDispatch();
  useEffect(() => {
    Dispatch(GetDataTodo());
  }, [Dispatch]);
  useEffect(() => {
    if (status == 'Success') {
      setBool(true);
      let tempArr = dataTodo.filter(i => i.userId == currentUser);
      setData(tempArr);
    }
  }, [currentUser, dataTodo, status]);
  // eslint-disable-next-line react/no-unstable-nested-components
  const DisplayItems = ({item}: any) => {
    return (
      <View style={styles.flatView}>
        <Text>Id- {item.id}</Text>
        <Text>Title-{item.title}</Text>
        <Text>Completed-{item.completed ? 'true' : 'false'}</Text>
      </View>
    );
  };
  return (
    <View style={styles.MainContainer}>
      <SafeAreaView style={styles.SafeContainer}>
        <Icon
          name="three-bars"
          color={'black'}
          size={22}
          style={styles.BarIcon}
          onPress={() => navigation.openDrawer()}
        />
        <View style={styles.textInParent}>
          <TextInput
            placeholder="Search"
            onChangeText={i => {
              let input = i.toLowerCase(),
                tempArr = [];
              setSearch(input);
              tempArr = dataTodo.filter(j => j.title.startsWith(input));
              if (tempArr) {
                setTempdata(tempArr);
              }
            }}
            style={styles.textIn}
          />
        </View>
      </SafeAreaView>
      <View style={styles.flatMain}>
        {bool ? (
          <FlatList
            data={!search ? data : tempData}
            renderItem={DisplayItems}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </View>
  );
};
export default ToDo;
