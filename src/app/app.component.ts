import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Person } from './person/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'ng_datatable';

  dtOptions: DataTables.Settings = {};

  public people: Person[] = [];

  private unsubscribe$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad(): void {
    this.people.push(new Person(1,1,'Ronaldo','M'));
    this.people.push(new Person(1,1,'Angélica','F'));
    this.people.push(new Person(1,1,'Calos','M'));
    this.people.push(new Person(1,1,'Bete','F'));
    this.people.push(new Person(1,1,'Maria','F'));
    this.people.push(new Person(1,1,'João','M'));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
