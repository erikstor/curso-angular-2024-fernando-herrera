import {Component, Input, OnInit} from '@angular/core';
import {HeroInterface} from "../../interfaces/hero.interface";

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  @Input()
  public hero!: HeroInterface

  ngOnInit(): void {
    if (!this.hero) throw new Error('Hero property is required')
  }


}
