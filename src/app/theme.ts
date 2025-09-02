import { Injectable } from '@angular/core';
import { Moon, Sun } from 'lucide-angular';

@Injectable({
  providedIn: 'root'
})
export class Theme {
   private darkModeClass = 'dark';

  constructor() {
    this.loadInitialTheme();
  }

  private get htmlElement() {
    return document.documentElement;
  }

  toggleTheme(): void {
    const isDark = this.htmlElement.classList.toggle(this.darkModeClass);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  loadInitialTheme(): void {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      this.htmlElement.classList.add(this.darkModeClass);
    } else if (savedTheme === 'light') {
      this.htmlElement.classList.remove(this.darkModeClass);
    } else {
      // If no preference saved, use system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        this.htmlElement.classList.add(this.darkModeClass);
      }
    }
  }

  //  toggleBtn: any;
  // @ViewChild('togglebtn')togglebtn!:ElementRef;
  // ngOnInit(){
    // this.togglebtn.nativeElement.
//     this.toggleBtn = document.getElementById('toggle-dark');
// const htmlEl = document.documentElement;


//     const savetheme = localStorage.getItem('theme')


// Load saved mode or system preference
// const savedTheme = localStorage.getItem('theme');

// if (savedTheme === 'dark') {
//   htmlEl.classList.add('dark');
// } else if (savedTheme === 'light') {
//   htmlEl.classList.remove('dark');
// } else {
//   // If no saved preference, check system preference
//   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     htmlEl.classList.add('dark');
//   }
// }

// // Toggle button logic
// this.toggleBtn.addEventListener('click', () => {
//   if (htmlEl.classList.contains('dark')) {
//     htmlEl.classList.remove('dark');
//     localStorage.setItem('theme', 'light'); // Save user preference
//   } else {
//     htmlEl.classList.add('dark');
//     localStorage.setItem('theme', 'dark'); // Save user preference
//   }
// });


//   }


  
}
