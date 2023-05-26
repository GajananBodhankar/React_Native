import React from 'react';
import {TextInput, View, Image} from 'react-native';
interface In {
  placeholder: String;
  image: String;
  secure?: any;
}
const TextIn = ({placeholder, image, secure}: In) => {
  return (
    <View style={{paddingHorizontal: 20}}>
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          width: 350,
          borderColor: 'gray',
          borderWidth: 2,
          borderRadius: 10,
          marginVertical: 10,
        }}>
        <Image
          source={{
            uri: image,
          }}
          style={{
            height: 30,
            width: 30,
            alignSelf: 'center',
            marginHorizontal: 10,
          }}
        />
        <TextInput
          placeholder={placeholder}
          style={{fontSize: 18}}
          secureTextEntry={secure}
        />
      </View>
    </View>
  );
};
export default TextIn;
