import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
function app() {
  return (
    <View>
      <View style={a.flex}>
        <Text
          style={{
            paddingHorizontal: 100,
            paddingVertical: 50,
            fontSize: 25,
            backgroundColor: 'pink',
          }}>
          Hi
        </Text>
        <Text
          style={{
            paddingHorizontal: 50,
            paddingVertical: 20,
            fontSize: 25,
            backgroundColor: 'blue',
          }}>
          Hello
        </Text>
      </View>
      <View
        style={{
          marginTop: 40,
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            paddingHorizontal: 100,
            paddingVertical: 100,
            fontSize: 25,
            backgroundColor: 'green',
          }}>
          hii
        </Text>
        <View
          style={{
            paddingTop: 40,
            justifyContent: 'space-evenly',
            flexDirection: 'column',
          }}>
          <Text
            style={{
              paddingHorizontal: 50,
              paddingVertical: 20,
              fontSize: 25,
              backgroundColor: 'grey',
            }}>
            hiii
          </Text>
          <Text
            style={{
              paddingHorizontal: 50,
              paddingVertical: 20,
              fontSize: 25,
              backgroundColor: 'grey',
            }}>
            hee
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingTop: 40,
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            paddingHorizontal: 50,
            paddingVertical: 50,
            fontSize: 25,
            backgroundColor: 'blue',
          }}>
          h
        </Text>
        <Text
          style={{
            paddingHorizontal: 50,
            paddingVertical: 50,
            fontSize: 25,
            backgroundColor: 'blue',
          }}>
          h
        </Text>
        <Text
          style={{
            paddingHorizontal: 50,
            paddingVertical: 50,
            fontSize: 25,
            backgroundColor: 'blue',
          }}>
          h
        </Text>
      </View>
      <View
        style={{
          paddingTop: 50,
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            paddingHorizontal: 150,
            paddingVertical: 20,
            fontSize: 25,
            backgroundColor: 'black',
            color: 'white',
          }}>
          done
        </Text>
      </View>
    </View>
  );
}
export default app;
const a = StyleSheet.create({
  flex: {
    //backgroundColor: 'white',
    paddingTop: 40,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    //flex:1,
  },
});
