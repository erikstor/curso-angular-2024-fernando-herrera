import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  public characters: Character[] = [{
    name: "Krilin",
    power: 500
  }, {
    name: "Goku",
    power: 9500
  }]


  onNewCharacter(pj: Character): void {

    console.log("🚀 ~ file: main-page.component.ts:21 ~ MainPageComponent ~ onNewCharacter ~ pj:", pj)

    this.characters.push({ ...pj })
  }

  onDeleteCharacterEvent(id: number): void {

    console.log("🚀 ~ file: main-page.component.ts:28 ~ MainPageComponent ~ onDeleteCharacterEvent ~ id:", id)

    this.characters.splice(id, 1)
  }

}

