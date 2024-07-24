import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  heroes: string[] = [
    'spiderman',
    'hulk',
    'ironman',
  ]

  deletedHeroe?: string

  deleteHeroe(): void {
    this.deletedHeroe = this.heroes.pop()
  }

}
