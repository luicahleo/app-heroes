import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Output()
  public indexToDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 15000,
    },
  ];

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.indexToDelete.emit(id);
  }
}
