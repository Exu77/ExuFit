import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'exu-timer',
  templateUrl: './exu-timer.component.html',
  styleUrls: ['./exu-timer.component.css']
})
export class ExuTimerComponent implements OnInit {
  private totalElapsedMs: number = 0;
  private elapsedMs: number = 0;
  private startTime: Date;
  private timerObservable: Subscription;


  constructor() {
    console.log("Creating the directive's controller");
  }

  ngOnInit() {
  }

  start() {
    if (!this.timerObservable) {
      this.startTime = new Date();
      this.timerObservable = Observable.interval(100).subscribe((x) => {
            this.elapsedMs = new Date().getTime() - this.startTime.getTime();
      });
    }
  }

  stop() {
    if (this.timerObservable) {
      this.timerObservable.unsubscribe();
    }
  };

  reset() {
    this.startTime = new Date();
    this.totalElapsedMs = this.elapsedMs = 0;
  };

  getTime() {
    return new Date();
  };

  getElapsedMs() {
      return Math.round((this.totalElapsedMs + this.elapsedMs) / 100) / 10;
  };

}
