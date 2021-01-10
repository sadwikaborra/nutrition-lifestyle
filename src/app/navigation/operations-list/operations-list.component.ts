import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operations-list',
  templateUrl: './operations-list.component.html',
  styleUrls: ['./operations-list.component.scss']
})
export class OperationsListComponent implements OnInit {
  @Input() operationList;
  constructor(private router: Router) {
  
  }

  ngOnInit(): void {
  }

  navigate(route: string){
    this.router.navigateByUrl(route);
  }

}
