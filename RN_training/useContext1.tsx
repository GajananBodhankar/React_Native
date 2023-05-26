import React, {useState, useContext, createContext} from 'react';
import {View, Text} from 'react-native';
export const User = createContext(null);
const Fun = () => {
  const [x, set] = useState<any>(10);
  return (
    <User.Provider value={x}>
      <Text style={{fontSize: 28}}>In parent - {x}</Text>
      <Fun1 />
      <Fun2/>
    </User.Provider>
  );
};
export default Fun;
const Fun1 = () => {
  const y = useContext(User);
  return (
    <View>
      <Text style={{fontSize: 28, color: 'black'}}>In child one- {y * 2}</Text>
    </View>
  );
};
const Fun2 = () => {
  const z = useContext(User);
  return (
    <View>
      <Text style={{fontSize: 28, color: 'black'}}>In child two- {z * 2}</Text>
    </View>
  );
};
