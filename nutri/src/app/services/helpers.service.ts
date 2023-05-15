import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }


  indexOfSecond(str:string, substr:string) {
    const firstIndex = str.indexOf(substr);
    if (firstIndex >= 0) {
      return str.indexOf(substr, firstIndex + 1);
    } else {
      return -1;
    }
  }

  extractUntilSlash(str: string) {
    str = this.reverse(str)
    
    let slashis = this.indexOfSecond(str,"/")
    return str.substring(slashis-1,slashis)
  }

  reverse(s: string):string{
    return s.split("").reverse().join("");
}

}
