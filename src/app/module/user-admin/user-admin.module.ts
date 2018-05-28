import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserAdminRoutingModule } from './user-admin-routing.module';
import { AdminUserComponent, EditUserComponent, ListUserComponent } from './component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    NgxDatatableModule,
    NgSelectModule,
    UserAdminRoutingModule
  ],
  declarations: [
    AdminUserComponent,
    EditUserComponent,
    ListUserComponent
  ]
})
export class UserAdminModule { }
