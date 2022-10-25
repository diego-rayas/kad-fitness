import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  onSubmit(){
    this.userService.login(this.formLogin.value)
      .then(response => {
        this.router.navigate(['/homeLog']);
      })
      .catch(error => console.log(error));
  }
  onClick() {
    this.userService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/homeLog']);
      })
      .catch(error => console.log(error))
  }

}
