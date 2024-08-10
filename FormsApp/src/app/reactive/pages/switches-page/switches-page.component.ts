import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [true, Validators.requiredTrue],
  })

  public person: Pick<any, string | number | symbol> = {
    gender: 'F',
    wantNotifications: false
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form.reset(this.person)
  }

  onSubmit() {

    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }

    const {termsAndConditions, ...newPerson} = this.form.value

    this.person = newPerson

    console.log(this.form.value)
    console.log(this.person)


  }


  isValidField(field: string): boolean | null {
    return this.form.controls[field].errors && this.form.controls[field].touched
  }


}
