import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
    @HostListener('window:scroll', [])
  onScroll() {
    this.checkReveal();
  }

  private checkReveal() {
    const reveals = document.querySelectorAll('.veal',);
    const windowHeight = window.innerHeight;

    reveals.forEach((el: Element) => {
    const rect = el.getBoundingClientRect();

    // if element enters viewport
    if (rect.top < windowHeight - 100) {
      el.classList.add('active');
    } else {
      // optional: remove when it leaves
      el.classList.remove('active');
    }
  });
  }

}
