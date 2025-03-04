import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import type { Character } from '../../interfaces/character.interfaces';
import { AddCharacterComponent } from "../../components/dragonball/add-character/add-character.component";

@Component({
  imports: [CharacterListComponent, AddCharacterComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
  selector: 'dragonball-super-page',
})
export class DragonballSuperPageComponent {
  name = signal<string>('');
  power = signal<number>(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);
  addCharacter() {
    if(this.name() === '' || this.power() === 0) {
      return;
    }
    const newCharacter = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    this.characters.update((characters) => [...characters, newCharacter]);
    this.resetFields();
  }
  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
  deleteCharacter(id: number) {
    this.characters.update((characters) => characters.filter((character) => character.id !== id));
  }

}
