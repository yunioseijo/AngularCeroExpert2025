import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interfaces';

@Component({
  selector: 'dragonball-add-character',
  imports: [],
  templateUrl: './add-character.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCharacterComponent {
  addCharacter() {
    const newCharacter: Character = {
      id: 100 + 1,
      name: this.name(),
      power: this.power(),
    };
    console.log('newCharacter', newCharacter);
    this.resetFields();
  }
  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
  name = signal<string>('');
  power = signal<number>(0);
}
