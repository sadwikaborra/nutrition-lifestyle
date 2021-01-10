import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

{ path: 'seniorProgram', loadChildren: () => import('./pages/senior-program/senior-program.module').then(m => m.SeniorProgramModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
