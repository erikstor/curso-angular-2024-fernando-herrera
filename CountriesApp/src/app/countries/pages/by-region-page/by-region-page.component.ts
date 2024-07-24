import {Component, OnInit} from '@angular/core';
import {SearchCountriesResponse} from "../../interfaces/captial-response.interface";
import {CountriesService} from "../../services/countries.service";
import {RegionType} from "../../interfaces/region.type";

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {

  public countries: SearchCountriesResponse[] = []

  public regions: RegionType[] = ['Africa', 'Americas', 'Asia', 'Oceania', 'Europe']

  public selectedRegion: RegionType = ''

  constructor(
    private countriesService: CountriesService
  ) {
  }

  searchByRegion(term: RegionType) {

    this.selectedRegion = term

    this.countriesService.searchRegieon(term)
      .subscribe((response) => {
        this.countries = response
      })
  }

  ngOnInit(): void {
    this.selectedRegion = this.countriesService.cacheStore.byRegion.term
    this.countries = this.countriesService.cacheStore.byRegion.countries
  }

}
