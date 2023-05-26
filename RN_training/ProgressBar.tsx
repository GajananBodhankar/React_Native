import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native';
import {TextInput} from 'react-native-paper';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
const ProgressBar = () => {
  const [name, setName] = useState<String>();
  const [bool, setBool] = useState<Boolean>(true);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ProgressSteps>
          <ProgressStep
            label="First Step"
            nextBtnText="Login"
            nextBtnStyle={{
              textAlign: 'center',
              position: 'relative',
              paddingBottom: 500,
              paddingRight: 110,
            }}
            nextBtnDisabled={bool}>
            <View style={{alignItems: 'center'}}>
              <TextInput
                placeholder="Enter name"
                onChangeText={i => {
                  setName(i);
                  setBool(false);
                }}
              />
            </View>
          </ProgressStep>
          <ProgressStep label="Second Step">
            <View style={{alignItems: 'center'}}>
              <Text>This is the content within step 2!</Text>
            </View>
          </ProgressStep>
          <ProgressStep label="Third Step">
            <View style={{alignItems: 'center'}}>
              <Text>This is the content within step 3!</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    </SafeAreaView>
  );
};
export default ProgressBar;
