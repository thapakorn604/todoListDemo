import TodoActionType from './TodoActionType';
import { Todo } from './TodoState';

export interface TodoCreateAction {
  type: TodoActionType.Create;
  payload: Todo;
}

export type TodoAction = TodoCreateAction;
