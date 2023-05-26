import React, {useContext, createContext, useState} from 'react';
import {View, Text} from 'react-native';
import CheckBox from 'react-native-checkbox';
export const UserCon = createContext(null);
const Fun = () => {
  const [x, set] = useState<any>(false);
  return (
    <UserCon.Provider value={x}>
      <View style={{backgroundColor: x ? 'black' : 'white'}}>
        <CheckBox
          label="Dark mode"
          checked={x}
          onChange={() => {
            set(!x);
          }}
        />
      </View>
      <Fun1 />
    </UserCon.Provider>
  );
};
function Fun1() {
  const x = useContext(UserCon);
  return (
    <View style={{flex: 1, backgroundColor: x ? 'black' : 'white'}}></View>
  );
}
export default Fun;