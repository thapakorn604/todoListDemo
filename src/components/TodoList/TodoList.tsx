import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { TodoState, todoActions } from '@app/core';
import styles from './styles';

interface TodoListProps {
  list: TodoState;
}

const TodoList: FC<TodoListProps> = ({ list }) => {
  const isTaskDone = (isDone: boolean | undefined) => {
    return isDone ? [styles.titleText, styles.strike] : styles.titleText;
  };

  const handleDonePress = (key: number) => {
    return dispatch(todoActions.updateTodo(key, true));
  };

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {list.map((todo, index) => (
        <View key={`${todo.key}${index}`} style={styles.rowDirection}>
          <Text style={isTaskDone(todo.isDone)}>{todo.title}</Text>
          {!todo.isDone && (
            <View style={styles.rowDirection}>
              <TouchableOpacity>
                <Text style={styles.removeText}> ✗ </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDonePress(todo.key)}>
                <Text style={styles.doneText}> ✓ </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default TodoList;
