export interface Todo {
  key: number;
  title: string;
  isDone: boolean;
}

interface TodoState extends Array<Todo> {}

export default TodoState;
