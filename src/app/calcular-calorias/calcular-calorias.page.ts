import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcular-calorias',
  templateUrl: './calcular-calorias.page.html',
  styleUrls: ['./calcular-calorias.page.scss'],
})
export class CalcularCaloriasPage{
  title = 'BMIWebApp'
  sex:number 
  height:number
  weight:number
  age:number
  bmi:number
  mensaje:string=''
  constructor() {
  }
  ngOnInit() {

  }

  calcBMI() {
    if (this.sex<=1) {
      this.bmi = (((10*this.weight)+(6.25*this.height)-(5*this.age)+5))
        }else if(this.sex>=2) {
          this.bmi = (((10*this.weight)+(6.25*this.height)-(5*this.age)-161))


    }

    /*this.bmi = ((this.weight / (this.height * this.height)) * 10000)
    if (this.bmi<=18.5) {
      this.mensaje="Bajo Peso: Se encuentra por debajo de un valor saludable "
    } else if(this.bmi >= 18.6 && this.bmi <= 24.9) {
      this.mensaje="Peso Saludable: No existe riesgo para la salud de la persona"
    }else if(this.bmi >= 25.0 && this.bmi <= 29.9) {
      this.mensaje="Sobrepeso : Acumulación anormal o excesiva de grasa que puede ser perjudicial para la salud "
    }else if(this.bmi >= 30.0 ) {
      this.mensaje="Obesidad: Es una enfermedad compleja que consiste en tener una cantidad excesiva de grasa corporal "
    }*/
  } 
}


