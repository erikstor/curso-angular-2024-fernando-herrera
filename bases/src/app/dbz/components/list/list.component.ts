import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = []

  @Output()
  public onDeleteCharacterEvent: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(id: number): void {

    console.log("🚀 ~ file: list.component.ts:16 ~ ListComponent ~ onDeleteCharacter ~ id:", id)

    this.onDeleteCharacterEvent.emit(id)

  }

}
