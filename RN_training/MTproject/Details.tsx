import Reat, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';
import {User1} from '../../App';
import {style} from './Contents';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {auth, db} from '../FireBaseAuth/firebase.config';
import {signOut} from 'firebase/auth';
import {ref, set} from 'firebase/database';
const Details = ({navigation}: any) => {
  const [date, setDate] = useState('');
  const [bool, setBool] = useState<Boolean>(false);
  const {mainData, setMainData} = useContext(User1);
  useEffect(() => {
    setDate(
      `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
    );
  }, []);
  var amount = 0;
  mainData?.forEach(i => {
    if (i?.amount) {
      amount = amount + i.amount;
    }
  });
  function LogOut() {
    Alert.alert('Logout', 'Are you sure?', [
      {
        text: 'Yes',
        onPress: () => {
          signOut(auth).then(() => {
            navigation.navigate('Login');
          });
        },
      },
      {text: 'No'},
    ]);
  }
  function check() {}
  const Disp = ({item}: any) => {
    if (item?.amount > 0) {
      return (
        <View style={design.flatView}>
          <View style={design.content}>
            {item.name == 'Food' ? (
              <Icons
                name="fast-food"
                size={35}
                color="black"
                style={{alignSelf: 'center'}}
              />
            ) : null}
            {item.name == 'Travel' ? (
              <Icon
                name="wallet-travel"
                size={35}
                color="black"
                style={{alignSelf: 'center'}}
              />
            ) : null}
            {item.name == 'Movies' ? (
              <Icon
                name="movie"
                size={35}
                color="black"
                style={{alignSelf: 'center'}}
              />
            ) : null}
            {item.name == 'Hospital' ? (
              <Icon
                name="hospital"
                size={35}
                color="black"
                style={{alignSelf: 'center'}}
              />
            ) : null}
            <Text style={design.name}>{item.name}</Text>
            <Text style={design.amount}>₹{item.amount}</Text>
            <Pressable
              style={{alignSelf: 'center'}}
              onPress={() => {
                mainData.forEach((i, j) => {
                  if (i.name == item.name) {
                    setMainData([
                      ...mainData,
                      (mainData[j].name = item.name),
                      (mainData[j].amount = 0),
                    ]);
                  }
                });
                set(ref(db, `${auth.currentUser?.uid}/`), {
                  Food: mainData[0].amount,
                  Travel: mainData[1].amount,
                  Movie: mainData[2].amount,
                  Hospital: mainData[3].amount,
                  EmpId: mainData[4].EmpId,
                  lastupdated: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
                });
              }}>
              <Icon
                name="delete"
                size={25}
                color="black"
                style={{alignSelf: 'center'}}
              />
            </Pressable>
          </View>
        </View>
      );
    }
  };
  return (
    <SafeAreaView
      style={{flexDirection: 'column', flex: 1, alignContent: 'space-between'}}>
      <View style={{flex: 0.8}}>
        {amount > 0 ? (
          <View style={design.subFlat}>
            <FlatList data={mainData} renderItem={Disp} />
          </View>
        ) : (
          <View style={design.subFlat}>
            <Text
              style={{
                paddingLeft: 20,
                fontSize: 22,
              }}>
              No expenses found!
            </Text>
          </View>
        )}
      </View>
      <Icons
        name="ios-add-circle"
        color={'#323E77'}
        size={50}
        style={{alignSelf: 'flex-end', paddingRight: 30, paddingVertical: 10}}
        onPress={() => navigation.navigate('Contents')}
      />
      <View style={{flex: 0.3}}>
        {amount > 0 ? (
          <Text
            style={{
              paddingLeft: 20,
              fontSize: 22,
            }}>{`The total expenses are ₹${amount}`}</Text>
        ) : null}
        <View style={design.logoutPress}>
          <Pressable
            onPress={LogOut}
            style={{
              backgroundColor: '#323E77',
              borderRadius: 4,
            }}>
            <Text style={style.pressable}>Logout</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};
const design = StyleSheet.create({
  mainView: {
    paddingHorizontal: 10,
    paddingRight: '80%',
    paddingTop: 10,
  },
  back: {
    fontSize: 18,
    textAlign: 'center',
  },
  amount: {
    fontSize: 18,
    alignSelf: 'center',
  },
  flatView: {
    borderColor: '#151C26',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: 4,
    marginVertical: 10,
  },
  logoutPress: {
    paddingHorizontal: 20,
    paddingTop: '10%',
    width: '100%',
  },
  content: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  name: {
    fontSize: 20,
    alignSelf: 'center',
  },
  pressableRemove: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#323E77',
    marginVertical: 10,
  },
  subFlat: {
    paddingTop: 35,
    padding: 20,
  },
});
export default Details;
