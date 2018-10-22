import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Holidays } from '../holidays';

@Component({
  selector: 'tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css']
})
export class Tab2Component implements OnInit {

	holiday: Holidays[];
	holiday$: Observable<Holidays[]>;

  constructor(private service: ApiService) { }

  ngOnInit() {
  	this.holiday$ = this.service.getHolidaysByYear();
  }

}
