import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css'
})
export class GifsCardComponent implements OnInit {


  ngOnInit(): void {
    if (!this.gif) throw new Error('La propiedad gif es requerida');
  }


  @Input()
  public gif!: Gif



}
