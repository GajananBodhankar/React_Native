import React, {useState} from 'react';

import {View, Text, Pressable, Alert} from 'react-native';

import Ionicons from 'react-native-vector-icons/FontAwesome';

const Heart = () => {
  const [bool, setBool] = useState(false);
  return (
    <View style={{justifyContent: 'flex-end'}}>
      <Pressable onPress={() => setBool(!bool)}>
        <Ionicons name="heart" color={bool ? 'red' : 'gray'} size={25} />
      </Pressable>
    </View>
  );
};
export default Heart;