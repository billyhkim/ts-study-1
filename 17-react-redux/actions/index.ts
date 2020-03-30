import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};
