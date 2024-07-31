import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }


  onLogin():void{
    this.authService.login('a', 'b').subscribe((user) => {

      if(!user) return

      this.router.navigate(['/heroes'])

    })
  }

}
