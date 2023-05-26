import React, {useState, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {increment, decrement, incByA, decbyA} from './raction';
import {useSelector, useDispatch} from 'react-redux';
import {Button, Text, View, TextInput} from 'react-native';
const Rmain = () => {
  const [x, setx] = useState<number>(0);
  let {val} = useSelector(state => state.ValueConfig);
  const dispatch = useDispatch();
  useEffect(() => {
    const store = async () => {
      const get = await AsyncStorage.getItem('name');
      if (get) {
        val = JSON.parse(get);
        console.log('the value is', get);
      }
    };
    store();
  }, []);
  const change = useCallback(() => {
    AsyncStorage.setItem('name', JSON.stringify(val));
    console.log(val);
  }, [val]);

  const inc = (state: number) => {
    dispatch(incByA(state));
    change();
  };
  const dec = (state: number) => {
    dispatch(decbyA(state));
    change();
  };
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 22}}>{val}</Text>
      <Button
        title="increment"
        onPress={() => {
          dispatch(increment());
          change();
        }}
      />
      <Button
        title="decrement"
        onPress={() => {
          dispatch(decrement());
          change();
        }}
      />
      <Button title="inc by amount" onPress={() => inc(x)} />
      <Button title="dec by amount" onPress={() => dec(x)} />
      <TextInput
        placeholder="Enter amount"
        style={{borderWidth: 2}}
        onChangeText={i => {
          setx(Number(i));
        }}
      />
    </View>
  );
};
export default Rmain;
