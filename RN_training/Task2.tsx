import {StyleSheet, View, Text} from 'react-native';
import {useState} from 'react';
import React from 'react';
import {Button} from 'react-native';
const Task = () => {
  const [name, get] = useState(['Max ', 'bruce ', 'king']);
  const [age, update] = useState(0);
  const [obj, set] = useState([
    {id: 1, name: 'gajanan'},
    {id: 2, name: 'deepika'},
  ]);
  const [obj1, set1] = useState({id: 1, name: 'john'});
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        width: 200,
        alignSelf: 'center',
      }}>
      <Button
        title="change Array"
        onPress={() => {
          name.splice(0, 1, 'john ');
          get([...name, ' major']);
        }}
      />
      <Text style={{fontSize: 22}}>{name}</Text>
      <Button
        title="Change age"
        onPress={() => {
      
          update(Math.ceil(Math.random() * 100));
        }}
      />
      <Text style={{fontSize: 22}}>{age}</Text>
      <Button
        title="Change object Array"
        onPress={() => {
          set([{...obj, id: 3, name: 'john'}]);
        }}
      />
      <Text style={{fontSize: 18}}>{JSON.stringify(obj)}</Text>
      <Button
        title="Change object"
        onPress={() => {
          set1({...obj1, address: 'hyd'});
        }}
      />
      <Text style={{fontSize: 18}}>{JSON.stringify(obj1)}</Text>
    </View>
  );
};
export default Task;
