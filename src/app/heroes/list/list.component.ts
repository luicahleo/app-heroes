import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Black Widow', 'Captain America', 'Antman', 'Wasp'];

  public deletedHero?: string = '';

  removeLastHero(): void {

    if(this.heroNames.length === 0) return;

    this.deletedHero = this.heroNames.pop();

    console.log(this.deletedHero + " has been removed");

  }


}
