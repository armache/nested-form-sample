import { Component, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Country } from '../models/country';

@Component({
  selector: 'app-address',
  imports: [ReactiveFormsModule, MatInputModule, MatSelectModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
  standalone: true
})
export class AddressComponent implements OnInit {
  
  @Input() addressForm!: FormGroup;
  countries: Country[] = [];

  constructor(@Optional() @SkipSelf() private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    this.addressForm = (this.controlContainer.control as FormGroup).get('address') as FormGroup;
  }
}
