import { Component, computed, signal } from '@angular/core';
import { Icon } from '../../atoms/icon/icon';
import { NurseCardData } from '../../molecules/nurse-card/nurse-card';
import { NurseList as NurseListOrganism } from '../../organisms/nurse-list/nurse-list';
import { PageLayout } from '../../templates/page-layout/page-layout';

@Component({
  imports: [Icon, NurseListOrganism, PageLayout],
  selector: 'app-nurse-list',
  styleUrl: './nurse-list.css',
  templateUrl: './nurse-list.html',
})
export class NurseList {
  protected readonly nurses: NurseCardData[] = [
    { id: 1, name: 'Lucía', surname: 'Martínez', specialty: 'Urgencias', department: 'Atención inmediata' },
    { id: 2, name: 'Daniel', surname: 'Serrano', specialty: 'Pediatría', department: 'Salud infantil' },
    { id: 3, name: 'Carmen', surname: 'Vega', specialty: 'Cuidados intensivos', department: 'Unidad de críticos' },
    { id: 4, name: 'Alejandro', surname: 'Ruiz', specialty: 'Quirófano', department: 'Área quirúrgica' },
    { id: 5, name: 'Nuria', surname: 'Castro', specialty: 'Geriatría', department: 'Cuidados al mayor' },
    { id: 6, name: 'Paula', surname: 'Navarro', specialty: 'Atención primaria', department: 'Consultas externas' },
  ];
  protected readonly favorites = signal(new Set<number>());
  protected readonly favoriteCount = computed(() => this.favorites().size);
  protected toggleFavorite(id: number): void {
    this.favorites.update((current) => { const next = new Set(current); next.has(id) ? next.delete(id) : next.add(id); return next; });
  }
}
