import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, takeUntil } from 'rxjs';
import { Todo } from '../../todo/todo.model';
import { Store } from '@ngrx/store';
import { selectAllTodos, selectTodos } from '../../state/todos/todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos$ = new BehaviorSubject<Todo[]>([]);

  formTodo = new FormGroup({
    content: new FormControl(''),
  });

  get todos(): Todo[] {
    return this.todos$.value;
  }

  set todos(value: Todo[]) {
    this.todos$.next(value);
  }

  constructor() {}

  ngOnInit() {
    this.loadTodo();
  }

  ngOnDestroy() {
    this.todos$.next(null);
    this.todos$.complete();
  }

  loadTodo() {
    // this.todos$.next([
    //   { id: new Date().getTime().toString(), content: 'Test' } as Todo,
    // ]);
    try {
      const todoListFromStorage = localStorage.getItem('todos');
      if (todoListFromStorage) {
        this.todos = JSON.parse(todoListFromStorage);
      }

      // this.store
      //   .select(selectAllTodos)
      //   .pipe()
      //   .subscribe((data) => {
      //     console.log('#Thanh', data);
      //   });
    } catch (error) {
      console.log('Error', error);
    }
  }

  addTodo() {
    if (this.formTodo.value && this.formTodo.value.content) {
      const newTodo = new Todo();
      newTodo.id = new Date().getTime().toString();
      newTodo.content = this.formTodo.value.content;
      this.todos$.next([...this.todos$.value, newTodo]);
      this.formTodo.reset();
      this.saveTodos();
    }
  }

  private saveTodos() {
    try {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    } catch (error) {
      console.log(error);
    }
  }
}
