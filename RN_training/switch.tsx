import React, {useState} from 'react';
import {View, Switch} from 'react-native';
const Swi = () => {
  const [bg, setbg] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: bg ? 'khaki' : 'white'}}>
      <Switch
        value={bg}
        thumbColor={bg ? 'red' : 'gray'}
        trackColor={{true: 'blue', false: 'gray'}}
        onChange={() => setbg(!bg)}
      />
    </View>
  );
};
export default Swi;
