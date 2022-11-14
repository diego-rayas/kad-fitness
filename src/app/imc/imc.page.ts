import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class IMCPage {
  title = 'BMIWebApp'
  name:string = ''
  height:number
  weight:number
  bmi:number
  mensaje:string=''
  constructor() {
  }
  ngOnInit() {

  }

  calcBMI() {
    this.bmi = ((this.weight / (this.height * this.height)) * 10000)
    if (this.bmi<=18.5) {
      this.mensaje="Bajo Peso: Se encuentra por debajo de un valor saludable "
    } else if(this.bmi >= 18.6 && this.bmi <= 24.9) {
      this.mensaje="Peso Saludable: No existe riesgo para la salud de la persona"
    }else if(this.bmi >= 25.0 && this.bmi <= 29.9) {
      this.mensaje="Sobrepeso : Acumulación anormal o excesiva de grasa que puede ser perjudicial para la salud "
    }else if(this.bmi >= 30.0) {
      this.mensaje="Obesidad: Es una enfermedad compleja que consiste en tener una cantidad excesiva de grasa corporal "
    }
  } 
}

