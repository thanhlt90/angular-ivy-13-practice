import { createReducer, on } from '@ngrx/store';
import { Todo } from '../../todo/todo.model';
import { addTodo, loadTodo, saveTodo } from './todo.actions';

export interface TodoState {
  todos: Todo[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

const initialState: TodoState = {
  todos: [],
  error: null,
  status: 'pending',
};

export const todoReducers = createReducer(
  initialState,
  on(addTodo, (state, { content }) => ({
    ...state,
    todos: [...state.todos, { id: Date.now().toString(), content: content }],
  }))
);
