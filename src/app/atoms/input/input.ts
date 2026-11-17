import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  imports: [],
  selector: 'app-input',
  styleUrl: './input.css',
  templateUrl: './input.html',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => Input), multi: true }],
})
export class Input implements ControlValueAccessor {
  readonly id = input('input');
  readonly type = input('text');
  readonly placeholder = input('');
  readonly autocomplete = input('');
  protected readonly value = signal('');
  protected disabled = false;
  private onChange = (_value: string) => {};
  private onTouched = () => {};

  writeValue(value: string): void { this.value.set(value ?? ''); }
  registerOnChange(fn: (value: string) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
  protected updateValue(value: string): void { this.value.set(value); this.onChange(value); }
  protected touched(): void { this.onTouched(); }
}
