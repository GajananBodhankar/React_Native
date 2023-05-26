import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {styles} from './Contents';
import Icon from 'react-native-vector-icons/Octicons';
import {useAppDispatch, useAppSelector} from './Redux/Redu';
import {ActivityIndicator} from 'react-native-paper';
import {stylesPosts} from './Posts';
import {GetDataComments, update} from './Redux/SliceComments';
const Comments = ({navigation}: any) => {
  const [bool, setBool] = useState<Boolean>(false);
  const [tempData, setTempdata] = useState<any>([]);
  const [search, setSearch] = useState<string>('');
  const dispatch = useAppDispatch();
  const {dataComments, status} = useAppSelector(
    state => state.SliceReducerComments,
  );
  useEffect(() => {
    dispatch(GetDataComments());
  }, [dispatch]);
  useEffect(() => {
    if (status == 'Success') {
      setBool(true);
    }
  }, [status]);

  const renderItem: ListRenderItem<any> = ({item, index}) => {
    return (
      <View style={styles.flatView}>
        <Text>Id- {item.id}</Text>
        <Text>Name-{item.name}</Text>
        <Text>Email-{item.email}</Text>
        <Text numberOfLines={!item.bool ? 1 : undefined}>
          Body-{item.body}
          {item.bool}
        </Text>
        <Pressable
          onPress={() => {
            dispatch(update(index));
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
          <TextInput
            placeholder="Search"
            onChangeText={i => {
              setSearch(i);
              let input = i.toLowerCase();
              let tempArr = dataComments.filter(i => i.name.startsWith(input));
              setTempdata(tempArr);
            }}
            style={styles.textIn}
          />
        </View>
      </SafeAreaView>
      <View style={styles.flatMain}>
        {bool ? (
          <FlatList
            data={search ? tempData : dataComments}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </View>
  );
};
export default Comments;
