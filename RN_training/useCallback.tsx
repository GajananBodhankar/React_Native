import React, {useCallback, useState} from 'react';
import {Text, View, Button} from 'react-native';
const Call = () => {
  const [count, set] = useState(0);
  const fun = useCallback(() => {
    set(count + 1);
  }, [count]);
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 28}}>{count}</Text>
      <Button title="increment" onPress={fun} />
    </View>
  );
};
export default Call;
