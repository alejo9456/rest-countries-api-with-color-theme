import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country, Region } from '../../../country.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent implements OnInit {

  regions: Region[] = Object.values(Region); 
  countries:Country[]  = [];
  filters: { query: string; region: string } = { query: '', region: ''}; 
  initialValue:string  = '';
  constructor(private countriesService: CountriesService){}

  ngOnInit(): void {
    this.countriesService.getAllCountries();

    this.countriesService.contries$.subscribe( countries =>{
      this.countries = countries;
    });

    this.countriesService.filters$.subscribe(filters => {
      this.filters = filters;
      this.filterCountries();
    });

    this.countriesService.initialValue$.subscribe(initialValue =>{
      this.initialValue =initialValue;
    });
  }

  searchCountriesByTerm(query: string){
    this.filters.query = query;
    this.countriesService.setFilter(this.filters.query, this.filters.region);
  }

  selectedOption(region: Region){
    this.filters.region = region;
    this.countriesService.setFilter(this.filters.query, this.filters.region);
  }

  filterCountries() {
    this.countries = this.countriesService.filterCountries(
      this.filters.query,
      this.filters.region
    );
  }

  ngOnDestroy(): void {
    this.countriesService.setFilter('', '');
  }

}
