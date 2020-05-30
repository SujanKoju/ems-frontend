import {Component, Inject, OnInit} from '@angular/core';
import {HttpClientService} from '../service/http-client.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: string[];

  constructor(@Inject(HttpClientService)
              private httpClientService: HttpClientService) {
  }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
      response => this.handleSuccessResponse(response),
    );
  }

  handleSuccessResponse(response) {
    this.employees = response;
  }

}
