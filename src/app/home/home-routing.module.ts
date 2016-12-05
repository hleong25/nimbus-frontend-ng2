import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { HomeComponent } from './components/home.component';

const routes : Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            // empty
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule {}
