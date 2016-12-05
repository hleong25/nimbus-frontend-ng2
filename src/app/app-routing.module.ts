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

import { HomeComponent } from './home/components/home.component';
import { DashboardComponent } from './dashboard/components/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },


  //{ path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  //{ path: 'dashboard', loadChildren: 'app/dashboard/search-box/search-box.module#SearchBoxModule' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}