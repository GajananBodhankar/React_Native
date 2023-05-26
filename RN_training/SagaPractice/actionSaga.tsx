import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from './reduxSagaSelector';
import {View, Button, Text, FlatList} from 'react-native';
import {fetchSuccess, fetchUsers} from './userSlice';
const Saga = () => {
  const {data, status} = useAppSelector(state => state.sagaReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(status);
    console.log(data);
  }, [status]);
  let content;
  //content = (
  // <View>
  //   <Text
  //     style={{
  //       fontSize: 22,
  //     }}>{`${first_name}\n${last_name}`}</Text>
  //   <Text style={{fontSize: 22}}>status -{status}</Text>
  //   <View style={{paddingHorizontal: 50}}>
  //     <Button title="Change" onPress={() => dispatch(fetchUsers())} />
  //   </View>
  // </View>

  return (
    <View style={{flex: 1, padding: 30}}>
      <Button title="Change" onPress={() => dispatch(fetchUsers())} />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View>
            <Text>{item.first_name}</Text>
          </View>
        )}
      />
    </View>
  );
};
export default Saga;
