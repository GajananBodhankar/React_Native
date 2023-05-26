import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconHome from 'react-native-vector-icons/Ionicons';
import IconPackage from 'react-native-vector-icons/Octicons';
import IconLanguage from 'react-native-vector-icons/FontAwesome';
import IconInfo from 'react-native-vector-icons/MaterialIcons';
import IconLogout from 'react-native-vector-icons/AntDesign';
import AwesomeAlert from 'react-native-awesome-alerts';
import {useState} from 'react';
export function DrawerContent(props: any) {
  const [show, setShow] = useState(false);
  return (
    <View>
      <View style={styles.MainContainer}>
        <Image
          source={{
            uri: 'https://ylpapp.isb.edu/user/Passport_photo_samples/Sample-3---wrong.jpg',
          }}
          style={styles.image}
          resizeMethod="resize"
        />
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.greeting}>Hi!</Text>
          <Text style={styles.name}>Broklynn Simmons</Text>
        </View>
      </View>
      <View style={styles.separatorView}>
        <View style={styles.separator}></View>
      </View>
      <View style={styles.pressableProfile}>
        <Pressable
          onPress={() => {
            props.navigation.navigate('Profile');
          }}
          style={{flexDirection: 'row'}}>
          <Icon
            name="user-o"
            color="#acacac"
            size={16}
            style={{paddingRight: 20}}
          />
          <Text style={styles.profile}>Profile</Text>
        </Pressable>
      </View>
      <View style={styles.pressableMy}>
        <Pressable
          onPress={() => {
            props.navigation.navigate('MyOrders');
          }}
          style={{flexDirection: 'row'}}>
          <IconPackage
            name="package"
            color="#acacac"
            size={18}
            style={{paddingRight: 20}}
          />
          <Text style={styles.MyOrders}>My Orders</Text>
        </Pressable>
      </View>
      <View style={styles.pressableLanguage}>
        <Pressable style={{flexDirection: 'row'}}>
          <IconLanguage
            name="language"
            color="#acacac"
            size={18}
            style={{paddingRight: 20}}
          />
          <Text style={styles.language}>Language</Text>
        </Pressable>
      </View>
      <View style={styles.pressableTC}>
        <Pressable style={{flexDirection: 'row'}}>
          <Icon
            name="list-alt"
            color="#acacac"
            size={18}
            style={{paddingRight: 20}}
          />
          <Text style={styles.TC}>Terms & conditions</Text>
        </Pressable>
      </View>
      <View style={styles.pressableAbout}>
        <Pressable style={{flexDirection: 'row'}}>
          <IconInfo
            name="info-outline"
            color="#acacac"
            size={18}
            style={{paddingRight: 20}}
          />
          <Text style={styles.About}>About</Text>
        </Pressable>
      </View>
      <View style={styles.pressableSettings}>
        <Pressable style={{flexDirection: 'row'}}>
          <IconHome
            name="ios-settings-outline"
            color="#acacac"
            size={18}
            style={{paddingRight: 20}}
          />
          <Text style={styles.settings}>Settings</Text>
        </Pressable>
      </View>
      <View style={{alignSelf: 'center'}}>
        <Image
          source={require('./Assets/BlurLogo.png')}
          style={styles.image2}
          resizeMethod="resize"
          resizeMode="contain"
        />
      </View>
      <View style={styles.pressableLogout}>
        <Pressable
          style={{flexDirection: 'row'}}
          onPress={() => {
            setShow(true);
          }}>
          <IconLogout
            name="logout"
            color="#acacac"
            size={18}
            style={{paddingRight: 20}}
          />
          <Text style={styles.logout}>Logout</Text>
        </Pressable>
      </View>
      <AwesomeAlert
        show={show}
        title="Confirm Logout"
        titleStyle={{color: 'black'}}
        message="Are you sure you want to logout?"
        showConfirmButton={true}
        showCancelButton={true}
        cancelButtonTextStyle={{
          textAlign: 'center',
          color: '#0078be',
          width: 80,
        }}
        cancelButtonStyle={{
          backgroundColor: 'white',
          borderWidth: 0.4,
          borderColor: '#0078be',
        }}
        confirmButtonStyle={styles.cnfbtn}
        confirmText="Logout"
        confirmButtonTextStyle={styles.cnfbtntxt}
        onCancelPressed={() => setShow(false)}
        onConfirmPressed={() => {
          props.navigation.navigate('Home');
          setShow(false);
          Alert.alert('You are logged out');
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  MainContainer: {paddingTop: 100, paddingLeft: 20, flexDirection: 'row'},
  image: {height: 60, width: 60, borderRadius: 250},
  greeting: {
    color: 'white',
    paddingLeft: 15,
    paddingBottom: 5,
    fontSize: 14,
  },
  name: {
    color: 'white',
    paddingLeft: 15,
    fontWeight: '700',
    fontSize: 16,
  },
  separatorView: {paddingHorizontal: 20, paddingTop: 20},
  separator: {
    borderWidth: 0.7,
    borderColor: 'grey',
    height: 1,
  },
  pressableProfile: {
    flexDirection: 'row',
    paddingLeft: 40,
    paddingTop: 20,
    paddingVertical: 5,
  },
  profile: {color: 'white', textAlign: 'center', fontSize: 16},
  pressableMy: {
    flexDirection: 'row',
    paddingLeft: 40,
    paddingTop: 20,
    paddingVertical: 5,
  },
  MyOrders: {color: 'white', textAlign: 'center', fontSize: 16},
  pressableLanguage: {
    flexDirection: 'row',
    paddingLeft: 40,
    paddingTop: 20,
    paddingVertical: 5,
  },
  language: {color: 'white', textAlign: 'center', fontSize: 16},
  pressableTC: {
    flexDirection: 'row',
    paddingLeft: 40,
    paddingTop: 20,
    paddingVertical: 5,
  },
  TC: {color: 'white', textAlign: 'center', fontSize: 16},
  pressableSettings: {
    flexDirection: 'row',
    paddingLeft: 40,
    paddingTop: 20,
    paddingVertical: 5,
  },
  settings: {color: 'white', textAlign: 'center', fontSize: 16},
  pressableLogout: {
    flexDirection: 'row',
    paddingLeft: 40,
  },
  logout: {color: 'white', textAlign: 'center', fontSize: 16},
  pressableAbout: {
    flexDirection: 'row',
    paddingLeft: 40,
    paddingTop: 20,
    paddingVertical: 5,
  },
  About: {color: 'white', textAlign: 'center', fontSize: 16},
  image2: {height: 150, width: 50, padding: 150, opacity: 0.4},
  cnfbtntxt: {textAlign: 'center', fontWeight: '500'},
  cnfbtn: {width: 100, backgroundColor: '#0078be'},
});
