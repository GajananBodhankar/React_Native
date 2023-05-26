import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
  ListRenderItem,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {styles} from './Contents';
import {useAppDispatch, useAppSelector} from './Redux/Redu';
import {GetDataPosts} from './Redux/SlicePosts';
import {StyleSheet} from 'react-native';

const Posts = ({navigation}: any) => {
  const {dataPosts, status} = useAppSelector(state => state.SliceReducerPosts);
  const {currentUser} = useAppSelector(state => state.SliceReducerUser);
  const [bool, setBool] = useState<Boolean>(false);
  const [tempData, setTempdata] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const [search, setSearch] = useState<string>('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GetDataPosts());
  }, [dispatch]);
  useEffect(() => {
    if (status === 'Success') {
      setBool(true);
      let tempArr = dataPosts.filter(i => i.userId === currentUser);
      setData(tempArr);
    }
  }, [currentUser, dataPosts, status]);

  const renderItem: ListRenderItem<any> = ({item, index}) => {
    return (
      <View style={styles.flatView}>
        <Text>Id- {item.id}</Text>
        <Text>Title-{item.title}</Text>
        <Text numberOfLines={!item.bool ? 1 : undefined}>
          Body-{item.body}
          {item.bool}
        </Text>
        <Pressable
          onPress={() => {
            setData([...data, (data[index].bool = !data[index].bool)]);
          }}>
          <Text style={stylesPosts.seeAllView}>
            {!item.bool ? 'See all' : 'See less'}
          </Text>
        </Pressable>
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
          <View style={styles.textIn}>
            <TextInput
              placeholder="Search"
              onChangeText={i => {
                setSearch(i);
                let tempText: string = i.toLowerCase();
                let tempArr = dataPosts.filter(
                  item =>
                    item.title.startsWith(tempText) &&
                    item.userId === currentUser,
                );
                setTempdata(tempArr);
              }}
            />
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.flatMain}>
        {bool ? (
          <FlatList
            data={search ? tempData : data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        ) : null}
      </View>
    </View>
  );
};
export const stylesPosts = StyleSheet.create({
  seeAllView: {color: 'blue', textDecorationLine: 'underline'},
});
export default Posts;
