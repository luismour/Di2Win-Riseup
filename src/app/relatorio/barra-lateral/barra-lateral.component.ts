import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-barra-lateral',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './barra-lateral.component.html',
  styleUrl: './barra-lateral.component.css'
})
export class BarraLateralComponent {
  isExpanded = false;

  toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
  
  isMenuVisible = false;
  textColor = '#F41D97';
  backgroundColor = 'transparent';

  showMenu() {
    this.isMenuVisible = true;
    this.changeColor('#F41D97', 'transparent');
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
