import {Activity} from "./activity";
import {Tag} from "./tag";
/**
 * Created by kyah on 3/25/17.
 */
export class  TimePeriod {
    get tags(): Tag[] {
        return this._tags;
    }

    set tags(value: Tag[]) {
        this._tags = value;
    }
    get activity(): Activity {
        return this._activity;
    }

    set activity(value: Activity) {
        this._activity = value;
    }
    public id: number;
    private _tags: Tag[];
    private _activity: Activity;
    constructor(
        public start: number,
        public end: number,
    ) {}
    static fromStrings(start: string, end: string) {
        let start_int = parseInt(start);
        let end_int = parseInt(end);
        return new TimePeriod(start_int, end_int);
    }
}