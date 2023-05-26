/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
// /* eslint-disable react/no-unstable-nested-components */
// /* eslint-disable react-native/no-inline-styles */
// // /* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import MainStack from './RN_training/src/ChatGPT/MainStack';
import Bluetooth from './RN_training/Bluetooth/Bluetooth';
import {Button, Modal, SafeAreaView, Text, View} from 'react-native';
import Index from './RN_training/SagaPractice';
import {Provider} from 'react-redux';


import store from './RN_training/SagaPractice/sagaStore';
import Saga from './RN_training/redux_saga/actionSaga';


const App = () => {
  const [bool, set] = useState(false);
  return (
    <Provider store={store}>
      <Saga />
    </Provider>
  );
};
export default App;
