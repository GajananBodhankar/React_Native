import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Alert,
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconInfo from 'react-native-vector-icons/MaterialCommunityIcons';
import IconLogout from 'react-native-vector-icons/AntDesign';
import AwesomeAlert from 'react-native-awesome-alerts';
import {useState} from 'react';
export function DrawerContent(props: any) {
  const [show, setShow] = useState(false);
  return (
    <View style={{flex: 1}}>
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
          <Text style={styles.name}>{`${props.data.user}`}</Text>
        </View>
      </View>
      <View style={styles.separatorView}>
        <View style={styles.separator}></View>
      </View>

      <View style={styles.pressableProfile}>
        <Pressable
          onPress={() => {
            props.navigation.navigate('Home');
          }}
          style={{flexDirection: 'row'}}>
          <Icon
            name="home"
            color="black"
            size={18}
            style={{paddingRight: 20}}
          />
          <Text style={styles.profile}>Home</Text>
        </Pressable>
      </View>
      <View style={styles.pressableMy}>
        <Pressable
          onPress={() => {
            props.navigation.navigate('Posts');
          }}
          style={{flexDirection: 'row'}}>
          <IconInfo
            name="post"
            color="black"
            size={18}
            style={{paddingRight: 20}}
          />
          <Text style={styles.MyOrders}>Posts</Text>
        </Pressable>
      </View>
      <View style={styles.pressableLanguage}>
        <Pressable
          style={{flexDirection: 'row'}}
          onPress={() => {
            props.navigation.navigate('ToDo');
          }}>
          <IconInfo
            name="view-list"
            color="black"
            size={18}
            style={{paddingRight: 20}}
          />
          <Text style={styles.language}>To-Do List</Text>
        </Pressable>
      </View>
      <View style={styles.pressableTC}>
        <Pressable
          style={{flexDirection: 'row'}}
          onPress={() => {
            props.navigation.navigate('Comments');
          }}>
          <Icon
            name="comments"
            color="black"
            size={18}
            style={{paddingRight: 20}}
          />
          <Text style={styles.TC}>Comments</Text>
        </Pressable>
      </View>

      <View style={styles.pressableLogout}>
        <Pressable
          style={{flexDirection: 'row'}}
          onPress={() => {
            setShow(true);
          }}>
          <IconLogout
            name="logout"
            color="black"
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
          color: '#F1C40F',
          width: 80,
        }}
        cancelButtonStyle={{
          backgroundColor: 'white',
          borderWidth: 0.4,
          borderColor: '#F1C40F',
        }}
        confirmButtonStyle={styles.cnfbtn}
        confirmText="Logout"
        confirmButtonTextStyle={styles.cnfbtntxt}
        onCancelPressed={() => setShow(false)}
        onConfirmPressed={() => {
          props.navigation.navigate('Login');
          setShow(false);
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  MainContainer: {paddingTop: 100, paddingLeft: 20, flexDirection: 'row'},
  image: {height: 60, width: 60, borderRadius: 250},
  greeting: {
    color: 'black',
    paddingLeft: 15,
    paddingBottom: 5,
    fontSize: 14,
  },
  name: {
    color: 'black',
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
  profile: {color: 'black', textAlign: 'center', fontSize: 16},
  pressableMy: {
    flexDirection: 'row',
    paddingLeft: 40,
    paddingTop: 20,
    paddingVertical: 5,
  },
  MyOrders: {color: 'black', textAlign: 'center', fontSize: 16},
  pressableLanguage: {
    flexDirection: 'row',
    paddingLeft: 40,
    paddingTop: 20,
    paddingVertical: 5,
  },
  language: {color: 'black', textAlign: 'center', fontSize: 16},
  pressableTC: {
    flexDirection: 'row',
    paddingLeft: 40,
    paddingTop: 20,
    paddingVertical: 5,
  },
  TC: {color: 'black', textAlign: 'center', fontSize: 16},
  pressableSettings: {
    flexDirection: 'row',
    paddingLeft: 40,
    paddingTop: 20,
    paddingVertical: 5,
  },
  settings: {color: 'white', textAlign: 'center', fontSize: 16},
  pressableLogout: {
    paddingVertical: 20,
    paddingLeft: 40,
  },
  logout: {color: 'black', textAlign: 'center', fontSize: 16},
  pressableAbout: {
    flexDirection: 'row',
    paddingLeft: 40,
    paddingTop: 20,
    paddingVertical: 5,
  },
  About: {color: 'white', textAlign: 'center', fontSize: 16},
  image2: {height: 150, width: 50, padding: 150, opacity: 0.4},
  cnfbtntxt: {textAlign: 'center', fontWeight: '500'},
  cnfbtn: {width: 100, backgroundColor: '#F1C40F'},
});
