import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

const prod = {
  name: 'rxt 5090',
  price: 2000,
  inStorage: 13123
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit {


  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [], []),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0,),
  // })

  public myForm: FormGroup = this.formBuilder.group({
    // valor, validadores sincrono, validadores asincronos
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],
    price: [
      0,
      [
        Validators.required,
        Validators.min(0)
      ]
    ],
    inStorage: [
      0,
      [
        Validators.required,
        Validators.min(0)
      ]
    ],
  })

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.myForm.reset()
  }

  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field] && !this.myForm.controls[field].errors) return null

    const errors = this.myForm.controls[field].errors || {}

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

  onSave() {

    if (this.myForm.invalid) return

    console.log(this.myForm.value)
  }


}
