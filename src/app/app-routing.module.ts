import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

  /*
import {
  DashboardComponent,
  ContentTypeComponent,
  SearchBoxComponent
} from './dashboard/dashboard';

import {
  HomeModule,
} from './home/home.module';
  */

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: 'dashboard', component: DashboardComponent },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}