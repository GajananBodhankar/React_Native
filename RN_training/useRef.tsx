import React, {useRef} from 'react';
import {View, Button, TextInput} from 'react-native';

const UseRef = () => {
  const Ref = useRef(null);
  function Press() {
    Ref.current.focus();
  }
  function PressOut() {
    Ref.current.blur();
  }
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{alignSelf: 'center', width: 150}}>
        <TextInput
          ref={Ref}
          placeholder="enter name"
          style={{borderWidth: 2}}
        />
        <Button title="focus" onPress={Press} />
        <Button title="blur" onPress={PressOut} />
      </View>
    </View>
  );
};
export default UseRef;
