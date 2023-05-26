import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
function X() {
  return (
    <View style={style.view1}>
      <Text style={style.txt1}>HEADER</Text>
      <View style={style.view2}>
        <Text
          style={{
            color: 'white',
            paddingTop: 15,
            paddingHorizontal: 2,
            fontSize: 18,
          }}>
          LEFTSIDEBAR
        </Text>
        <View style={style.view3}>
          <Text
            style={{
              paddingTop: 15,
              paddingHorizontal: 28,
              fontSize: 18,
              color: 'white',
            }}>
            MAINCONTENT
          </Text>
          <View style={style.view4}>
            <Text
              style={{
                paddingTop: 15,
                paddingHorizontal: 5,
                fontSize: 18,
                color: 'white',
              }}>
              RIGHTSIDER
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 0.1,
          backgroundColor: 'deeppink',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          FOOTER
        </Text>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: 'red',
  },
  txt1: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  view2: {
    flex: 1,
    backgroundColor: 'lightblue',
    flexDirection: 'row',
  },
  view3: {
    flex: 1,
    backgroundColor: 'purple',
    flexDirection: 'row',
  },
  view4: {
    flex: 1,
    backgroundColor: 'green',
    flexDirection: 'column',
  },
});
export default X;
