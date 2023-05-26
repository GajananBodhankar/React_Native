import React from 'react';
import { View, Text, Button } from 'react-native';
import { upAge, upDesg, upName } from './actionObj';
import { useSelector, useDispatch } from 'react-redux';
import { fetCh } from './actionObj';
const ViewObj = () => {
  const { name, age, designation } = useSelector(state => state.ObjReducer);
  const dispatch = useDispatch();
  const Age = i => {
    dispatch(upAge(i));
  };
  const Name = () => {
    dispatch(fetCh());
  };
  const Desg = i => {
    dispatch(upDesg(i));
  };
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 28 }}>{name}</Text>
      <Text style={{ fontSize: 28 }}>{age}</Text>
      <Text style={{ fontSize: 28 }}>{designation}</Text>
      <Button title="Age" onPress={() => Age(22)} />
      <Button title="Name" onPress={() => Name()} />
      <Button title="Designation" onPress={() => Desg('Manager')} />
    </View>
  );
};
export default ViewObj;
