import {Component, OnInit} from '@angular/core';
import {HeroInterface} from "../../interfaces/hero.interface";
import {HeroesService} from "../../services/heroes.service";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit {


  public heroes: HeroInterface[] = []

  constructor(
    private heroesServices: HeroesService
  ) {
  }

  ngOnInit() {

    this.heroesServices.getHeroes().subscribe((heroes) => {
      this.heroes = heroes
    })

  }

}
