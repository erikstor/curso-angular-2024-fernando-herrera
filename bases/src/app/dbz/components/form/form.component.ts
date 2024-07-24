import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {


  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter()

  public character: Character = { name: '', power: 0 }


  emit() {

    console.log(this.character);
    this.onNewCharacter.emit(this.character)
    this.character.name = ''
    this.character.power = 0

  }


}
