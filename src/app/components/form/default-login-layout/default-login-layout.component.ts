import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-defaul-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.css'
})
export class DefaulLoginLayoutComponent {
  @Input() title: string = "";
}
