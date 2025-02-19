import { Component } from "@angular/core";

@Component({
  selector:'app-counter',
  standalone: false,

  template:`<h3>Counter: {{counter}}</h3>
  <button (click)="increasBy(+1)">+1</button>
  <button (click)="resetBy(+10)">Resetear</button>
  <button (click)="increasBy(-1)">-1</button>`


})

export class CounterComponent {

  public counter:number = 10;

  increasBy(value:number):void{
    this.counter += value;
  }

  resetBy(value:number):void{
    this.counter = value;
  }
}
