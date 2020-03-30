import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');

    dispatch({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};
