import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ClockCalendarComponent } from './clock-calendar/clock-calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    ClockCalendarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
