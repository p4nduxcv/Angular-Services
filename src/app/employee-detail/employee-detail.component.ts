import { Component, OnInit } from '@angular/core';
import { EmployessService } from '../employess.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit {
  employees = [];
  errMsg;
  constructor(private _employeeService: EmployessService) {}

  ngOnInit(): void {
    this._employeeService
      .getEmployees()
      .subscribe(data => this.employees = data ,error => this.errMsg = error);
  }
}
