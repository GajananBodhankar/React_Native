import React from 'react';
import {ScrollView, View, Text, RefreshControl, Alert} from 'react-native';
import {useState} from 'react';
const App = () => {
  const [x, set] = useState(false);
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: 'lightblue'}}
      contentContainerStyle={{backgroundColor: 'khaki'}}
      refreshControl={
        <RefreshControl
          refreshing={x}
          onRefresh={() => {
            set(true);
            setTimeout(() => {
              set(false);
            }, 4000);
          }}
        />
      }>
      <Text>Refresh control</Text>
    </ScrollView>
  );
};
export default App;
