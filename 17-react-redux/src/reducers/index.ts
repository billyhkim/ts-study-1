import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

// store interface
export interface StoreState {
  todos: Todo[]
}

// ts will now validate reducer and state
export const reducers = combineReducers<StoreState>({
  todos: todosReducer
});
