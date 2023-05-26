import React, {useState} from 'react';
import {View, Text, Button, TextInput, Alert} from 'react-native';
const App = () => {
  const [arr, seta] = useState([]);
  const [a, set] = useState();
  const [b, set1] = useState();
  return (
    <View style={{flex: 1, backgroundColor: 'khaki'}}>
      <TextInput
        placeholder="Enter name"
        style={{borderWidth: 1, marginVertical: 2}}
        onChangeText={i => set(i)}
      />
      <TextInput
        placeholder="Enter age"
        style={{borderWidth: 1, marginVertical: 2}}
        onChangeText={j => set1(j)}
      />
      <Button
        title="submit"
        onPress={() => {
          arr.push(a);
          arr.push(b);
          console.log(arr);
        }}
      />
    </View>
  );
};
export default App;
