import {
  TodoCreateAction,
  TodoUpdateAction,
  TodoDeleteAction,
  TodoActionType,
} from './../../types';

export function addTodo(key: number, title: string): TodoCreateAction {
  return {
    type: TodoActionType.Create,
    payload: { key, title },
  };
}

export function updateTodo(key: number, isDone: boolean): TodoUpdateAction {
  return {
    type: TodoActionType.Update,
    payload: { key, isDone },
  };
}

export function deleteTodo(key: number): TodoDeleteAction {
  return {
    type: TodoActionType.Delete,
    payload: { key },
  };
}

export default { addTodo, updateTodo, deleteTodo };
