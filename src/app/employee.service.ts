import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = "http://localhost:8080";
  
  constructor(private http: HttpClient) { }
  
  public getEmployees() :Observable<Employee[]>
  {
    return this.http.get<Employee[]>('http://localhost:8080/employee/all');
  }

  public addEmployee(employee: Employee) :Observable<Employee>
  {
    return this.http.post<Employee>('http://localhost:8080/employee/add', employee);
  }

  public updateEmployee(employee: Employee) :Observable<Employee>
  {
    return this.http.put<Employee>('http://localhost:8080/employee/update',employee);
  }

  public deleteEmployee(employeeId: number) :Observable<void>
  {  const url = `http://localhost:8080/employee/delete/${employeeId}`;
  return this.http.delete<void>(url);
   
  }
}
