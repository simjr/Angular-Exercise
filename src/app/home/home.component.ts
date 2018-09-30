import { Component, OnInit } from '@angular/core';
import { Form1 } from '../form1';
import { TabDirective } from 'ngx-bootstrap/tabs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	//campo1: string;
	//campo2: string;

  constructor() { }

  ngOnInit() {
  }
  //Para probar si me está enlazando los input con los valores de mi clase Form1


}
