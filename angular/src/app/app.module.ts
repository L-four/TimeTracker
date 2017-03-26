import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TimePeriodFormComponent } from './time-period-form.component';
import {RecentTimePeriodsComponent} from "./recent-time-periods.component";

import { ActivityService } from './activity.service';
import {TagService} from "./tag.service";
import {TimePeriodService} from "./time-period.serivce"

@NgModule({
  declarations: [
    AppComponent,
    TimePeriodFormComponent,
    RecentTimePeriodsComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ActivityService, TagService, TimePeriodService],
  bootstrap: [AppComponent],
})
export class AppModule { }
