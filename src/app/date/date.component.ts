import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatCalendar, MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { CalendarService } from '../calendar.service';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import * as _moment from 'moment';

import { default as _rollupMoment, Moment } from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },

  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MMM YYYY',
    dateAllLabel: 'LL',
    monthYearAllLabel: 'MMM YYYY'
  },
};

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class DateComponent implements OnInit {


  constructor(private fb: FormBuilder, private ca: CalendarService) {
  }

  selectedDate = moment();

  @ViewChild('calendar', { static: true })
  calendar!: MatCalendar<moment.Moment>;


  today: Date = new Date();
  month: any = this.today.getMonth();
  year: number = this.today.getFullYear();
  date: any = this.today.getDate();
  hours: number = this.today.getHours();
  min: any = this.today.getMinutes();
  week1: any = this.today.getDay();

  number = this.ca.January;






  campaignOne = this.fb.group({
    start: [],
    end: []
  });



  range = this.fb.group({
    date: []
  });

  first: any = new Date(this.campaignOne.get('start')?.value);
  last: any = new Date(this.campaignOne.get('end')?.value);








  changeDate1 = (type: string, event: MatDatepickerInputEvent<Date>): any => {
    console.log(`${type}: ${event.value}`);
    this.first = event.value;
  }

  changeDate2 = (type: string, event1: MatDatepickerInputEvent<Date>): any => {
    console.log(`${type}: ${event1.value}`)
    this.last = event1.value;
  }

  display = (): void => {
    console.log(this.range.value);
  }










  ngOnInit(): void {
    console.log(this.range.value);

    switch (this.month) {
      case 0:
        this.month = 'JAN';
        break;
      case 1:
        this.month = 'FEB';
        break;
      case 2:
        this.month = 'MAR';
        break;
      case 3:
        this.month = 'APR';
        break;
      case 4:
        this.month = 'MAY';
        break;
      case 5:
        this.month = 'JUN';
        break;

      case 6:
        this.month = 'JUL';
        break;

      case 7:
        this.month = 'AUG';
        break;

      case 8:
        this.month = 'SEPT';
        break;

      case 9:
        this.month = 'OCT';
        break;

      case 10:
        this.month = 'NOV';
        break;

      case 11:
        this.month = 'DEC';
        break;
    }

    switch (this.week1) {
      case 0:
        this.week1 = 'SUN'
        break;

      case 1:
        this.week1 = 'MON';
        break;

      case 2:
        this.week1 = 'TUE';
        break;

      case 3:
        this.week1 = 'WED';
        break;
      case 4:
        this.week1 = 'THU';
        break;

      case 5:
        this.week1 = 'FRI';
        break;

      case 6:
        this.week1 = 'SAT';
        break;
    }

    if (this.date < 10) {
      this.date = "0" + this.date;
    }

    else {
      this.date = this.date;
    }

    if (this.min < 10) {
      this.min = "0" + this.min;
    }

    else {
      this.min = this.min;
    }
  }

}
