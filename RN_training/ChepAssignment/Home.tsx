import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Transfer from './Transfer';
import PickUp from './PickUp';

const Home = ({navigation}: any) => {
  const [bool, setBool] = useState<boolean>(false);
  return (
    <View style={{flex: 1}}>
      <View style={styles.mainView}>
        <SafeAreaView style={styles.Header}>
          <Icon
            name="three-bars"
            color={'white'}
            size={22}
            style={styles.BarIcon}
            onPress={() => navigation.openDrawer()}
          />
          <View style={styles.ImageMain}>
            <View style={styles.ImageSub}>
              <Image
                source={require('./Assets/logo.png')}
                style={styles.logo}
              />
            </View>
            <Image
              source={require('./Assets/Chep.png')}
              style={styles.Chep}
              resizeMethod="resize"
              resizeMode="contain"
            />
          </View>
        </SafeAreaView>
      </View>
      <View style={styles.ImageBackground}>
        <View style={{paddingTop: 10}}>
          <Image
            source={{
              uri: 'https://ylpapp.isb.edu/user/Passport_photo_samples/Sample-3---wrong.jpg',
            }}
            style={styles.img}
            resizeMethod="resize"
          />
        </View>
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.hi}>Hi!</Text>
          <Text style={styles.name}>Broklynn Simmons</Text>
        </View>
        <View style={{paddingLeft: 50}}>
          <Image
            source={require('./Assets/BlurLogo.png')}
            style={styles.blurImage}
          />
        </View>
      </View>
      <Text style={styles.myOrders}>My Orders</Text>
      <View style={styles.container}>
        <Text
          style={[
            styles.pickup,
            {
              textDecorationLine: bool ? 'underline' : 'none',
              textDecorationColor: '#0078be',
              color: bool ? '#0078be' : 'grey',
            },
          ]}
          onPress={() => setBool(true)}>
          Pick Up Pallet
        </Text>
        <Text
          style={[
            styles.transfer,
            {
              textDecorationLine: !bool ? 'underline' : 'none',
              textDecorationColor: '#0078be',
              color: !bool ? '#0078be' : 'grey',
            },
          ]}
          onPress={() => setBool(false)}>
          Transfer Pallet
        </Text>
      </View>
      {bool ? (
        <View style={styles.pickupMain}>
          <Text style={styles.orders}>Orders</Text>
          <View style={styles.total}>
            <View style={styles.totalordersView}>
              <Text style={{padding: 10}}>Total Orders</Text>
              <Text style={styles.ten}>10</Text>
              <FontAwesome
                name="greater-than"
                color={'grey'}
                style={styles.icon}
              />
            </View>
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#0078be',
  },
  ImageBackground: {
    paddingLeft: 20,
    flexDirection: 'row',
    backgroundColor: '#d5efff',
  },
  Header: {flexDirection: 'row'},
  BarIcon: {paddingLeft: 20, paddingTop: 10},
  container: {flexDirection: 'row', paddingTop: 20, paddingLeft: 25},
  pickup: {
    paddingRight: 30,
    fontWeight: '500',
    fontSize: 15,
  },
  transfer: {
    fontWeight: '500',
    fontSize: 15,
  },
  ImageMain: {
    paddingLeft: 20,
    flexDirection: 'row',
  },
  ImageSub: {paddingLeft: 10, paddingTop: 10, paddingRight: 5},
  logo: {height: 25, width: 25},
  Chep: {height: 50, width: 100},
  img: {
    height: 60,
    width: 60,
    borderRadius: 250,
    borderWidth: 0.2,
    borderColor: '#0078be',
  },
  myOrders: {paddingLeft: 15, paddingTop: 15, fontSize: 16},
  hi: {
    color: 'black',
    paddingLeft: 15,
    paddingBottom: 5,
    fontSize: 14,
  },
  name: {
    color: 'black',
    paddingLeft: 15,
    fontWeight: '500',
    fontSize: 16,
  },
  blurImage: {height: 80, width: 120, opacity: 0.08},
  pickupMain: {paddingLeft: 15, paddingTop: 15},
  orders: {fontSize: 16},
  totalordersView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
  },
  total: {
    paddingTop: 10,
    paddingRight: 18,
  },
  ten: {
    textAlign: 'center',
    paddingTop: 7,
    fontSize: 18,
    fontWeight: '600',
  },
  icon: {
    alignSelf:'center',
    paddingLeft:200,
  },
});

export default Home;
