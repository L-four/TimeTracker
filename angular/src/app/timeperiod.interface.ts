/**
 * Created by kyah on 3/24/17.
 */
export interface TimePeriodFormInterface {
    activity: string;
    tags?: string;
    start?: string;
    end?: string;
    duration?: string;
}


// <!--<md-card class="app-input-section">-->
// <!--<md-input-container>-->
// <!--<input type="text" mdInput [formControl]="myControl" [mdAutocomplete]="auto" placeholder="Activity" name="activity">-->
// <!--</md-input-container>-->
//
// <!--<md-autocomplete #auto="mdAutocomplete">-->
// <!--<md-option *ngFor="let activity of activities" [value]="activity.id">-->
//     <!--{{ activity.name }}-->
// <!--</md-option>-->
// <!--</md-autocomplete>-->
//
// <!--<md-input-container class="example-full-width">-->
//     <!--<input mdInput name="tag" placeholder="Tags">-->
// <!--</md-input-container>-->
// <!--<button type="submit" md-raised-button color="primary">Start Tracking</button>-->
// <!--</md-card>-->