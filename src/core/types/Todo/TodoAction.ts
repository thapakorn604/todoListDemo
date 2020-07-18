import TodoActionType from './TodoActionType';

export interface TodoCreateAction {
  type: TodoActionType.Create;
  payload: { title: string };
}

export interface TodoUpdateAction {
  type: TodoActionType.Update;
  payload: { key: number; isDone: boolean };
}

export interface TodoDeleteAction {
  type: TodoActionType.Delete;
  payload: { key: number };
}

export type TodoAction = TodoCreateAction | TodoUpdateAction | TodoDeleteAction;
