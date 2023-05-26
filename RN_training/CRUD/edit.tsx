import React, {useContext, useEffect, useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import {design} from './nameEmail';
import {User} from '../../App';

const Edit = ({navigation, route}: any) => {
  const [editName, enfn] = useState<String>();
  const [editMail, emfn] = useState<String>();
  const {item} = route.params;
  const {data, setData} = useContext(User);
  useEffect(() => {
    enfn(item.name);
    emfn(item.mail);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'lightblue', padding: 10}}>
      <TextInput
        style={design.txtIp}
        placeholder="Enter name"
        onChangeText={i => enfn(i)}
        value={editName}
      />
      <TextInput
        style={design.txtIp}
        placeholder="Enter Mail"
        value={editMail}
        onChangeText={j => emfn(j)}
      />
      <View style={design.btn}>
        <Button
          title="Done"
          onPress={() => {
            var temp = data.indexOf(item);
            setData([
              ...data,
              ((data[temp].name = editName), (data[temp].mail = editMail)),
            ]);
            navigation.navigate('Operation');
          }}
        />
      </View>
    </View>
  );
};
export default Edit;
