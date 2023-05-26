import React, {useState} from 'react';
import {Modal, Text, View, Button, Alert} from 'react-native';
const App = () => {
  const [vis, set] = useState(false);
  return (
    <View>
      <Button title="submit" onPress={() => set(!vis)} color="red" />
      <Modal
        visible={vis}
        onRequestClose={() => set(!vis)}
        onShow={() => Alert.alert('modal displaying')}
        onDismiss={() => console.log('hello')}>
        <Text>Hello john</Text>
      </Modal>
    </View>
  );
};
export default App;
