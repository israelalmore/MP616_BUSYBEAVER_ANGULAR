import { Component, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Label } from '../../atoms/label/label';

@Component({
  imports: [Label, ReactiveFormsModule],
  selector: 'app-login-form',
  styleUrl: './login-form.css',
  templateUrl: './login-form.html',
})
export class LoginForm {
  readonly form = input<FormGroup>(new FormGroup({ email: new FormControl(''), password: new FormControl('') }));
  readonly result = input<'success' | 'error' | null>(null);
  readonly submitted = output<void>();
  readonly demoCredentials = input<{ label: string; value: string }[]>([]);
}
