import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements AfterViewInit {
  years = 0;
  projects = 0;
  collaborations = 0;
  technologies = 0;
  openSourceContributions = 0;
  @ViewChild ('counter') counter!:ElementRef;

  ngAfterViewInit() {
        const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start counters when section is visible
            this.animateCounter('years', 5, 1000);
            this.animateCounter('projects', 10, 1000);
            this.animateCounter('collaborations', 3, 1000);
            this.animateCounter('technologies', 10, 1000);
            this.animateCounter('openSourceContributions', 1, 1000);

            // stop observing (run once)
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 } // at least 30% visible
    );

    observer.observe(this.counter.nativeElement);

   
  }
    //    this.animateCounter('years', 5, 1000);
    //  this.animateCounter('projects', 10, 1000);
    //  this.animateCounter('collaborations', 3, 1000);
    //  this.animateCounter('technologies', 10, 1000);
    //  this.animateCounter('openSourceContributions', 1, 1000);

  animateCounter(property: 'projects' | 'years' | 'collaborations' | 'technologies' | 'openSourceContributions', target: number, duration: number) {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));
    const timer = setInterval(() => {
      if (start < target) {
        start++;
        (this as any)[property] = start;
      } else {
        clearInterval(timer);
      }
    }, stepTime);
  }




  @HostListener('window:scroll', [])
  onScroll() {
    this.checkReveal();
  }

  private checkReveal() {
    const reveals = document.querySelectorAll('.reveal',);
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
