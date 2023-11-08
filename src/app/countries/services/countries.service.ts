import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Country } from '../../country.interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  
  private  BASE_URL = 'https://restcountries.com/v3.1';
  private countriesSubject  = new BehaviorSubject<Country[]>([]);
  contries$ = this.countriesSubject.asObservable(); 
  private allCountries: Country[] = [];

  private filterSubject = new BehaviorSubject<{query:string; region: string}>({
    query: '',
    region: ''
  });
  filters$ = this.filterSubject.asObservable();

  private initialValueSubject = new BehaviorSubject<string>('');
  initialValue$ = this.initialValueSubject.asObservable();

  constructor(private http: HttpClient) { }

  getAllCountries() {
    this.http.get<Country[]>(`${this.BASE_URL}/all`).subscribe(data => {
      this.allCountries = data;
      this.countriesSubject.next(data);
      this.countriesSubject.complete();
    })    
  }

  setFilter(query: string, region: string){
    this.filterSubject.next({ query, region});
  }

  filterCountries( query: string,region: string ): Country[]{
    const filteredCountries = this.allCountries.filter(country => {
      const nameMatch = country.name?.common.toLowerCase().includes(query.toLowerCase());
      const regionMatch = !region || country.region === region;
      return nameMatch && regionMatch;
    });
    return filteredCountries;
  }

  findCountryByName(name: string): Country | undefined {
    const allCountries = this.countriesSubject.getValue();
    return allCountries.find(country => country.name?.common === name);
  }

}
