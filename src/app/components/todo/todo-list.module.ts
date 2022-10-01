import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TodoListComponent } from './todo-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { todoReducers } from '../../state/todos/todo.reducers';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
    children: [],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    // StoreModule.forRoot(todoReducers),
  ],
  declarations: [TodoListComponent],
  providers: [],
})
export class TodoListModule {}
