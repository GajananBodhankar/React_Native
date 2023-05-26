import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
const App = () => {
  const [data, set] = useState([
    {id: 1, name: 'john'},
    {id: 2, name: 'gajanan'},
    {id: 3, name: 'deepika'},
    {id: 4, name: 'max'},
    {id: 5, name: 'bruce'},
  ]);
  return (
    <ScrollView
      onScrollEndDrag={() => console.warn('end')}
      onScroll={() => console.warn('scrolling')}
      contentContainerStyle={{
        backgroundColor: 'khaki',
        marginVertical: 60,
        alignItems: 'center',
      }}>
      {data.map(i => (
        <Text style={{fontSize: 72, marginVertical: 32}}>
          {i.id}-{i.name}
        </Text>
      ))}
    </ScrollView>
  );
};
export default App;
