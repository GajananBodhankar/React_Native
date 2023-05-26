import React, {createContext, useContext, useState} from 'react';
import {FlatList, Text} from 'react-native';
import {View, TextInput, StyleSheet, Button} from 'react-native';
import {User} from '../../App';

const Operation = ({navigation}: any) => {
  const {data, setData} = useContext(User);
  const [name, setName] = useState<String>('');
  const [mail, setMail] = useState<String>('');

  const Disp = ({item, index}: any) => {
    let content;
    if (item.name) {
      content = (
        <View>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <Text style={{fontSize: 22, color: 'black', marginLeft: 40}}>
              {index + 1}
            </Text>
            <Text
              style={{
                fontSize: 22,
                color: 'black',
                marginLeft: 30,
                marginRight: 10,
                width: 100,
                textAlign: 'center',
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 22,
                color: 'black',
                width: 100,
                textAlign: 'center',
                marginRight: 10,
              }}>
              {item.mail}
            </Text>
            <View style={{marginVertical: 10}}>
              <Button
                title="Delete"
                color="red"
                onPress={() => {
                  var arr = data.filter((i, j) => j != data.indexOf(item));
                  setData(arr);
                }}
              />
              <Button
                title="Edit"
                onPress={() => {
                  navigation.navigate('Edit', {item});
                }}
              />
            </View>
          </View>
        </View>
      );
    }
    return content;
  };
  return (
    <View style={design.mainView}>
      <TextInput
        style={design.txtIp}
        placeholder="Enter Name"
        onChangeText={i => {
          if (i.length > 0) {
            setName(i);
          }
        }}
      />
      <TextInput
        style={design.txtIp}
        placeholder="Enter Mail"
        onChangeText={i => {
          if (i.length > 0 && i.includes('@')) {
            setMail(i);
          }
        }}
      />
      <View style={design.btn}>
        <Button
          title="Submit"
          onPress={() => {
            if (name && mail) {
              setData([...data, {name: name, mail: mail}]);
            }
          }}
        />
      </View>
      <View style={{flexDirection: 'row', padding: 10}}>
        <Text style={{fontSize: 18, marginHorizontal: 25, color: 'black'}}>
          ID
        </Text>
        <Text style={{fontSize: 18, marginHorizontal: 25, color: 'black'}}>
          Name
        </Text>
        <Text style={{fontSize: 18, marginHorizontal: 25, color: 'black'}}>
          Email
        </Text>
        <Text style={{fontSize: 18, marginHorizontal: 25, color: 'black'}}>
          Action
        </Text>
      </View>
      <FlatList data={data} renderItem={Disp} />
    </View>
  );
};
export const design = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'khaki',
    padding: 10,
  },
  txtIp: {
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 20,
    fontSize: 18,
    color: 'black',
  },
  btn: {
    width: 100,
    alignSelf: 'center',
  },
});
export default Operation;
