import React from 'react';
import { View, Text, Button } from 'react-native';
const LogOne = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
      <Text style={{ fontSize: 22 }}>LogOne</Text>
      <Button
        title="Move to LogTwo"
        onPress={() => navigation.navigate('LogTwo')}
      />
    </View>
  );
};
export default LogOne;
