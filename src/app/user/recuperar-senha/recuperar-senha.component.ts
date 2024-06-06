import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DefaulLoginLayoutComponent } from '../../components/form/default-login-layout/default-login-layout.component';
import { RouterLink } from '@angular/router';
import { FormSenhaComponent } from '../../components/form/form-senha/form-senha.component';

@Component({
  selector: 'app-recuperar-senha',
  standalone: true,
  imports: [
    DefaulLoginLayoutComponent,
    ReactiveFormsModule,
    RouterLink,
    FormSenhaComponent
  ],
  templateUrl: './recuperar-senha.component.html',
  styleUrl: './recuperar-senha.component.css'
})
export class RecuperarSenhaComponent {
  loginForm!: FormGroup;
    constructor(){
      this.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        senha: new FormControl('', [Validators.required, Validators.minLength(6)])
      })
    }
}
