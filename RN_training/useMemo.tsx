import React, {useEffect, useState, useMemo} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import X from './programs/Task1';
function check(num) {
  var flag = 0;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      flag++;
      break;
    }
  }
  if (flag == 0) {
    return 'prime';
  } else {
    return 'not prime';
  }
}
const App = () => {
  const [count, set] = useState(0);
  const [count1, set1] = useState(10);
  useEffect(() => {
    console.log('incremented');
    return () => {
      console.log('returned');
    };
  }, [count]);
  const x = useMemo(() => {
    return check(count);
  }, [count]);
  return (
    <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 22}}>{count}</Text>
      <Text style={{fontSize: 22}}>{count1}</Text>
      <Text style={{fontSize: 28}}>{`${x}`}</Text>
      <Button
        title="increment"
        onPress={() => {
          set(count + 1);
        }}
      />
      <Button
        title="increment 1"
        onPress={() => {
          set1(count1 + 1);
        }}
      />
    </View>
  );
};
export default App;
