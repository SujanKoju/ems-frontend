import {Component, Inject, OnInit} from '@angular/core';
import {Employee, HttpClientService} from '../service/http-client.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];

  constructor(@Inject(HttpClientService)
              private httpClientService: HttpClientService) {
  }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
      response => this.handleSuccessResponse(response),
    );
  }

  deleteEmployee(employee: Employee): void {
    this.httpClientService.deleteEmployee(employee).subscribe(data => {
      this.employees = this.employees.filter(e => e !== employee);
    });
  }


  handleSuccessResponse(response) {
    this.employees = response;
  }

}
