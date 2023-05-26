import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, Button, FlatList, ActivityIndicator } from 'react-native';
import { fetchData } from './action';
const Flat = () => {
  const { user, status, error } = useSelector(state => state.SliceReducer);
  const dispatch = useDispatch();
  let content;
  useEffect(() => {
    if (status == 'idle') {
      dispatch(fetchData());
    }
  }, [status, dispatch]);
  if (status == 'pending') {
    content = <ActivityIndicator />;
  } else if (status == 'fulfilled') {
    content = (
      <FlatList
        data={user}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: 'lightblue', marginBottom: 2 }}>
            <Text style={{ fontSize: 22, textAlign: 'center' }}>
              {item.first_name}
            </Text>
          </View>
        )}
      />
    );
  }
  return <View style={{ flex: 1 }}>{content}</View>;
};
export default Flat;
