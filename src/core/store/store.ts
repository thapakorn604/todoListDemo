import { createStore, IModuleStore } from 'redux-dynamic-modules';
import { getThunkExtension } from 'redux-dynamic-modules-thunk';
import { TodoModuleState } from '../types';
import { todoModule, todoSelectors } from './Todo';

export interface RootState extends TodoModuleState {}

const extensions = [getThunkExtension()];

export const store: IModuleStore<RootState> = createStore(
  {
    initialState: {},
    extensions,
  },
  todoModule,
);

export { todoModule, todoSelectors };
export default store;
