import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SummaryReport } from '../model/SummaryReport';
import { ClockifyService } from '../services/clockify.service';

@Component({
  selector: 'app-clockify-report',
  templateUrl: './clockify-report.component.html',
  styleUrls: ['./clockify-report.component.css']
})
export class ClockifyReportComponent implements OnInit {

  public summaryReports: SummaryReport[] = []
  public totalDuration!: number;

  constructor(private router: Router, private clockifyService: ClockifyService) { 
    this.totalDuration = 0;

  }

  ngOnInit(): void {
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

  generateReport(ngForm: NgForm):void {
    this.clockifyService.generateReport(ngForm.value).subscribe(
      (responses: SummaryReport[]) => {
        this.summaryReports = responses;
        this.computeTotalHours();
      
       
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  computeTotalHours():void {
      this.summaryReports.forEach(
        (element: any) => {
           this.totalDuration += element.duration;
        }
        );
      }
        
}
