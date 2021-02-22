import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees: Employee[] = [];
  public editEmployee? : Employee;
  public deleteEmployee?: Employee;


  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(){
    this.getEmployees();
  }

  public getEmployees(): void{
    this.employeeService.getEmployees().subscribe(
        (response: Employee[])  => {
          this.employees = response;
          console.log(this.employees);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      
    )
  }


  public addModal(){
    const CONTAINER = document.getElementById('main-container');
    const BUTTON = document.createElement('button');
    BUTTON.type = 'button'; //change the default type os SUBMIT
    BUTTON.style.display = 'none';
    BUTTON.setAttribute('data-toggle', 'modal');
    BUTTON.setAttribute('data-target', '#addEmployeeModal');
    CONTAINER?.appendChild(BUTTON);
    BUTTON.click();
  }

  public searchEmployees(key: String):void {
    console.log(key);
    const RESULTS: Employee[] = [];
    for(const employee of this.employees){
      if(employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.phoneNumber.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) 

      {
        RESULTS.push(employee);
      }
    }

    this.employees = RESULTS;
    if(RESULTS.length === 0 || !key) {
      this.getEmployees();
    }
  }

  
  public onOpenModal(employee: Employee, mode:String): void {
    const CONTAINER = document.getElementById('main-container');
    const BUTTON = document.createElement('button');
    BUTTON.type = 'button'; //change the default type os SUBMIT
    BUTTON.style.display = 'none';
    BUTTON.setAttribute('data-toggle', 'modal');
    if(mode === 'edit'){
      BUTTON.setAttribute('data-target', '#updateEmployeeModal');
      this.editEmployee = employee;
    }
    if(mode === 'delete'){
      this.deleteEmployee = employee;
      BUTTON.setAttribute('data-target', '#deleteEmployeeModal');
    }

    CONTAINER?.appendChild(BUTTON);
    BUTTON.click();
  }


  public onAddEmployee(addForm : NgForm): void{
    document.getElementById('add-employee-form')?.click();
    this.employeeService.addEmployees(addForm.value).subscribe(
      (response : Employee) => {
        console.log(response);
        this.getEmployees();
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }


  public onUpdateEmployee(employee : Employee): void{
    document.getElementById('add-employee-form')?.click();
    this.employeeService.updateEmployees(employee).subscribe(
      (response : Employee) => {
        console.log(response);
        this.getEmployees();
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onDeleteEmployee(employee? : Employee): void{
    document.getElementById('hide-delete-modal')?.click();
    this.employeeService.deleteEmployee(employee?.id).subscribe(
      (response : void) => {
        console.log(response);
        this.getEmployees();
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  goToClockifyPage(pageName: String): void {
    this.router.navigateByUrl("/clockify");
  
  }
}
