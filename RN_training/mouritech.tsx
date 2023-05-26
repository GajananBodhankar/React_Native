import React from 'react';

import {StyleSheet, View, Text, Image} from 'react-native';

const app = () => {
  return (
    <View style={a.box}>
      <Image
        style={a.img}
        source={{
          uri: 'data:image/jpeg;base64,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',
        }}
      />

      <Text
        style={{
          alignSelf: 'center',

          fontSize: 30,

          fontWeight: 'bold',

          color: 'white',

          bottom: 30,
        }}>
        MOURI TECH
      </Text>

      <View>
        <Text style={{fontSize: 50, color: 'white', paddingLeft: 50}}>
          #Culture
        </Text>

        <Text style={{fontSize: 50, color: 'white', paddingLeft: 130}}>
          Connect
        </Text>
      </View>

      <View
        style={{
          width: 150,

          height: 40,

          backgroundColor: 'purple',

          marginLeft: 180,
        }}>
        <Text
          style={{color: 'white', paddingLeft: 5, fontSize: 18, paddingTop: 5}}>
          #OneMOURITech
        </Text>
      </View>

      <View style={{height: 40, backgroundColor: 'darkred', marginTop: 210}}>
        <Text
          style={{
            color: 'white',

            alignSelf: 'center',

            paddingTop: 5,

            fontSize: 18,
          }}>
          Employee First. Customer Foremost
        </Text>
      </View>
    </View>
  );
};

const a = StyleSheet.create({
  box: {
    flex: 1,

    backgroundColor: 'red',

    paddingVertical: 100,
  },

  img: {
    height: 120,
    width: 140,
    alignSelf: 'center',
    backgroundColor: 'red',
    bottom: 50,
  },
});

export default app;
