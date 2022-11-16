import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { getAuth, onAuthStateChanged } from "firebase/auth";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  Email = '';
  constructor() { }

  ngOnInit() {


    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.email;

        this.Email = uid;
        console.log("ID" + uid);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });

    

  }




}
