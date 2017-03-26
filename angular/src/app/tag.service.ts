import { Injectable } from '@angular/core';
import { Tag } from './tag';

@Injectable()
export class TagService {
    private tags_memory: Tag[] = [];
    constructor() {
        let tags = [
            {id: 1, name: 'work'},
            {id: 2, name: 'home'},
            {id: 3, name: 'web'},
        ];
        this.tags_memory = tags.map(function (tag) {
            let act = new Tag(tag.name);
            act.id = tag.id;
            return act;
        })
    }
    getTags(): Tag[] {
        return this.tags_memory;
    }
    saveTag(tag: Tag) {
        tag.id = this.tags_memory[this.tags_memory.length - 1].id + 1;
        this.tags_memory.push(tag);
        return tag;
    }
    createTagFromString(tagName: string) {
        return this.saveTag(new Tag(tagName));
    }
    getTagByID(id: number) {
        return this.tags_memory.filter(function (tag) {
            return tag.id === id;
        })
    }
}
