import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from './actionArray';
import { View, Text, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
const TrigArray = () => {
  const [x, set] = useState<number>();
  const { Array, status } = useSelector(state => state.SliceArray);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 22 }}>{`${Array},`}</Text>
      <Button title="Add" onPress={() => dispatch(addItem(x))} />
      <Button title="Delete" onPress={() => dispatch(deleteItem(x))} />
      <TextInput
        placeholder="enter number"
        onChangeText={i => {
          set(Number(i));
        }}
        style={{ borderWidth: 2 }}
      />
    </View>
  );
};
export default TrigArray;
