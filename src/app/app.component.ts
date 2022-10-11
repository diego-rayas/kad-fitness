import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil', url: '/folder/Perfil', icon: 'person' },
    { title: 'Calendario', url: '/folder/Calendario', icon: 'calendar' },
    { title: 'Recetas', url: '/folder/Recetas', icon: 'book' },
    { title: 'Ejercicios', url: '/folder/Ejercicios', icon: 'pulse' },
    { title: 'Datos Nutricionales', url: '/folder/Datos Nutricionales', icon: 'restaurant' },
    { title: 'IMC', url: '/folder/IMC', icon: 'calculator' },
    { title: 'Cerrar Sesion', url: '/', icon: 'exit' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
