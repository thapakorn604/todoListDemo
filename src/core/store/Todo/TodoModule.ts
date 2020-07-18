import { AnyAction, Reducer } from 'redux';
import { IModule } from 'redux-dynamic-modules';
import {
  TodoAction,
  TodoActionType,
  TodoModuleState,
  TodoState,
} from './../../types';

export const initialState: TodoState = [
  { key: 0, title: 'Practice piano', isDone: false },
  { key: 1, title: 'Listen to TedTalk', isDone: false },
  { key: 2, title: 'Continue reading Homosepiens', isDone: false },
];

const todoReducer: Reducer<TodoState, TodoAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case TodoActionType.Create:
      return [
        ...state,
        {
          key: Math.floor(9999 * Math.random()),
          title: action.payload.title,
          isDone: false,
        },
      ];
    case TodoActionType.Update:
      return state.map((todo) =>
        todo.key === action.payload.key
          ? { ...todo, isDone: action.payload.isDone }
          : todo,
      );
    default:
      return state;
  }
};

const todoModule: IModule<TodoModuleState> = {
  id: 'todoModule',
  reducerMap: {
    todo: todoReducer as Reducer<TodoState, AnyAction>,
  },
  initialActions: [],
};

export default todoModule;
