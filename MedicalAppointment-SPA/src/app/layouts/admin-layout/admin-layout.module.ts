import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { DoctorComponent } from '../../pages/doctor/doctor.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentComponent } from 'src/app/pages/department/department.component';
import { BloodGroupComponent } from 'src/app/pages/bloodGroup/bloodGroup.component';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ErrorInterceptorProvider } from 'src/app/_services/error.interceptor';
import { PatientComponent } from 'src/app/pages/patient/patient.component';
import { AppointmentComponent } from 'src/app/pages/appointment/appointment.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    DoctorComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    DepartmentComponent,
    BloodGroupComponent,
    PatientComponent,
    AppointmentComponent
  ],
  providers:[
    AlertifyService,
    ErrorInterceptorProvider,
  ]
})

export class AdminLayoutModule {}
