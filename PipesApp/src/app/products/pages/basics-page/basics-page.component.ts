import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'erik'
  public nameUpper: string = 'FERNANDO'
  public fullname: string = 'sToR'

  public customDate: Date = new Date()
}
