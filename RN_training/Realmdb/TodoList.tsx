import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {todoContext, Todo} from './realm';
import {style} from './styles';

const {useQuery} = todoContext;

export const TodoList = () => {
  const todos = useQuery(Todo);
  return (
    <View style={style.container}>
      <Text>TodoList</Text>
      <FlatList
        data={todos}
        renderItem={({item}) => <Text>{item.description}</Text>}
      />
    </View>
  );
};
