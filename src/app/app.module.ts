import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { HomeChildComponent } from './components/child.component';
import { RegisterFormComponent } from './components/dynamic-form/register-form.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HomeChildComponent,
    RegisterFormComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
