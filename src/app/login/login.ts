import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private readonly validCredentials = {
    email: 'enfermera@busybeaver.test',
    password: 'Salud123!',
  };

  protected readonly demoCredentials = [
    { label: 'Usuario', value: this.validCredentials.email },
    { label: 'Contraseña', value: this.validCredentials.password },
  ];

  protected readonly form = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  protected readonly loginResult = signal<'success' | 'error' | null>(null);

  protected login(): void {
    this.form.markAllAsTouched();
    const { email, password } = this.form.getRawValue();
    const valid =
      this.form.valid &&
      email.trim().toLowerCase() === this.validCredentials.email &&
      password === this.validCredentials.password;

    this.loginResult.set(valid ? 'success' : 'error');
  }
}
