import React from 'react';
import {View, Text, Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'khaki',
      }}>
      <Text style={{fontSize: 28, fontWeight: 'bold'}}>Home Screen</Text>
      <Button title="Switch" onPress={() => navigation.navigate('Log')} />
    </View>
  );
}
export default HomeScreen;
