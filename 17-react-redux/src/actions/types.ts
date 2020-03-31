import { FetchTodosAction, DeleteTodoAction } from './index';

export enum ActionTypes {
  // ts by default assigns numbers in order
  fetchTodos,
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
