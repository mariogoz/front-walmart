import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeCL from '@angular/common/locales/es-CL';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicesProductsService } from './services-products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  filterForm = this.formBuilder.group({
    inputFilter: ['', [Validators.required]]
  });
  filter: string;
  constructor(private formBuilder: FormBuilder,
    private servicesProductsService: ServicesProductsService) {
    registerLocaleData(localeCL);
  }

  onSubmit() {
    this.filter = this.filterForm.get('inputFilter').value;
    console.log('call onSubmit', this.filter);
    this.servicesProductsService.getProducts(this.filter)
      .subscribe(
        (data) => {
          console.log('success', data);
        }, (err) => {
          console.log('error');
        });
  }

  get f() { return this.filterForm.controls; }
}
