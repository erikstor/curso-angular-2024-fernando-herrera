import {Component} from '@angular/core';
import {Color, HeroInterface} from "../../interfaces/hero.interface";

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false
  public orderBy: keyof HeroInterface | '' = ''
  public heroes: HeroInterface[] = [
    {
      name: 'Superman',
      color: Color.blue,
      canFly: true
    },
    {
      name: 'Batman',
      color: Color.black,
      canFly: false
    },
    {
      name: 'Daredevil',
      color: Color.red,
      canFly: false
    },
    {
      name: 'Robin',
      color: Color.green,
      canFly: false
    },
    {
      name: 'Linterna verde',
      color: Color.green,
      canFly: true
    },
  ]

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase
  }


  changeOrder(value: keyof HeroInterface) {

    this.orderBy = value

  }

}
