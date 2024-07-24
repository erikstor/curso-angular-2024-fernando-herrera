import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman'
  public age: number = 45

  get capitalizeName(): string {
    return this.name.toUpperCase()
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }


  changeAge(): void {
    this.age = 25
  }

  changeName(): void {
    this.name = 'Spiderman'
  }

  reset(): void {
    this.age = 45
    this.name = 'ironman'
  }
}
