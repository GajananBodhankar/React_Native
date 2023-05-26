import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useState} from 'react';
const Data = [
  {
    id: 1,
    name: 'aa',
  },
  {id: 2, name: 'bb'},
];
const Show = ({item, action, bg}) => {
  return (
    <TouchableOpacity
      onPress={action}
      style={[{padding: 10, marginVertical: 10}, bg]}>
      <Text style={{fontSize: 18}}>{item.name}</Text>
    </TouchableOpacity>
  );
};
const App = () => {
  const [se, set1] = useState(null);
  const Disp = ({item}) => {
    const backgroundColor = item.id === se ? 'blue' : 'pink';
    return (
      <Show item={item} action={() => set1(item.id)} bg={{backgroundColor}} />
    );
  };
  return (
    <View style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
      <FlatList data={Data} renderItem={Disp} keyExtractor={item => item.id} />
    </View>
  );
};
export default App;
