import {Component} from "@angular/core";
import {TimePeriodService} from './time-period.serivce'
import {TimePeriod} from "./time-period";
import {Observable} from "rxjs";

@Component({
    selector: 'recent-time-periods',
    templateUrl: './recent-time-periods.component.html'
})
export class RecentTimePeriodsComponent {
    public timePeriods: Observable<TimePeriod[]>;
    constructor(
       public timePeriodService: TimePeriodService
    ) {}
    ngOnInit() {
        this.timePeriods = this.timePeriodService.getTimePeriods();
    }
}