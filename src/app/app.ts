import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { About } from './about/about';
import { Project } from './project/project';
import { Hero } from './hero/hero';
import { LucideAngularModule, Phone } from 'lucide-angular';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,About,Project,Hero,LucideAngularModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Gadget2.0';
   Phone= Phone;
    size = 32;

   scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
