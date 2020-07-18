import React, { FC, useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { todoSelectors, todoActions } from '@app/core';
import { TodoList } from '@app/components';
import styles from './styles';

interface HomeScreenProps {}

const HomeScreen: FC<HomeScreenProps> = () => {
  const handleAddTaskPress = (task: string) => {
    const key = Math.floor(9999 * Math.random());
    return dispatch(todoActions.addTodo(key, task));
  };

  const [task, onTaskChange] = useState('');
  const todoList = useSelector(todoSelectors.getTodoList);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>To-do List</Text>
        <TodoList list={todoList} />
      </View>
      <View>
        <Text style={styles.header}>Add a task</Text>
        <TextInput
          value={task}
          onChangeText={(newTask) => onTaskChange(newTask)}
          style={styles.textInput}
        />
        <Button title="ADD" onPress={() => handleAddTaskPress(task)} />
      </View>
    </View>
  );
};

export default HomeScreen;
