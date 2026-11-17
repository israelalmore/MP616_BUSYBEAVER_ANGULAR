import { Component, computed, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NurseCard, NurseCardData } from '../../molecules/nurse-card/nurse-card';
import { SearchBar } from '../../molecules/search-bar/search-bar';
import { PageLayout } from '../../templates/page-layout/page-layout';

@Component({
  imports: [NurseCard, PageLayout, ReactiveFormsModule, SearchBar],
  selector: 'app-search',
  styleUrl: './search.css',
  templateUrl: './search.html',
})
export class Search {
  protected readonly nurses: NurseCardData[] = [
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
    return term ? this.nurses.filter((nurse) => this.normalize(nurse.name).includes(term)) : this.nurses;
  });
  protected search(): void { this.searchedTerm.set(this.query.value.trim()); }
  protected clear(): void { this.query.reset(''); this.searchedTerm.set(null); }
  private normalize(value: string): string { return value.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim(); }
}
