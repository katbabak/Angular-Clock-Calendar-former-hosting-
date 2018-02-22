import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-calendar',
  templateUrl: './clock-calendar.component.html',
  styleUrls: ['./clock-calendar.component.scss']
})
export class ClockCalendarComponent implements OnInit {
   currentTimeAndDate = Date.now();
   currentState = true; // clock
   clockCalendarFormat = 'HH:mm';
   clockFormat = 'HH:mm';
   dateFormat = 'dd.MM.yyyy';
   currentValue;
   constructor() { }

  ngOnInit() {
     this.makeIntervals();
  }
  leftClick() {
     if (this.currentState === true) {
       this.clockFormat = this.clockFormat === 'HH:mm' ? 'HH:mm:ss' : 'HH:mm';
     } else if (this.currentState === false) {
       this.dateFormat = this.dateFormat === 'dd.MM.yyyy' ? 'MM/dd/yy' : 'dd.MM.yyyy';
     }
    this.updateClockCalendarValue();
   }
   rightClick(e) {
     e.preventDefault();
     if (this.currentState === true) {
       this.currentState = false;
       this.dateFormat = 'dd.MM.yyyy';
     } else if (this.currentState === false) {
       this.currentState = true;
       this.clockFormat = 'HH:mm';
     }
      this.updateClockCalendarValue();
  }
  getClockCalendarValue() {
     if (this.currentState === true) {
       return this.clockFormat;
     } else if (this.currentState === false) {
       return this.dateFormat;
     }
  }
  updateClockCalendarValue() {
    this.currentTimeAndDate = Date.now();
    this.currentValue = this.getClockCalendarValue();
    if (this.currentValue !== this.clockCalendarFormat) {
      this.clockCalendarFormat = this.currentValue;
    }
  }
  makeIntervals() {
    this.updateClockCalendarValue();
    setInterval(() => this.updateClockCalendarValue(), 1000);
   }
 }

