import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../shared/models/country';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private countryUrl = 'assets/countries.json';
  
  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryUrl);
  }
}
