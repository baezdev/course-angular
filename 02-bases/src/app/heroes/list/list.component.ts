import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ["spiderman", "iron man", "thor", "hulk" ];
  public deletedHero?: string

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
