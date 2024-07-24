import {Component, OnInit} from '@angular/core';
import {CountriesService} from "../../services/countries.service";
import {SearchCountriesResponse} from "../../interfaces/captial-response.interface";

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {


  public countries: SearchCountriesResponse[] = []
  public initialValue: string = ''

  constructor(private countriesService: CountriesService) {

  }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries
    this.initialValue = this.countriesService.cacheStore.byCountries.term
  }

  searchByName(term: string) {

    this.countriesService
      .searchCountry(term)
      .subscribe((response) => {
        this.countries = response
      })

  }


}
