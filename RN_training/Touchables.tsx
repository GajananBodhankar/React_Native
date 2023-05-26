import React from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
const app = () => {
  const fun = () => console.log('hello');
  return (
    <View style={{flex: 1, backgroundColor: 'pink', justifyContent: 'center'}}>
      <TouchableHighlight
        onPress={fun}
        underlayColor="red"
        style={{backgroundColor: 'white', width: 150, alignSelf: 'center'}}>
        <Text style={{fontSize: 28}}>Press</Text>
      </TouchableHighlight>
    </View>
  );
};
export default app;
