import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-nurse-list',
  styleUrl: './nurse-list.css',
  templateUrl: './nurse-list.html',
})
export class NurseList {
  protected readonly nurses = [
    { id: 1, name: 'Lucía', surname: 'Martínez', specialty: 'Urgencias', department: 'Atención inmediata' },
    { id: 2, name: 'Daniel', surname: 'Serrano', specialty: 'Pediatría', department: 'Salud infantil' },
    { id: 3, name: 'Carmen', surname: 'Vega', specialty: 'Cuidados intensivos', department: 'Unidad de críticos' },
    { id: 4, name: 'Alejandro', surname: 'Ruiz', specialty: 'Quirófano', department: 'Área quirúrgica' },
    { id: 5, name: 'Nuria', surname: 'Castro', specialty: 'Geriatría', department: 'Cuidados al mayor' },
    { id: 6, name: 'Paula', surname: 'Navarro', specialty: 'Atención primaria', department: 'Consultas externas' },
  ];

  protected readonly favorites = signal<Set<number>>(new Set());
  protected readonly favoriteCount = computed(() => this.favorites().size);

  protected toggleFavorite(nurseId: number): void {
    this.favorites.update((current) => {
      const next = new Set(current);
      if (next.has(nurseId)) {
        next.delete(nurseId);
      } else {
        next.add(nurseId);
      }
      return next;
    });
  }

  protected isFavorite(nurseId: number): boolean {
    return this.favorites().has(nurseId);
  }
}
