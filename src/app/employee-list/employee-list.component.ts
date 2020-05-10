import { Component, OnInit } from '@angular/core';
import { EmployessService } from '../employess.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees = [];
  errMsg;
  constructor(private _employeeService: EmployessService) {}

  ngOnInit(): void {
    this._employeeService
      .getEmployees()
      .subscribe((data) => (this.employees = data) ,error => this.errMsg = error);
  }
}
