import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string ='ironmancito';
  public age: number =45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void{
      this.name ='Spiderman';
  }
  changeAge(): void{
      this.age = 54;
  }
  resetear(): void{
    this.name ='ironmancito'
    this.age = 45;
}

}

