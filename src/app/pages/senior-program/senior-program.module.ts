import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeniorProgramRoutingModule } from './senior-program-routing.module';
import { HomeComponent } from './home/home.component';
import { ManageSeniorsComponent } from './manage-seniors/manage-seniors.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OperationsListComponent } from '../../navigation/operations-list/operations-list.component';
import { AccountingComponent } from './accounting/accounting.component';

@NgModule({
  declarations: [HomeComponent, ManageSeniorsComponent, OperationsListComponent, AccountingComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SeniorProgramRoutingModule
  ]
})
export class SeniorProgramModule { }