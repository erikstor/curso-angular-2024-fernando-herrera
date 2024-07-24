import {Component, OnInit} from '@angular/core';
import {CountriesService} from '../../services/countries.service';
import {SearchCountriesResponse} from '../../interfaces/captial-response.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {

  public countries: SearchCountriesResponse[] = []
  public isLoading: boolean = false
  public initialValue: string = ''

  constructor(private countriesService: CountriesService) {

  }

  searchByCapital(term: string) {

    this.isLoading = true

    this.countriesService
      .searchCapital(term)
      .subscribe((response) => {
        this.countries = response
        this.isLoading = false
      })


  }

  ngOnInit(): void {

    this.countries = this.countriesService.cacheStore.byCapital.countries
    this.initialValue = this.countriesService.cacheStore.byCapital.term

  }

}
