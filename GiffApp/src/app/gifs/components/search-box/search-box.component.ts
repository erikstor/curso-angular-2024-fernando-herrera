import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gif"
      (keyup.enter)="searchTag(txtTagInput.value)"
      #txtTagInput
    >
  `
})


export class SearchBoxComponent {

  constructor(
    private gifsService: GifsService
  ) {

  }

  @ViewChild("#txtTagInput")
  public tagInput!: ElementRef<HTMLInputElement>

  searchTag(tag: string) {

    if (tag === "") return

    this.gifsService.searchTag(tag)

  }

}
