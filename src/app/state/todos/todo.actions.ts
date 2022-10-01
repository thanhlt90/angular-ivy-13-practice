import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[Todo] Add todo',
  props<{ content: string }>()
);
export const saveTodo = createAction('[Todo] Save todo');
export const loadTodo = createAction('[Todo] Load todo');
export const loadTodoSuccess = createAction('[Todo] Load todo success');
export const loadTodoFailed = createAction('[Todo] Load todo failed');
export const removeTodo = createAction(
  '[Todo] Remove todo',
  props<{ id: string }>()
);
