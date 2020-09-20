import { Injectable } from '@angular/core';

import { BaseApi } from '../../../shared/core/base-api';
import { BusEvent } from '../models/event.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EventsService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  addEvent(event: BusEvent): Observable<BusEvent> {
    return this.post('events', event);
  }

  getEvents(): Observable<BusEvent[]> {
    return this.get('events');
  }

  getEventById(id: string): Observable<BusEvent> {
    return this.get(`events/${id}`);
  }
}
