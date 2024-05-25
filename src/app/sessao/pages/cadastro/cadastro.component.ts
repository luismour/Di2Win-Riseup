import { Component, OnInit } from '@angular/core';
import { DefaulLoginLayoutComponent } from '../../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../../components/primary-input/primary-input.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    DefaulLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent{
  cadastroForm!: FormGroup;
    constructor(){
      this.cadastroForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        tel: new FormControl('', [Validators.required, Validators.nullValidator, Validators.maxLength(11), Validators.minLength(11)]),
        senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
        senhaConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
      })
    }
}
