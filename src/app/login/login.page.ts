import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;
  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then(response => {



        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.email;

                console.log("ID"+ uid);
                // ...
            } else {
                // User is signed out
                // ...
            }
        });

        this.router.navigate(['/perfil']);
      })
      .catch(error => console.log(error));
  }

}
