import {Component, OnInit} from '@angular/core';
import {HeroesService} from "../../services/heroes.service";
import {HeroInterface} from "../../interfaces/hero.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {catchError, delay, of, switchMap} from "rxjs";

@Component({
  selector: 'app-heroe-page',
  templateUrl: './heroe-page.component.html',
  styles: ``
})
export class HeroePageComponent implements OnInit {

  public heroe?: HeroInterface

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(500),
        switchMap(({id}) => this.heroesService.getHeroeById(id)),
      )
      .subscribe((hero) => {

        if (!hero) return this.router.navigate(['404'])

        this.heroe = hero
        return
      })
  }

  goBack() {
    this.router.navigateByUrl('heroes/list')
  }

}
