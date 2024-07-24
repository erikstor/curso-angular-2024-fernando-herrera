import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {


  ngOnInit(): void {
    if (!this.url) throw new Error('La URL es requerida');
    if (!this.alt) throw new Error('El texto alternativo es requerido');
  }

  @Input()
  public url!: string

  @Input()
  public alt!: string

  protected hasLoaded: boolean = false

  onLoad() {
    this.hasLoaded = true
  }

}
