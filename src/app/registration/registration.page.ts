import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  formReg: FormGroup;
  
  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
   }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.register(this.formReg.value)
      .then(response => {
        this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }

}

