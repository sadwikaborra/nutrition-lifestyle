import { Component, OnInit } from '@angular/core';
import { SeniorProgram } from 'src/app/interface/senior-program';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {




    seniorProgram: SeniorProgram;

    operationList = [

      {
        name: 'manageSeniors',
        route: 'seniorProgram/manageSeniors'
      },
      {
        name: 'accounting',
        route: 'seniorProgram/accounting'
      }
    ]
  constructor() {
    
   }

  ngOnInit(): void {

  }

}
