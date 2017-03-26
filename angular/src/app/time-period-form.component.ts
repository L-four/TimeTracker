/**
 * Created by kyah on 3/24/17.
 */
import { Component } from '@angular/core';


import {ActivityService} from "./activity.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TimePeriodFormInterface} from "./timeperiod.interface";
import {Observable} from "rxjs";
import {TagService} from "./tag.service";
import {Activity} from "./activity";
import {TimePeriod} from "./time-period";
import {Tag} from "./tag";
import {TimePeriodService} from "./time-period.serivce";
@Component({
    selector: 'time-period-form',
    templateUrl: './time-period-form.component.html'
})
export class TimePeriodFormComponent {
    public myForm: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes
    public filteredActivities: Observable<string[]>;
    public activities: string[] = [];
    public activitiesObs: Observable<Activity[]>;
    public filteredTags: Observable<string[]>;
    public tags: string[] = [];

    constructor(
        private activityService : ActivityService,
        private tagService: TagService,
        private timePeriodService: TimePeriodService,
        private _fb: FormBuilder
    ){}

    ngOnInit() {
        let self = this;
        this.activitiesObs = this.activityService.getActivities();
        this.activitiesObs.subscribe(
            act => {
                console.log(act);
                act.forEach(act => self.activities.push(act.name));
            }
        );

        // this.activityService.getActivities().forEach(act => {
        //     console.log(act);
        // });
        this.tags = this.tagService.getTags().map(act => act.name);
        // we will initialize our form model here
        this.myForm = this._fb.group({
            activity: ['', [<any>Validators.required]],
            tags: [''],
            start: [''],
            end: [''],
            duration: ['']
        });
        this.filteredActivities = this.myForm.controls['activity'].valueChanges
            .startWith(null)
            .map(val => val ? self.filter(val, this.activities) : this.activities.slice());
        this.filteredTags = this.myForm.controls['tags'].valueChanges
            .startWith(null)
            .map(val => val ? self.filter(val, this.tags) : this.tags.slice());
    }
    filter(val: string, list: string[]): string[] {
        return list.filter(option => new RegExp(val, 'gi').test(option));
    }

    save(event: Event, model: TimePeriodFormInterface, isValid: boolean) {
        event.preventDefault();
        this.submitted = true; // set form submit to true
        // check if model is valid
        // if valid, call API to save customer
        console.log(model, isValid);
        if (isValid) {
            let activity = new Activity(model.activity);
            this.activityService.saveActivity(activity);
            let tag_strings = model.tags.split(',');
            let tags: Tag[];
            tags = tag_strings.map(this.tagService.createTagFromString, this.tagService);
            let time_period = TimePeriod.fromStrings(model.start, model.end);
            time_period.tags = tags;
            time_period.activity = activity;
            this.timePeriodService.saveTimePeriod(time_period);
            let self = this;
            // time_period.save();
            self.activities = [];
            this.activitiesObs.subscribe(
                act => {
                    console.log(act);
                    act.forEach(act => self.activities.push(act.name));
                }
            );
        }
    }
}