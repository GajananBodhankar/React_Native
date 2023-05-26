import React, { useState, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { User } from './interface';
const LogThree = ({ navigation }: any) => {
  const { theme, Change } = useContext(User);
  return (
    <View style={{ flex: 1, backgroundColor: theme }}>
      <Text
        style={{ fontSize: 22, color: theme == 'white' ? 'black' : 'white' }}>
        {theme == 'white' ? `Light mode` : `Dark mode`}
      </Text>
      <Button title="White mode" onPress={() => Change('white')} />
      <Button title="Dark mode" onPress={() => Change('black')} />
      <Button
        title="Move to LogOne"
        onPress={() => navigation.navigate('LogOne')}
      />
    </View>
  );
};
export default LogThree;
