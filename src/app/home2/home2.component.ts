import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Form1 } from '../form1';
import { TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
	form2 = new FormGroup ({
    campo1: new FormControl('', [Validators.required, Validators.minLength(4)]),
    campo2: new FormControl('', [Validators.required,  Validators.minLength(4)])
  })
  constructor() { }

  ngOnInit() {
  }

}
