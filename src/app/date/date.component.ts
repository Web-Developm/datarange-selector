import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';

import { Moment, MonthWeekdayFn } from 'moment/moment';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {


  constructor(private fb: FormBuilder) {
  }

  today: Date = new Date();
  month: number = this.today.getMonth();
  year: number = this.today.getFullYear();
  date: number = this.today.getDate();
  hours: number = this.today.getHours();
  min: number = this.today.getMinutes();







  campaignOne = this.fb.group({
    start: [],
    end: []
  });



  range = this.fb.group({
    date: []
  });

  first: any = new Date(this.campaignOne.get('start')?.value);
  last: any = new Date(this.campaignOne.get('end')?.value);






  changeDate1(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(`${type}: ${event.value}`);
    this.first = event.value;
  }

  changeDate2(type:string, event1:MatDatepickerInputEvent<Date>){
    console.log(`${type}: ${event1.value}`)
    this.last=event1.value;
  }



change()
{
  if(this.campaignOne.controls['start'].value< this.campaignOne.controls['end'].value){

  }
}






















  ngOnInit(): void {
  }

}
