import { inject,Inject, Injectable, OnInit, signal } from '@angular/core';
import { collection, doc, Firestore, getDoc, getDocs } from '@angular/fire/firestore';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {

      constructor(@Inject(DOCUMENT) private document: Document,private router: Router) {}

  scrollTo(elementId: string): void {
      this.router.navigate([], { fragment: elementId }).then(() => {
    const element = this.document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
      });
  }
  

  
  db=inject(Firestore)
  iwatches=signal<any[]>([])
  ngOnInit(){
    
  }


  async getDta(){
    const ref=collection(this.db,'Iwatch')
    const querysnap = await getDocs(ref)
    const arr:any[]=[]
    querysnap.forEach((doc)=>{
      arr.push(doc.data())
    })
    this.iwatches.set(arr)
    
  }

  async getSelect(id:any){
    const ref= doc(this.db,'Iwatch',id);
    const querysnap=(await getDoc(ref)).data()
    return querysnap
  }
  
}
