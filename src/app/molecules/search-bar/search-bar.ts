import { Component, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Button } from '../../atoms/button/button';
import { Icon } from '../../atoms/icon/icon';
import { Input } from '../../atoms/input/input';

@Component({
  imports: [Button, Icon, Input, ReactiveFormsModule],
  selector: 'app-search-bar',
  styleUrl: './search-bar.css',
  templateUrl: './search-bar.html',
})
export class SearchBar {
  readonly form = input<FormGroup>(new FormGroup({ query: new FormControl('') }));
  readonly submitted = output<void>();
}
