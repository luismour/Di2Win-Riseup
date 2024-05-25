import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-barra-lateral',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './barra-lateral.component.html',
  styleUrl: './barra-lateral.component.css'
})
export class BarraLateralComponent {

  isMenuVisible = false;
  textColor = '#F41D97';
  backgroundColor = 'transparent';

  showMenu() {
    this.isMenuVisible = true;
    this.changeColor('#F41D97', '#FFDDF2');
  }

  hideMenu() {
    this.isMenuVisible = false;
    this.changeColor('#F41D97', 'transparent');
  }
  private changeColor(color: string, backgroundColor: string) {
    this.textColor = color;
    this.backgroundColor = backgroundColor;
  }
}
