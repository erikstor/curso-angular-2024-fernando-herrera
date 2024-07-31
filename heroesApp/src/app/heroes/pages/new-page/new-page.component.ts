import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HeroInterface, Publisher} from "../../interfaces/hero.interface";
import {HeroesService} from "../../services/heroes.service";
import {ActivatedRoute, Router} from "@angular/router";
import {filter, switchMap, tap} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../components/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent implements OnInit {

  public publisheres = [{
    id: Publisher.DCComics,
    desc: Publisher.DCComics
  }, {
    id: Publisher.MarvelComics,
    desc: Publisher.MarvelComics
  }]

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', {nonNullable: true}),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  })

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
  }

  get currentHero(): HeroInterface {
    return this.heroForm.value as HeroInterface
  }

  ngOnInit(): void {

    if (!this.router.url.includes('edit')) return

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroesService.getHeroeById(id)),
      )
      .subscribe((hero) => {
        console.log(hero)

        if (!hero) return this.router.navigateByUrl('/404')

        this.heroForm.reset(hero)
        return
      })


  }

  onSubmit(): void {
    console.log({
      formIsValid: this.heroForm.valid,
      value: this.heroForm.value
    })

    if (!this.heroForm.valid) return

    if (this.currentHero.id) {
      this.heroesService.patchHero(this.currentHero).subscribe((hero) => {
        console.log(hero)
        if (!hero) return

        this.showSnackBar(`${hero.superhero} updated!`)
      })
    } else if (!this.currentHero.id) {

      const hero = this.currentHero

      hero.id = hero.superhero.replaceAll(' ', '-')

      this.heroesService.addHero(this.currentHero).subscribe((hero) => {

        console.log(hero)

        if (!hero) return

        this.showSnackBar(`${hero.superhero} created!`)

      })
    }


  }


  showSnackBar(msg: string) {
    this.snackBar.open(msg, 'done', {
      duration: 2500,
    })
  }

  onDeleteHero() {

    if (!this.currentHero.id) throw new Error('Hero is required')

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value
    })

    dialogRef.afterClosed()
      .pipe(
        filter(wantDelete => wantDelete),
        switchMap(() => this.heroesService.deleteHero(this.currentHero.id))
      )
      .subscribe(result => {

        console.log(result)

        if (result) {
          this.showSnackBar(`${this.currentHero.superhero} was deleted!`)
          this.router.navigateByUrl('/')
          return
        }

        this.showSnackBar(`${this.currentHero.superhero} wasn't delete :c`)

      })

  }

}
