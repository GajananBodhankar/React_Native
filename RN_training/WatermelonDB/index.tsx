import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {database} from './watermelon';
const db = database.collections.get('categories');
const Home = () => {
  return (
    <View style={style.container}>
      <SafeAreaView style={style.subContainer}></SafeAreaView>
      <View>
        <Text>Hi</Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {flex: 1},
  subContainer: {backgroundColor: 'red'},
});
export default Home;
