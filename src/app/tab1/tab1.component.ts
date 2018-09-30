import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Form1 } from '../form1';
import { TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {
	form = new FormGroup ({
    campo1: new FormControl('', [Validators.required, Validators.minLength(4)]),
    campo2: new FormControl('', [Validators.required,  Validators.minLength(4)])
  })
  constructor() { }

  ngOnInit() {
  }

}
