import React, { FC } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { todoSelectors } from '../../core';
import { TodoList } from '@app/components';
import styles from './styles';

interface HomeScreenProps {}

const HomeScreen: FC<HomeScreenProps> = () => {
  const todoList = useSelector(todoSelectors.getTodoList);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-do List</Text>
      <TodoList list={todoList} />
      {console.log(todoList)}
    </View>
  );
};

export default HomeScreen;
