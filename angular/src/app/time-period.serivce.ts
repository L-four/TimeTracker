import {TimePeriod} from "./time-period";
import {ActivityService} from "./activity.service";
import {TagService} from "./tag.service";
import {Injectable} from "@angular/core";
import {of} from "rxjs/observable/of";
import {Observable} from "rxjs";
/**
 * Created by kyah on 3/26/17.
 */

@Injectable()
export class TimePeriodService {
    private time_period_memory: TimePeriod[] = [];
    constructor(
        public activityService: ActivityService,
        public tagService: TagService
    ) {
        let date = new Date().getTime();
        let time_periods = [
            {id: 1, start: date + 10, end: date + 12, a: 1, t: 1},
            {id: 2, start: date + 20, end: date + 22, a: 2, t: 2},
        ];
        let _this = this;
        this.time_period_memory = time_periods.map(function (time_period) {
            let Tp = new TimePeriod(time_period.start, time_period.end);
            Tp.id = time_period.id;
            Tp.tags = _this.tagService.getTagByID(time_period.t);
            Tp.activity = _this.activityService.getActivityByID(time_period.a);
            return Tp;
        })
    }
    getTimePeriods(): Observable<TimePeriod[]> {
        return of(this.time_period_memory);
    }
    saveTimePeriod(time_period: TimePeriod) {
        time_period.id = this.time_period_memory[this.time_period_memory.length - 1].id + 1;
        this.time_period_memory.push(time_period);
        return time_period;
    }
}