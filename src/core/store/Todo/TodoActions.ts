import { TodoCreateAction, TodoActionType } from './../../types';

export function addTodo(title: string): TodoCreateAction {
  return {
    type: TodoActionType.Create,
    payload: { title },
  };
}

export default { addTodo };
