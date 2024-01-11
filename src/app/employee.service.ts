import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:string="http://localhost:4200/../assets/employee.json"
  constructor(private http:HttpClient) { }
  getEmployee()
  {
    return this.http.get(this.url);
  }
}
