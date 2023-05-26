import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Linking,
    Alert,
  } from 'react-native';
  
  import React, {useCallback, useState} from 'react';
  
  import Geolocation from '@react-native-community/geolocation';
  
  // import Geocoder from 'react-native-geocoder';
  
  import axios from 'axios';
  
  export default function GeoLocation() {
    const [x, setx] = useState('New york');
  
    const [location, setLocation] = useState<string>();
  
    const [latitude, setLatitude] = useState<any>();
  
    const [longitude, setLongitude] = useState<any>();
  
    const [data, setData] = useState<any>([]);
  
    const api = {
      key: `2c439b310242105245fd3c781a63c4e2`,
  
      baseUrl: `https://api.openweathermap.org/data/2.5/`,
    };
  
    const getPosition = () => {
      Geolocation.getCurrentPosition(
        position => {
          setLocation(JSON.stringify(position)); // console.log('position::',position)
  
          const latitude = JSON.stringify(position.coords.latitude);
  
          setLatitude(latitude);
  
          const longitude = JSON.stringify(position.coords.longitude);
  
          setLongitude(longitude);
        },
  
        error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
  
        {enableHighAccuracy: true},
      );
    };
    const getAddress = async () => {
      const response = await axios
  
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2c439b310242105245fd3c781a63c4e2&units=metric`,
        )
        .then(response => {
          console.log('response--->', response.data);
          setData(response.data);
        })
        .catch(e => console.log(e));
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.head}>Get Current Position</Text>
        <TouchableOpacity onPress={getPosition} style={styles.btn}>
          <Text style={styles.btnText}>Click</Text>
        </TouchableOpacity>
        <Text style={styles.latText}>Latitude: {latitude}</Text>
        <Text style={styles.latText}>Longitude: {longitude}</Text>
        <Text style={styles.head}>Get current Address</Text>
        <TouchableOpacity style={styles.btn} onPress={getAddress}>
          <Text style={styles.btnText}>Press</Text>
        </TouchableOpacity>
        {data? <Text style={styles.head}>temp:{`${data?.main?.temp}`}</Text>:null}
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    head: {
      fontSize: 18,
  
      fontWeight: '700',
  
      alignSelf: 'center',
  
      marginTop: 20,
    },
  
    btn: {
      height: 30,
  
      width: 100,
  
      alignItems: 'center',
  
      justifyContent: 'center',
  
      alignSelf: 'center',
  
      marginTop: 20,
  
      backgroundColor: '#0078be',
    },
  
    btnText: {
      color: 'white',
  
      fontSize: 16,
    },
  
    latText: {
      marginLeft: 20,
  
      marginTop: 15,
  
      fontSize: 18,
  
      fontWeight: '600',
    },
  });
  