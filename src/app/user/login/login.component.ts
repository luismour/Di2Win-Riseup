import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DefaulLoginLayoutComponent } from '../../components/form/default-login-layout/default-login-layout.component';
import { FormloginComponent } from '../../components/form/form-login/form-login.component';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaulLoginLayoutComponent,
    ReactiveFormsModule,
    FormloginComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
    constructor(){
      this.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        senha: new FormControl('', [Validators.required, Validators.minLength(6)])
      })
    }
}
