import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { SessaoComponent } from './sessao/sessao.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, SessaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Di2winProject';
}
