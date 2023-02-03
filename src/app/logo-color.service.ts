import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoColorService {

  constructor() { }

  public colors:string[]=['black','black','fuchsia','fuchsia'];
  getRandomInt(max:number){
    return Math.floor(Math.random() * max);
  }
  giveColor(){
    return this.colors[(this.colors.length) ];
  }

}
