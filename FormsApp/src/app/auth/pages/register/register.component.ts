import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
// import {cantBeStrider, emailPattern, firstNameAndLastnamePattern} from "../../../shared/validators/validators.helpers";
import {ValidatorsService} from "../../../shared/services/validators.service";
import {EmailValidatorService} from "../../../shared/validators/email-validator.service";

@Component({
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent {

  public form: FormGroup = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]
    ],
    email: [
      '',
      [Validators.required, Validators.pattern(this.validatorsService.emailPattern)],
      // [new EmailValidatorService()]
      [this.emailValidator]
    ],
    username: [
      '',
      [
        Validators.required,
        this.validatorsService.cantBeStrider
      ]
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(6)]
    ],
    confirmPassword: [
      '',
      [
        Validators.required,
      ]
    ],
  }, {
    validators: [
      this.validatorsService.isFieldOneEqualFieldTwo('password', 'confirmPassword')
    ]
  })


  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidatorService
  ) {
  }

  isValidField(field: string) {
    return this.validatorsService.isValidField(this.form, field)
  }

  onSubmit() {
    this.form.markAllAsTouched()
  }

}
