import React from 'react';
import {View, Text, Button} from 'react-native';
function LogScreen2({route, navigation}) {
  const arr = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <Text style={{fontSize: 28, fontWeight: 'bold'}}>
        {JSON.stringify(obj)}
      </Text> */}
      <Text style={{fontSize: 28, fontWeight: 'bold'}}>
        {JSON.stringify(arr)}
      </Text>
      <Text style={{fontSize: 28, fontWeight: 'bold'}}>Log Screen II</Text>
      <Button
        title="Go To Tab Nav"
        onPress={() => navigation.navigate('Nav')}
      />
    </View>
  );
}
export default LogScreen2;
