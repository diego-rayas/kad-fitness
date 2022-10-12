import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class IMCPage {
 
  Peso = new FormControl('');
  Altura = new FormControl('');
 
  
  constructor() {
  }
 
}

