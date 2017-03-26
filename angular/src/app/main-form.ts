/**
 * Created by kyah on 3/24/17.
 */

export class MainForm {
    constructor (
        public activity: number = null,
        public tag: number = null,
        public start: number = new Date().getTime(),
        public end: number = null,
        public string_time: string = null
    ) { }
}