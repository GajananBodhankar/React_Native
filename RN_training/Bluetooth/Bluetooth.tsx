/* eslint-disable react-native/no-inline-styles */
import RNBluetoothClassic from 'react-native-bluetooth-classic';
import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  PermissionsAndroid,
  Alert,
  Appearance,
  FlatList,
} from 'react-native';

const Bluetooth = () => {
  const [data, setData] = useState<any>([]);
  async function requestAccessFineLocationPermission() {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Access fine location required for discovery',
        message:
          'In order to perform discovery, you must enable/allow ' +
          'fine location access.',
        buttonNeutral: 'Ask Me Later"',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }
  const startDiscovery = async () => {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
    );

    try {
      const available = await RNBluetoothClassic.isBluetoothAvailable();
      console.log(available.valueOf());
    } catch (err) {
      console.log(err);
    }

    const granted = await requestAccessFineLocationPermission();
    if (!granted) {
      console.log('Error');
    }
    try {
      Alert.alert('Loading');
      RNBluetoothClassic.onStateChanged(() => console.log('State changed'));
      const result = await RNBluetoothClassic.startDiscovery();

      result.length > 0
        ? result.forEach(i => console.log('The available devices are', i.name))
        : console.log('No devices found');
      result.length > 0 ? setData(result) : null;
    } catch (error) {
      Alert.alert(`${error}`);
    }
  };
  const cancel = async () => {
    const res = await RNBluetoothClassic.cancelDiscovery();
    Alert.alert(`${res.valueOf()}`);
    RNBluetoothClassic.onStateChanged(() => console.log('State changed'));
  };
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', paddingBottom: 20, fontWeight: 500}}>
        Scan for the devices
      </Text>
      <Pressable
        onPress={startDiscovery}
        style={{
          alignSelf: 'center',
          backgroundColor:
            Appearance.getColorScheme() === 'dark' ? 'white' : 'black',
          padding: 20,
          marginBottom: 30,
        }}>
        <Text
          style={{
            color: Appearance.getColorScheme() === 'dark' ? 'black' : 'white',
          }}>
          Start{' '}
        </Text>
      </Pressable>
      <Pressable
        onPress={cancel}
        style={{
          alignSelf: 'center',
          backgroundColor:
            Appearance.getColorScheme() === 'dark' ? 'white' : 'black',
          padding: 20,
        }}>
        <Text
          style={{
            color: Appearance.getColorScheme() === 'dark' ? 'black' : 'white',
          }}>
          Stop{' '}
        </Text>
      </Pressable>
      {data.length > 0 && (
        <Text style={{textAlign: 'center', color: 'black', paddingTop: 30}}>
          The available devices are:
        </Text>
      )}
      <View style={{paddingTop: 40}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={{alignSelf: 'center'}}>
              <Text style={{color: 'black'}}>Name-{item.name}</Text>
              <Text style={{color: 'black', paddingBottom: 10}}>
                Id-{item.id}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};
export default Bluetooth;
