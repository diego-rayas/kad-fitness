import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {

  isModalOpenBrazo = false;

  

  setOpenBrazo(isOpenBrazo: boolean){
    this.isModalOpenBrazo = isOpenBrazo
  }

  isModalOpenAbdomen = false;

  

  setOpenAbdomen(isOpenAbdomen: boolean){
    this.isModalOpenAbdomen = isOpenAbdomen
  }

  isModalOpenPierna = false;

  setOpenPierna(isOpenPierna: boolean){
    this.isModalOpenPierna = isOpenPierna
  }

  isModalOpenCardio = false;

  setOpenCardio(isOpenCardio: boolean){
    this.isModalOpenCardio = isOpenCardio
  }

  isModalOpenPecho = false;

  setOpenPecho(isOpenPecho: boolean){
    this.isModalOpenPecho = isOpenPecho
  }
  
  constructor() { }


  ngOnInit() {
  }

}
