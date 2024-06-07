import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FiltroData } from '../../../services/filtroDate.service';
import { Router } from '@angular/router';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-select-date',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './select-date.component.html',
  styleUrls: ['./select-date.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ]
})
export class SelectDateComponent  {
  startDate: Date | null = null;
  endDate: Date | null = null;

  constructor(private filtroData: FiltroData, private router: Router) {
    
  }


  onStartDateChange(date: Date | null) {
    this.startDate = date;
    this.onDateChange(this.startDate, this.endDate);
  }

  onEndDateChange(date: Date | null) {
    this.endDate = date;
    this.onDateChange(this.startDate, this.endDate);
  }

  onDateChange(dataInicio: Date | null, dataFinal: Date | null) {
    const dataInicioStr = dataInicio ? this.formatDate(dataInicio) : '';
    const dataFinalStr = dataFinal ? this.formatDate(dataFinal) : '';
    const filterValue = `${dataInicioStr} - ${dataFinalStr}`;
    this.filtroData.setFiltro(filterValue);
  }

  private formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  clearDates() {
    this.router.navigate([this.router.url])
      .then(() => {
        window.location.reload();
      });
  }
  
}

