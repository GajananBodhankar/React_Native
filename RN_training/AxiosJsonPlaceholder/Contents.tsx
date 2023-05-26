import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useAppDispatch, useAppSelector} from './Redux/Redu';
import Icon from 'react-native-vector-icons/Octicons';
import {GetData} from './Redux/Slice';
import {GetDataPosts} from './Redux/SlicePosts';

const Contents = ({navigation}: any) => {
  const {data} = useAppSelector(state => state.SliceReducer);
  const {currentUser} = useAppSelector(state => state.SliceReducerUser);

  const Dispatch = useAppDispatch();
  const [tempData, setTempdata] = useState<any>([]);
  const [search, setSearch] = useState<string>();
  useEffect(() => {
    Dispatch(GetData());
    Dispatch(GetDataPosts());
    console.log(currentUser);
  }, []);
  const DisplayItems = ({item}: any) => {
    return (
      <View style={styles.flatView}>
        <Text>Username- {item.username}</Text>
        <Text>Name-{item.name}</Text>
        <Text>Email-{item.email}</Text>
        <Text>Website-{item.website}</Text>
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
              let tempArray;
              setSearch(i);
              tempArray = data.filter(item => item.name.startsWith(i));
              if (tempArray) {
                setTempdata(tempArray);
              }
            }}
            style={styles.textIn}
          />
        </View>
      </SafeAreaView>
      <View style={styles.flatMain}>
        {search?.length ? (
          <FlatList
            data={tempData}
            renderItem={DisplayItems}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <FlatList
            data={data}
            renderItem={DisplayItems}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};
export const styles = StyleSheet.create({
  SafeContainer: {
    backgroundColor: '#F1C40F',
    flexDirection: 'row',
  },
  MainContainer: {flex: 1},
  flatView: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 110,
    marginVertical: 5,
    marginHorizontal: 5,
    borderWidth: 0.7,
  },
  flatMain: {
    paddingTop: 20,
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingBottom: 120,
  },
  textIn: {
    borderWidth: 0.7,
    paddingLeft: 10,
    paddingVertical: 7,
  },
  textInParent: {
    width: '100%',
    padding: 10,
    paddingRight: 100,
  },
  BarIcon: {paddingLeft: 20, paddingTop: 15},
});
export default Contents;
