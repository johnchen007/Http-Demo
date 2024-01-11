import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-http-demo',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './http-demo.component.html',
  styleUrl: './http-demo.component.css'
})
export class HttpDemoComponent implements OnInit {
  employee:any;

  constructor(private empService:EmployeeService){}
  
  ngOnInit()
  {
    this.empService.getEmployee().subscribe((data:any)=>{
    console.log(data);
    this.employee=data;})
  
  }

}
