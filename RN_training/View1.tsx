import React from 'react';
import {View} from 'react-native';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            height: 200,
            width: 100,
            marginHorizontal: 10,
            marginBottom: 10,
            backgroundColor: 'red',
          }}></View>
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              height: 80,
              width: 250,
              backgroundColor: 'green',
              marginBottom: 20,
            }}></View>
          <View
            style={{
              backgroundColor: 'pink',
              height: 80,
              width: 250,
            }}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: 'black',
            height: 190,
            width: 190,
            marginHorizontal: 10,
            marginBottom: 10,
          }}></View>
        <View
          style={{
            backgroundColor: 'khaki',
            height: 190,
            width: 190,
            marginHorizontal: 10,
            marginBottom: 10,
          }}></View>
      </View>
    </View>
  );
};
export default App;
