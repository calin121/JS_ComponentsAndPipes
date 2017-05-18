import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  today: number = Date.now();
  constructor() { }

  ngOnInit() {
  this.today = Date.now();    
  }
}
