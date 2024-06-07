import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltroData {
 private filtroSubject = new BehaviorSubject<string>('');
  filtro$ = this.filtroSubject.asObservable();
filtroAtivo = false; 

  setFiltro(filtro: string) {
    this.filtroSubject.next(filtro);
  }

  getFiltro(): string {
    return this.filtroSubject.value;
  }
}