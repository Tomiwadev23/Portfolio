import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Services {

  isActiv=signal(false)
  toggle(){
    this.isActiv.update((isActiv)=>!isActiv)
    console.log('trying',this.isActiv());
    
  }

  

}
