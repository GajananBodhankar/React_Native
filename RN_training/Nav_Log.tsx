import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
function LogScreen({navigation}) {
  const [obj, seto] = useState({id: 1, name: 'Gajanan'});
  const [arr, set] = useState([
    {id: 1, name: 'john'},
    {id: 2, name: 'max'},
  ]);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 28, fontWeight: 'bold'}}>Log Screen</Text>
      <Button
        title="Switch"
        onPress={() => navigation.navigate('LogScreen2', {id: 1})}
      />
    </View>
  );
}
export default LogScreen;
