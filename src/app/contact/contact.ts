import { Component, HostListener } from '@angular/core';
import { LucideAngularModule, MapPin } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  imports: [LucideAngularModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  locationIcon = MapPin
    @HostListener('window:scroll', [])
  onScroll() {
    this.checkReveal();
  }

  private checkReveal() {
    const reveals = document.querySelectorAll('.al',);
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
