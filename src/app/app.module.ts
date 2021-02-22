import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeService } from './services/employee.service';
import { ClockifyComponent } from './clockify/clockify.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { ClockifyReportComponent } from './clockify-report/clockify-report.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'home', component: EmployeeComponent },
  { path: 'clockify', component: ClockifyComponent},
  { path: 'report', component: ClockifyReportComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ClockifyComponent,
    EmployeeComponent,
    ClockifyReportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
