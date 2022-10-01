/**
 * @author thanhlt90
 * @created April 7, 2022
 * In this module we will define all providers that be used in whole application, such as:
 * Authentication service, Guard
 */
import { NgModule } from '@angular/core';
import { SharedService } from '../services/shared.service';

@NgModule({
  providers: [SharedService], // AuthService
})
export class CoreModule {}
