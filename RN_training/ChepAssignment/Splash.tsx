import React, {useEffect} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
const Splash = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(()=>{
      navigation.replace('Main')
    },4000)
  }, []);
  return (
    <View style={styles.main}>
     
        <ImageBackground
          source={require('./Assets/BlurLogo.png')}
          style={styles.image}
          resizeMode="contain">
          <Text style={styles.text}>Welcome to the CHEP Application</Text>
        </ImageBackground>

    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#0078be',
    flex: 1,
  },
  text: {
    paddingTop: 300,
    textAlign: 'center',
    fontSize: 28,
    color:'black',
    fontWeight:500
  },
  image: {
    height: 400,
    width: 400,
    alignSelf: 'center',
    opacity: 0.4,
  },
});
export default Splash;
