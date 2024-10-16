import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input()
  public listCharacters: Character[] = [
    {
      name: "Bulma",
      power: 1
    }
  ]

  @Output()
  public characterForDelete: EventEmitter<Character> = new EventEmitter()

  onRemoveCharacter(character: Character) {
    if (!character.id) return

    this.characterForDelete.emit(character)
  }
}
