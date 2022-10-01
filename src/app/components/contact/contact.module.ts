import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactOneComponent } from './contact-one.component';
import { ContactTwoComponent } from './contact-two.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/contact/contact-one',
      },
      {
        path: 'contact-one',
        component: ContactOneComponent,
      },
      {
        path: 'contact-two',
        component: ContactTwoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [ContactComponent, ContactOneComponent, ContactTwoComponent],
  providers: [],
})
export class ContactModule {}
