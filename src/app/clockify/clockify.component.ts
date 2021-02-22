import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../model/Users';
import { ClockifyService } from '../services/clockify.service';

@Component({
  selector: 'app-clockify',
  templateUrl: './clockify.component.html',
  styleUrls: ['./clockify.component.css']
})
export class ClockifyComponent implements OnInit {

  public users: Users[] = []

  constructor(private router:Router, private clockifyService: ClockifyService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  goToHomePage():void {
    this.router.navigateByUrl('home');

  }
  goToUserPage():void {
    this.router.navigateByUrl('clockify');

  }
  goToReportPage():void {
    this.router.navigateByUrl('report');

  }
  


  getAllUsers(): void {
    this.clockifyService.getUsers().subscribe(
      (response: Users[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



}
