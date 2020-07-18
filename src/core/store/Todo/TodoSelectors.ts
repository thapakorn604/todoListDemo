import { TodoModuleState } from '../../types';

export function getTodoList(state: TodoModuleState) {
  return state.todo;
}

export default { getTodoList };
