import React from 'react';
import {View, Text, ViewProps} from 'react-native';
const Fun = props => {
  return (
    <View
      style={{flex: 1, backgroundColor: 'lightblue', alignSelf: 'center'}}
      {...props}></View>
  );
};
const App = () => {
  return (
    <Fun>
      <Text>Hello</Text>
    </Fun>
  );
};
export default App;
