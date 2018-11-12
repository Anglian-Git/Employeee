import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmpServiceService } from '../emp-service.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: any;
  empserviceservice: EmpServiceService;
  constructor(  empserviceservice: EmpServiceService,
              private route: ActivatedRoute) {
                this.empserviceservice = empserviceservice;
  }
  id: number;
  sub: any;
  event: any;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.empserviceservice.getEmployeeDetails(this.id.toString()).subscribe(empdetails => {
        this.event = empdetails;
        console.log(this.event);
        });
  };

}}
/*empserviceservice: EmpServiceService;
id: string;
  constructor( empserviceservice: EmpServiceService) {
    this.empserviceservice = empserviceservice;

   }

  ngOnInit() {
    this.empserviceservice.getEmployeeDetails(this.id).subscribe();
  }*/





