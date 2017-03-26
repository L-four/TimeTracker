import { Injectable } from '@angular/core';
import { Activity } from './activity';
import {Observable} from "rxjs";
import {of} from "rxjs/observable/of";

@Injectable()
export class ActivityService {
    private activities_memory: Activity[] = [];
    constructor() {
        console.log('adasd');
        let activities = [
            {id: 1, name: 'programing'},
            {id: 2, name: 'emails'},
        ];
        this.activities_memory = activities.map(function (activity) {
            let act = new Activity(activity.name);
            act.id = activity.id;
            return act;
        });
    }
    getActivities(): Observable<Activity[]> {
        return of(this.activities_memory);
    }
    saveActivity(activity: Activity) {
        activity.id = this.activities_memory[this.activities_memory.length - 1].id + 1;
        this.activities_memory.push(activity);
        return activity;
    }
    getActivityByID(id: number) {
        let activities = this.activities_memory.filter(function (tag) {
            return tag.id === id;
        });
        if (activities) {
            return activities.pop();
        }
        return null;
    }
}
