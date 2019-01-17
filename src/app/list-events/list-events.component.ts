import { Component, OnInit } from '@angular/core';
import { EventModel } from '../models/event-model';
import { EventService } from '../servies/events.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {

  events: EventModel[];

  constructor(private eventService: EventService) { }

  ngOnInit() {

    this.events = this.eventService.get();
    
  }

}
