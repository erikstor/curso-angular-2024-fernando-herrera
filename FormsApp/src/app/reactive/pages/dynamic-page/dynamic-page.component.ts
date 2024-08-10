import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent {

  public form: FormGroup = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Forza', Validators.required],
    ])
  })

  public newFavoriteGame: FormControl = new FormControl<string>('', [Validators.required])

  constructor(
    private fb: FormBuilder
  ) {
  }

  get favoriteGamesControl() {
    return this.form.get('favoriteGames') as FormArray
  }

  onSubmit(): void {


    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }

    console.log(this.form.value)
    this.favoriteGamesControl.clear()
    this.form.reset()
  }

  isValidField(field: string): boolean | null {
    return this.form.controls[field].errors && this.form.controls[field].touched
  }

  isValidFieldInArray(formArray: FormArray, index: number): boolean | null {
    return formArray.controls[index].errors && formArray.controls[index].touched
  }

  getFieldError(field: string): string | null {
    if (!this.form.controls[field] && !this.form.controls[field].errors) return null

    const errors = this.form.controls[field].errors || {}

    for (const error of Object.keys(errors)) {
      switch (error) {
        case 'required':
          return 'Este campo es requerido'
        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracteres.`
        default:
          return null
      }
    }

    return ""
  }


  onDeleteFavorite(index: number): void {
    this.favoriteGamesControl.removeAt(index)
  }

  onAddToFavorite(): void {

    if (this.newFavoriteGame.invalid) return

    const newGame = this.newFavoriteGame.value

    this.favoriteGamesControl.push(
      this.fb.control(
        newGame, Validators.required
      )
    )

    this.newFavoriteGame.reset()
  }

}
