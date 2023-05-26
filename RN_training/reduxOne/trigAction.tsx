import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, changeId, changeAge } from './actionOne';
import { fetchOne } from './actionOne';
import { View, Text, Button } from 'react-native';
const Trigger = () => {
  const x = useSelector(state => state.SliceOneReducer);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 22 }}>{x.name}</Text>
      <Text style={{ fontSize: 22 }}>{x.id}</Text>
      <Text style={{ fontSize: 22 }}>{x.age}</Text>
      <Button title="Change Name and id" onPress={() => dispatch(fetchOne())} />
      <Button title="Change Age" onPress={() => dispatch(changeAge(28))} />
    </View>
  );
};
export default Trigger;
