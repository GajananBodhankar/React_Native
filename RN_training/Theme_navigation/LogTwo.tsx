import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { User } from './interface';
const LogTwo = ({ navigation }: any) => {
  const { theme } = useContext(User);
  return (
    <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
      <Text style={{ fontSize: 22 }}>LogTwo</Text>
      <Text style={{ fontSize: 22 }}>{theme}</Text>
      <Button
        title="Move to LogThree"
        onPress={() => navigation.navigate('LogThree')}
      />
    </View>
  );
};
export default LogTwo;
