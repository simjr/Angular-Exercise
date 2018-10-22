import { Component } from '@angular/core';
import {  HomeComponent } from './home/home.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular exercise';

  constructor () {
  	// this.test.printToConsole("Has obtenido el servicio exitosamente");
  }

  ngOnInit() {

  	// let obs = this.http.get('http://nolaborables.com.ar/api/v2/feriados/2018');
  	// obs.subscribe((response) => console.log(response));
  }

}
