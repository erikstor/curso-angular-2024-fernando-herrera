import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {HeroInterface} from "../../interfaces/hero.interface";
import {HeroesService} from "../../services/heroes.service";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {

  public searchValue = new FormControl('')
  public heroes: HeroInterface[] = []
  public selectedHero?: HeroInterface

  constructor(private heroesService: HeroesService) {
  }

  searchHero() {
    const value: string = this.searchValue.value || ''
    this.heroesService.searchHero(value).subscribe((heroes) => {
      this.heroes = heroes
    })
  }


  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    console.log(event.option.value)

    if (!event.option.value) {
      this.selectedHero = undefined
      return
    }

    const hero: HeroInterface = event.option.value
    this.searchValue.setValue(hero.superhero)
    this.selectedHero = hero

  }

}
