import { Component, computed, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import type { Character } from '../../interfaces/character.interfaces';
import { AddCharacterComponent } from "../../components/dragonball/add-character/add-character.component";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  imports: [CharacterListComponent, AddCharacterComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
  selector: 'dragonball-super-page',
})
export class DragonballSuperPageComponent {
  name = signal<string>('');
  power = signal<number>(0);

  public dragonBallService = inject(DragonballService);

}
