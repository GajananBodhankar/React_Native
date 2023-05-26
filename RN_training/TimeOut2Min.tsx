import React, {useEffect, useState} from 'react';

import MainStack from './RN_training/src/ChatGPT/MainStack';
import {SafeAreaView, Text} from 'react-native';

const App = () => {
  const [count, setCount] = useState(60);
  const [countSecond, setSecond] = useState(60);
  const [one, setOne] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    if (count < 0) {
      setOne(0);
    }
  }, [count]);
  useEffect(() => {
    if (count < 1) {
      setTimeout(() => {
        setSecond(countSecond - 1);
      }, 1000);
    }
  }, [count, countSecond]);
  //return <MainStack />;

  return (
    <SafeAreaView style={{flex: 1}}>
      {one >= 1 ? (
        <Text>{`0${one}:${count > 9 ? count : '0' + count.toString()}`}</Text>
      ) : countSecond >= 0 ? (
        <Text>{`0${one}:${
          countSecond > 9 ? countSecond : '0' + countSecond.toString()
        }`}</Text>
      ) : (
        <Text>00:00</Text>
      )}
    </SafeAreaView>
  );
};
export default App;
