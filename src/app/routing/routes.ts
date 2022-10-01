import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'contact' },
  { path: '', component: HomeComponent },
  {
    path: 'contact',
    loadChildren: () =>
      import('../components/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
  {
    path: 'todo',
    loadChildren: () =>
      import('../components/todo/todo-list.module').then(
        (m) => m.TodoListModule
      ),
  },
];
