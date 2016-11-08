import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../shared/services/employee.service';
import { Employee} from '../shared/models/employee';
import { ErrorService} from '../shared/services/error.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _employeeService: EmployeeService, private _errorService:ErrorService) { }
  employees:Employee[]=[];
  ngOnInit() {
    this._employeeService.getEmployees().subscribe(
      employees=>{
        console.log(employees);
        this.employees = employees;
      },
      error=>console.error(error),
      // error=>this._errorService.handleError(error),
      ()=>console.log("completed")
    )
  }

}
