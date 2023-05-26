import React from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';
import {RadioGroup} from 'react-native-radio-buttons-group';
import {useState} from 'react';
const app = () => {
  const [r1, fnr1] = useState<String>();
  //const [r2, fnr2] = useState<String>();
  return (
    <View style={style.view}>
      <RadioGroup
        radioButtons={[{id: '1', label: 'male', value: '1'}]}
        onPress={() => {
          fnr1('male');
        }}
      />
      <RadioGroup
        radioButtons={[{id: '1', label: 'female', value: '2'}]}
        onPress={() => {
          fnr1('female');
        }}
      />
      <Button
        title={'submit'}
        onPress={() => {
          Alert.alert(`${r1}`);
        }}
      />
    </View>
  );
};
const style = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '',
  },
});
export default app;
