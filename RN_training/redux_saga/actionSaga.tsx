/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from './reduxSagaSelector';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {fetchUsers} from './userSlice';
import {Button} from 'react-native';
const Saga = () => {
  const {data, status} = useAppSelector(state => state.sagaReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {}, [dispatch, status]);
  useEffect(() => {
    console.log(status);
  }, [status]);
  const Disp = ({item}: any) => {
    return (
      <View
        style={{backgroundColor: 'lightblue', padding: 20, marginVertical: 10}}>
        <Text style={{fontSize: 18}}>
          {item.id}-{item.first_name}
        </Text>
      </View>
    );
  };
  let content;
  if (status == 'succeeded') {
    content = <FlatList data={data} renderItem={Disp} />;
  } else {
    content = <ActivityIndicator />;
  }
  return (
    <View style={{flex: 1, padding: 30}}>
      <View style={{paddingTop: 30}}>
        <Button title="Press" onPress={() => dispatch(fetchUsers())} />
      </View>
      <Text style={{fontSize: 22}}>The details are</Text>
      {content}
    </View>
  );
};
export default Saga;
