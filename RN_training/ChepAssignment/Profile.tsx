import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
const Profile = ({navigation}: any) => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.subContainer}>
        <SafeAreaView style={{flexDirection: 'row'}}>
          <Icon
            name="three-bars"
            color={'white'}
            size={22}
            style={styles.threeBars}
            onPress={() => navigation.openDrawer()}
          />
          <View style={styles.ImageMain}>
            <View style={styles.ImageSub}>
              <Image source={require('./Assets/logo.png')} style={styles.img} />
            </View>
            <Image
              source={require('./Assets/Chep.png')}
              style={styles.img2}
              resizeMethod="resize"
              resizeMode="contain"
            />
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  MainContainer: {flex: 1},
  subContainer: {backgroundColor: '#0078be'},
  threeBars: {paddingLeft: 20, paddingTop: 10},
  ImageMain: {paddingLeft: 10, flexDirection: 'row'},
  ImageSub: {paddingLeft: 10, paddingTop: 10, paddingRight: 5},
  img: {height: 25, width: 25},
  img2: {height: 50, width: 100},
});
export default Profile;
