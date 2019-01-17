import { Injectable } from '@angular/core';
import { EventModel } from '../models/event-model'

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventList: EventModel[];
  constructor() {
    this.eventList = [
      {
        id: 1,
        name: "ariel1",
        date: new Date(),
        duration: 1,
        classes: ['a','b','c'],
      }, {
        id: 2,
        name: "ariel2",
        date: new Date(),
        duration: 3,
        classes: ['a','b','c'],
      }, {
        id: 3,
        name: "ariel3",
        date: new Date(),
        duration: 2,
        classes: ['a','b','c'],
      }

      

    ];
  }
  get(): EventModel[] {
    console.log('get method of ProjectService invoked')
    return this.eventList;
}
}