import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingComponent } from './accounting/accounting.component';
import { HomeComponent } from './home/home.component';
import { ManageSeniorsComponent } from './manage-seniors/manage-seniors.component';


const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
     {
      path: 'manageSeniors', component: ManageSeniorsComponent
     },
     {
      path: 'accounting', component: AccountingComponent
     }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeniorProgramRoutingModule { }
