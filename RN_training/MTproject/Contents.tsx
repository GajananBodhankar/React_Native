import React, {useContext, useEffect, useState} from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {User1} from '../../App';
import Icons from 'react-native-vector-icons/Ionicons';
import TravelIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Rupee from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-paper';
import {get, ref, set} from 'firebase/database';
import {db, auth} from '../FireBaseAuth/firebase.config';
import {launchImageLibrary} from 'react-native-image-picker';
import FirebaseUpload, {DeleteImage} from './Storage';
import Toast from 'react-native-root-toast';
const Contents = ({navigation}: any) => {
  const [data, setData] = useState('');
  const [food, setFood] = useState<Boolean>(false);
  const [movie, setMovie] = useState<Boolean>(false);
  const [travel, setTravel] = useState<Boolean>(false);
  const [hospital, setHospital] = useState<Boolean>(false);
  const [imageData, setImageData] = useState<any>([]);
  const [bool, setBool] = useState<Boolean | undefined>(true);
  const {mainData, setMainData} = useContext(User1);
  useEffect(() => {
    setImageData(imageData);
  }, [imageData]);
  return (
    <SafeAreaView style={style.safeView}>
      <View style={{flex: 0.8}}>
        <View style={{paddingRight: 15, paddingTop: 30}}>
          <Pressable
            onPress={() => navigation.navigate('Details')}
            style={{
              alignSelf: 'flex-end',
              width: 100,
              backgroundColor: '#323E77',
              borderRadius: 4,
              paddingVertical: 5,
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              Check list
            </Text>
          </Pressable>
        </View>
        <View style={style.txtInView}>
          <Rupee name="rupee" size={22} style={{alignSelf: 'center'}} />
          <TextInput
            placeholder="0"
            value={data}
            keyboardAppearance="dark"
            keyboardType="numeric"
            onChangeText={i => {
              setData(`${i}`);
            }}
            style={style.textInput}></TextInput>
        </View>
        <View style={{alignSelf: 'center', padding: 10}}>
          <Pressable
            style={[style.data, {backgroundColor: food ? '#323E77' : 'white'}]}
            onPress={() => {
              setFood(true);
              setTravel(false);
              setHospital(false);
              setMovie(false);
            }}>
            <Icons
              name="fast-food"
              size={35}
              color={food ? 'white' : 'black'}
            />
            <Text style={[style.name, {color: food ? 'white' : 'black'}]}>
              Food
            </Text>
          </Pressable>
        </View>
        <View style={{alignSelf: 'center', padding: 10}}>
          <Pressable
            style={[
              style.data,
              {backgroundColor: travel ? '#323E77' : 'white'},
            ]}
            onPress={() => {
              setFood(false);
              setTravel(true);
              setHospital(false);
              setMovie(false);
            }}>
            <TravelIcon
              name="wallet-travel"
              size={35}
              color={travel ? 'white' : 'black'}
            />
            <Text style={[style.name, {color: travel ? 'white' : 'black'}]}>
              Travel
            </Text>
          </Pressable>
        </View>
        <View style={{alignSelf: 'center', padding: 10}}>
          <Pressable
            style={[style.data, {backgroundColor: movie ? '#323E77' : 'white'}]}
            onPress={() => {
              setFood(false);
              setTravel(false);
              setMovie(true);
              setHospital(false);
            }}>
            <TravelIcon
              name="movie"
              size={35}
              color={movie ? 'white' : 'black'}
            />
            <Text style={[style.name, {color: movie ? 'white' : 'black'}]}>
              Movie
            </Text>
          </Pressable>
        </View>
        <View style={{alignSelf: 'center', padding: 10}}>
          <Pressable
            style={[
              style.data,
              {backgroundColor: hospital ? '#323E77' : 'white'},
            ]}
            onPress={() => {
              setFood(false);
              setTravel(false);
              setMovie(false);
              setHospital(true);
            }}>
            <TravelIcon
              name="hospital"
              size={35}
              color={hospital ? 'white' : 'black'}
            />
            <Text
              style={{
                alignSelf: 'center',
                paddingLeft: 10,
                color: hospital ? 'white' : 'black',
              }}>
              Hospital
            </Text>
          </Pressable>
        </View>

        <Pressable
          onPress={async () => {
            const response = await launchImageLibrary({
              mediaType: 'photo',
            });
            if (response.assets) {
              setImageData(response);
              Toast.show('Image selected', {
                duration: Toast.durations.SHORT,
                backgroundColor: '#323E77',
                textColor: 'white',
                position: Toast.positions.BOTTOM,
              });
            }
          }}
          style={{paddingTop: 30}}>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              paddingTop: 10,
            }}>
            <Icons name="ios-image-outline" color={'#323E77'} size={20} />
            <Text
              style={{
                color: '#323E77',
                alignSelf: 'center',
                paddingLeft: 10,
              }}>
              Select Image
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={{flex: 0.3, paddingHorizontal: 20}}>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Button
            icon={'delete-outline'}
            style={{paddingTop: 10}}
            onPress={async () => {
              if (imageData) {
                DeleteImage(imageData, mainData[4].EmpId);
              }
            }}>
            Clear Image
          </Button>
        </View>

        <Pressable
          onPress={async () => {
            if (imageData.assets) {
              setBool(false);
              const result = await FirebaseUpload(imageData, mainData[4].EmpId);
              setBool(result);
            } else {
              Toast.show('Please select image and options', {
                duration: Toast.durations.SHORT,
                backgroundColor: '#323E77',
                textColor: 'white',
                position: Toast.positions.BOTTOM,
              });
            }
            if (food && imageData.assets) {
              if (Number(data)) {
                set(ref(db, `${auth.currentUser?.uid}/`), {
                  Food: mainData[0].amount + Number(data),
                  Travel: mainData[1].amount,
                  Movie: mainData[2].amount,
                  Hospital: mainData[3].amount,
                  EmpId: mainData[4].EmpId,
                  lastupdated: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
                }).then(() => {
                  get(ref(db, `${auth.currentUser?.uid}`))
                    .then(data1 => {
                      if (data1.exists()) {
                        setMainData([
                          ...mainData,
                          (mainData[0].amount = data1.val().Food),
                        ]);
                        setData('');
                        setFood(false);
                        navigation.navigate('Details');
                      }
                    })
                    .catch(e => console.log(e));
                });
              } else {
                Alert.alert('Enter valid amount');
              }
            }
            if (travel && imageData.assets) {
              if (Number(data)) {
                set(ref(db, `${auth.currentUser?.uid}/`), {
                  Food: mainData[0].amount,
                  Travel: mainData[1].amount + Number(data),
                  Movie: mainData[2].amount,
                  Hospital: mainData[3].amount,
                  EmpId: mainData[4].EmpId,
                  lastupdated: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
                }).then(() => {
                  get(ref(db, `${auth.currentUser?.uid}`))
                    .then(data1 => {
                      if (data1.exists()) {
                        setMainData([
                          ...mainData,
                          (mainData[1].amount = data1.val().Travel),
                        ]);
                        setData('');
                        setTravel(false);
                        navigation.navigate('Details');
                      }
                    })
                    .catch(e => console.log(e));
                });
              } else {
                Alert.alert('Enter valid amount');
              }
            }
            if (movie && imageData.assets) {
              if (Number(data)) {
                set(ref(db, `${auth.currentUser?.uid}/`), {
                  Food: mainData[0].amount,
                  Travel: mainData[1].amount,
                  Movie: mainData[2].amount + Number(data),
                  Hospital: mainData[3].amount,
                  EmpId: mainData[4].EmpId,
                  lastupdated: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
                }).then(() => {
                  get(ref(db, `${auth.currentUser?.uid}`))
                    .then(data1 => {
                      if (data1.exists()) {
                        setMainData([
                          ...mainData,
                          (mainData[2].amount = data1.val().Movie),
                        ]);
                        setData('');
                        setMovie(false);
                        navigation.navigate('Details');
                      }
                    })
                    .catch(e => console.log(e));
                });
              } else {
                Alert.alert('Enter valid amount');
              }
            }
            if (hospital && imageData.assets) {
              if (Number(data)) {
                set(ref(db, `${auth.currentUser?.uid}/`), {
                  Food: mainData[0].amount,
                  Travel: mainData[1].amount,
                  Movie: mainData[2].amount,
                  Hospital: mainData[3].amount + Number(data),
                  EmpId: mainData[4].EmpId,
                  lastupdated: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
                }).then(() => {
                  get(ref(db, `${auth.currentUser?.uid}`))
                    .then(data1 => {
                      if (data1.exists()) {
                        setMainData([
                          ...mainData,
                          (mainData[3].amount = data1.val().Hospital),
                        ]);
                        setData('');
                        setHospital(false);
                        navigation.navigate('Details');
                      }
                    })
                    .catch(e => console.log(e));
                });
              } else {
                Alert.alert('Enter valid amount');
              }
            }
            if (!travel && !movie && !food && !hospital && !imageData.assets) {
              Toast.show('Please select image and options', {
                duration: Toast.durations.SHORT,
                backgroundColor: '#323E77',
                textColor: 'white',
                position: Toast.positions.BOTTOM,
              });
            }
          }}
          style={{
            marginTop: 15,
            backgroundColor: '#323E77',
            borderRadius: 4,
          }}>
          {!bool ? (
            <ActivityIndicator style={style.pressable} color={'white'} />
          ) : (
            <Text style={style.pressable}>Add</Text>
          )}
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export const style = StyleSheet.create({
  headerView: {backgroundColor: '#151C26', padding: 15},
  headerText: {textAlign: 'center', color: 'white', fontSize: 22},
  textInput: {
    alignSelf: 'center',
    paddingVertical: 20,
    paddingLeft: 10,
    marginVertical: 20,
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
  },
  pressable: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 22,
  },
  data: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    padding: 10,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  safeView: {flex: 1, backgroundColor: 'white', alignContent: 'space-between'},
  txtInView: {flexDirection: 'row', alignSelf: 'center', paddingTop: 15},
  name: {paddingTop: 10, paddingLeft: 20, fontSize: 14},
});
export default Contents;
