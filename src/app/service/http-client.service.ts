import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


export class Employee {
  constructor(
    public empId: string,
    public name: string,
    public designation: string,
    public salary: string,
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getEmployees() {
    console.log('----- CALLING GET EMPLOYEE LIST ------ ');
    return this.httpClient.get<Employee[]>('http://localhost:8888/employee/list');
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>('http://localhost:8888/employee', employee);
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>('http://localhost:8888/employee/' + employee.empId);
  }
}
