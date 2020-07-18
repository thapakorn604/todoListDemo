import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TodoState, Todo } from '@app/core';

interface TodoListProps {
  list: TodoState;
}

const TodoList: FC<TodoListProps> = ({ list }) => {
  return (
    <View>
      {list.map((todo) => (
        <Text key={todo.key}>{todo.title}</Text>
      ))}
    </View>
  );
};

export default TodoList;
