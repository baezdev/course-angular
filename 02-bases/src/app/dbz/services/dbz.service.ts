import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      name: 'Goku',
      power: 5000,
      id: uuid(),
    },
    {
      name: 'Vegeta',
      power: 4999,
      id: uuid(),
    },
    {
      name: 'Krilin',
      power: 100,
      id: uuid(),
    },
    {
      name: 'Piccolo',
      power: 3500,
      id: uuid(),
    },
    {
      name: 'Gohan',
      power: 4500,
      id: uuid(),
    },
    {
      name: 'Frieza',
      power: 4800,
      id: uuid(),
    },
    {
      name: 'Majin Buu',
      power: 5500,
      id: uuid(),
    },
    {
      name: 'Trunks',
      power: 4200,
      id: uuid(),
    },
    {
      name: 'Cell',
      power: 4700,
      id: uuid(),
    },
    {
      name: 'Broly',
      power: 6000,
      id: uuid(),
    },
  ];

  handleAddCharacter(character: Character) {
    const newCharacter = {
      ...character,
      id: uuid(),
    };

    this.characters = [newCharacter, ...this.characters];
  }

  handleDeleteCharacterById(character: Character) {
    this.characters = this.characters.filter((c) => c.id !== character.id);
  }
}
