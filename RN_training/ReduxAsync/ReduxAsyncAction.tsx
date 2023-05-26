import React, {useCallback, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from './Redux';
import {Button, SafeAreaView, Text} from 'react-native';
import {Dec, Inc, Set} from './ReduxAsyncSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ReduxAsyncAction = () => {
  const {count} = useAppSelector(state => state.StoreAsyncReducer);
  const [c, setc] = useState<number>();
  useEffect(() => {
    const get = async () => {
      const res = await AsyncStorage.getItem('count');
      if (res) {
        let x = Number(res);
        Dispatch(Set(x));
        setc(x);
      }
    };
    get();
  }, []);
  const Dispatch = useAppDispatch();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>{c}</Text>
      <Button
        title="Inc"
        onPress={() => {
          Dispatch(Inc(c));
          setc(count);
          AsyncStorage.setItem('count', JSON.stringify(count));
        }}
      />
      <Button
        title="Dec"
        onPress={() => {
          Dispatch(Dec(c));
          setc(count);
          AsyncStorage.setItem('count', JSON.stringify(count));
        }}
      />
    </SafeAreaView>
  );
};
export default ReduxAsyncAction;
