import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  constructor() {}

  public characters: Character[] = [
    {
      id: uuidv4(),
      name: 'Goku',
      power: 90000,
    },
    {
      id: uuidv4(),
      name: 'Vegeta',
      power: 85000,
    },
    {
      id: uuidv4(),
      name: 'Gohan',
      power: 75000,
    },
    {
      id: uuidv4(),
      name: 'Piccolo',
      power: 70000,
    },
    {
      id: uuidv4(),
      name: 'Krillin',
      power: 50000,
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter = { id: uuidv4(), ...character };

    this.characters.push(newCharacter);
  }

  handleOnDeleCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
