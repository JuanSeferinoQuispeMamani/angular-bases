import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] =['spiderman','Ironman','Hulk','Seh Hulk','Thor'];
  public deleteHero?: string;

  removeLasHero():void{

    this.deleteHero= this.heroNames.pop();
  }
}
