import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil', url: '/perfil', icon: 'person' },
    { title: 'Calendario', url: '/folder/Calendario', icon: 'calendar' },
    { title: 'Recetas', url: '/recetas', icon: 'book' },
    { title: 'Ejercicios', url: '/ejercicio', icon: 'pulse' },
    { title: 'Datos Nutricionales', url: '/folder/Datos Nutricionales', icon: 'restaurant' },
    { title: 'Calcular Calorias', url: '/calcular-calorias', icon: 'accessibility' },
    { title: 'IMC', url: '/imc', icon: 'calculator' },
    { title: 'Cerrar Sesion', url: '/', icon: 'exit' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
