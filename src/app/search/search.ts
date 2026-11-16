import { Component, computed, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

export interface Nurse {
  id: number;
  name: string;
  unit: string;
  shift: 'Mañana' | 'Tarde' | 'Noche';
}

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-search',
  styleUrl: './search.css',
  templateUrl: './search.html',
})
export class Search {
  protected readonly nurses: Nurse[] = [
    { id: 1, name: 'María García', unit: 'Urgencias', shift: 'Mañana' },
    { id: 2, name: 'Carlos Ruiz', unit: 'Pediatría', shift: 'Tarde' },
    { id: 3, name: 'Marta López', unit: 'Cardiología', shift: 'Noche' },
    { id: 4, name: 'Lucía Fernández', unit: 'Oncología', shift: 'Mañana' },
    { id: 5, name: 'Mario Sánchez', unit: 'Traumatología', shift: 'Tarde' },
    { id: 6, name: 'Javier Torres', unit: 'UCI', shift: 'Noche' },
    { id: 7, name: 'Ana Gómez', unit: 'Neonatología', shift: 'Mañana' },
  ];

  protected readonly query = new FormControl('', { nonNullable: true });
  protected readonly form = new FormGroup({ query: this.query });
  protected readonly searchedTerm = signal<string | null>(null);

  protected readonly results = computed(() => {
    const term = this.normalize(this.searchedTerm() ?? '');
    return term
      ? this.nurses.filter((nurse) => this.normalize(nurse.name).includes(term))
      : this.nurses;
  });

  protected search(): void {
    this.searchedTerm.set(this.query.value.trim());
  }

  protected clear(): void {
    this.query.setValue('');
    this.searchedTerm.set(null);
  }

  protected initials(name: string): string {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }

  private normalize(value: string): string {
    return value
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .trim();
  }
}
