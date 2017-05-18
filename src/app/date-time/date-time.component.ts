import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit {
  dateTime: number = Date.now();
  constructor() { }

  ngOnInit() {
    this.dateTime = Date.now();
  }

}
