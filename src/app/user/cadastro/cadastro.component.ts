import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  FormsModule,
} from '@angular/forms';
import { DefaulLoginLayoutComponent } from '../../components/form/default-login-layout/default-login-layout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { FormCadastroComponent } from '../../components/form/form-cadastro/form-cadastro.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    DefaulLoginLayoutComponent,
    ReactiveFormsModule,
    FormCadastroComponent,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    RouterLink,
  ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  cadastroForm!: FormGroup;
  constructor() {
    this.cadastroForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefone: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
        Validators.maxLength(11),
        Validators.minLength(11),
      ]),
      senha: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmaSenha: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
}
export class SlideToggleFormsExample {
  isChecked = true;
  formGroup = this._formBuilder.group({
    acceptTerms: ['', Validators.requiredTrue],
  });

  constructor(private _formBuilder: FormBuilder) { }

  alertFormValues(formGroup: FormGroup) {
    alert(JSON.stringify(formGroup.value, null, 2));
  }
}
