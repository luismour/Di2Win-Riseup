import { Component, Input, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "email" | "senha" | "telefone"

@Component({
  selector: 'app-primary-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrimaryInputComponent),
      multi: true
    }
  ],
  templateUrl: './primary-input.component.html',
  styleUrl: './primary-input.component.css'
})
export class PrimaryInputComponent implements ControlValueAccessor{

    @Input() type: InputTypes = "text";
    @Input() placeholder: string = "";
    @Input() label: string = "";
    @Input() inputName: string = "";

    value: string = ''
    onchange: any = () => {}
    onTouched: any = () => {}

    onInput(event: Event){
      const value = (event.target as HTMLInputElement).value
      this.onchange(value)
    }

    writeValue(value: any): void {
      this.value = value
    }

    registerOnChange(fn: any): void {
      this.onchange = fn
    }

    registerOnTouched(fn: any): void {
      this.onTouched = fn
    }

    setDisabledState(isDisabled: boolean): void {}
}
