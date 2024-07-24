import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CountriesService} from "../../services/countries.service";
import {SearchCountriesResponse} from "../../interfaces/captial-response.interface";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {



  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.countriesService.searchCountryByAlfaCode(id))
      )
      .subscribe((country) => {

        if (!country) return this.router.navigateByUrl('')

        return this.country = country

      })

  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {
  }

  public country: SearchCountriesResponse | null = null


}
