/**
 * @author thanhlt90
 * @created April 7, 2022
 * In this module we only define the routing and config routes
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
