import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DropDownComponent } from '@shared';

export class ShowOnTouchErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return !!(control && control.invalid && (control.touched || control.dirty));
  }
}

@Component({
  selector: 'app-add-asset-form-component',
  imports: [
    DropDownComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-asset-form-component.html',
  styleUrl: './add-asset-form-component.css',
})
export class AddAssetFormComponent {
  imageUrl: string | null = null;
  assetForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.assetForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      categoria: ['', Validators.required],
      serial: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      img: [null],
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);

    this.assetForm.patchValue({ img: file });
    this.assetForm.get('img')?.updateValueAndValidity();
  }

  removeImage() {
    this.imageUrl = null;
  }

  setCategory(idCategory: number) {
    this.assetForm.patchValue({ categoria: idCategory });
  }

  onSubmit() {
    if (this.assetForm.invalid) {
      this.assetForm.markAllAsTouched();
      return;
    }
    this.assetForm.reset();
    this.removeImage();
  }
}
