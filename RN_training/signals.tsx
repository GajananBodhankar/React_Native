import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';

const App = () => {
  const [red, setRed] = useState<Boolean>(true);
  const [yellow, setYellow] = useState<Boolean>(false);
  const [green, setGreen] = useState<Boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setGreen(false);
      setRed(!red);
    }, 8000);
    if (red == false) {
      setYellow(true);
      setTimeout(() => setYellow(false), 2000);
    }
    if (red == false) {
      setTimeout(() => setGreen(true), 2000);
    }
  }, [red]);
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: red ? 'red' : 'black',
          width: '100%',
          padding: 10,
        }}></View>
      <View
        style={{
          backgroundColor: yellow ? 'orange' : 'black',
          width: '100%',
          padding: 10,
        }}></View>
      <View
        style={{
          backgroundColor: green ? 'green' : 'black',
          width: '100%',
          padding: 10,
        }}></View>
    </SafeAreaView>
  );
};

export default App;
