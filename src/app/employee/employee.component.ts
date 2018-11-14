import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router, RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  eform: FormGroup;

  errorText: string;
   constructor() { }



  ngOnInit() {
    this.eform = new FormGroup({
     id : new FormControl('', Validators.required)
    });
  }

}
