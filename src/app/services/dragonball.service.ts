import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';

const loadFromLocalStorage = () => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
};
@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  constructor() { }

  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(character: Character) {
    this.characters.update((characters) => [...characters, character]);
    console.log('received character', character);

  }
  deleteCharacter(id: number) {
    this.characters.update((characters) => characters.filter((character) => character.id !== id));
  }

}
