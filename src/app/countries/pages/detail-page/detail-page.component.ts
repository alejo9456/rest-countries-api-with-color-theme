import { Component, OnInit } from '@angular/core';
import { Country, Languages } from '../../../country.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styles: [
  ]
})
export class DetailPageComponent implements OnInit{

  public country?: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ){}


  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap( ({ name }) => {
          const country = this.countriesService.findCountryByCca3(name);
          return of(country);
        })
      )  
      .subscribe( ( country) => {
        if(! country) return this.router.navigateByUrl('');

        return this.country = country;
      })
  }

  getLanguageKeys(languages: Languages | undefined): string[] {
    return languages ? Object.keys(languages) : [];
}

  

}
