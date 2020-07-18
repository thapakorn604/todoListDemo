import React, { FC, useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { todoSelectors, todoActions } from '@app/core';
import { TodoList } from '@app/components';
import styles from './styles';

interface HomeScreenProps {}

const HomeScreen: FC<HomeScreenProps> = () => {
  const handleAddTaskPress = (task: string) => {
    return dispatch(todoActions.addTodo(task));
  };

  const [task, onTaskChange] = useState('');
  const todoList = useSelector(todoSelectors.getTodoList);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-do List</Text>
      <TodoList list={todoList} />
      <Text style={styles.header}>Add a task</Text>
      <TextInput
        value={task}
        onChangeText={(newTask) => onTaskChange(newTask)}
        style={styles.textInput}
      />
      <Button title="ADD" onPress={() => handleAddTaskPress(task)} />
    </View>
  );
};

export default HomeScreen;
