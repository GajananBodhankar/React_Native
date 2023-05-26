import React, {useState, useContext, createContext} from 'react';
import {View, Text,Button} from 'react-native';
export const User = createContext(null);
const Fun = () => {
  const [x, set] = useState<any>(10);
  return (
    <User.Provider value={{x,set}}>
      <Text style={{fontSize: 28}}>In parent - {x}</Text>
      <Fun1 />
    </User.Provider>
  );
};
export default Fun;
const Fun1 = () => {
  const y = useContext(User);
  return (
    <View>
      <Text style={{fontSize: 28, color: 'black'}}>In child one- {y * 2}</Text>
      <Fun2 />
    </View>
  );
};
const Fun2 = () => {
  const z = useContext(User);
  return (
    <View>
      <Text style={{fontSize: 28, color: 'black'}}>In child two- {z * 2}</Text>
    </View>
  );
};

// import React, {createContext, useContext, useState} from 'react';
// import {Button, SafeAreaView, Text, View} from 'react-native';
// const User = createContext({count: 0, setCount: (i:any) => {}});
// const App = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <User.Provider value={{count, setCount}}>
//       <SafeAreaView>
//         <Text>{count}</Text>
//         <App1 />
//       </SafeAreaView>
//     </User.Provider>
//   );
// };
// const App1 = () => {
//   const {count, setCount = (i: any) => null} = useContext(User);
//   return (
//     <View>
//       <Text>{count}</Text>
//       <Button title="Press" onPress={() => setCount(count + 1)} />
//     </View>
//   );
// };
// export default App;
