import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AddressComponent } from '../../shared/address/address.component';

@Component({
  selector: 'app-personal-details',
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MatInputModule, 
    MatRadioModule, 
    MatButtonModule,
    AddressComponent
  ],
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalDetailsComponent implements OnInit {
  form!: FormGroup;
  formSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.nonNullable.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      address: this.fb.nonNullable.group({
        city: ['', Validators.required],
        address: ['', Validators.required],
        postCode: ['', Validators.required],
      }),
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.formSubmitted = false;
    } else {
      this.formSubmitted = true;
      console.log('form submitted');
    }
  }
}
