import { AfterViewInit, Component, ElementRef, inject, Inject, OnInit, signal, ViewChild,HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Scroll } from '@angular/router';
import { Router } from '@angular/router';
import { Services } from '../services';
import { Home } from '../home/home';
import { Theme } from '../theme';
import { About } from '../about/about';
import { Project } from '../project/project';
import {  Menu, ArrowLeft, ArrowRight, ChevronDown, Briefcase, Mail , Phone, LucideAngularModule, LucidePhone,Moon, Sun, Code, Folder, User } from 'lucide-angular';
import { DataService } from '../data-service';
import { NgIf } from '@angular/common';
import { Skills } from '../skills/skills';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive,RouterOutlet,Home,About,Project,Skills, LucideAngularModule,NgIf],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements AfterViewInit,OnInit{
  alertService=inject(Services)
    currentRoute: string = '';
    theme=inject(Theme);
      Phone= Phone;
      Moon= Moon;
      Menu= Menu;
      Mail= Mail;
      User= User;
      Folder= Folder;
      Code= Code;

        size = 32;

  isHidden = false;
  lastScroll = 0;

  icon=Moon;  

  @HostListener('window:scroll', [])
  onScroll() {
    const current = window.scrollY;
    this.isHidden = current > this.lastScroll; // hide when scrolling down
    this.lastScroll = current;
    
  }

constructor(private router: Router,private dataService:DataService) {
    }
    

  scrollToSection(section: string) {
    this.dataService.scrollTo(section);
  }
    //  scrollToSection(sectionId: string) {
    // document.getElementById(sectionId)?.scrollIntoView({ 
    //   behavior: 'smooth',
    //   block: 'start'
    // });
  


ngOnInit(){
     // Track route changes


  
}



  ngAfterViewInit(){
  
  
    
  }
  isOpen=signal(false)
toggle(){
  this.isOpen.update((isOpen) => !isOpen);
  console.log(
    this.isOpen()
  );
 

 
  

}
pada(){
  this.isOpen.set(false)
  console.log('hoooo');
  
}






  toggleTheme(): void {
  this.icon = this.icon === Moon ? Sun : Moon;
    this.theme.toggleTheme();
  }


// sabo(){
//     this.isOpen.set(false)

// }

  // isActive(route: string): boolean {
  //   return this.currentRoute === route;
  // }

  // goToAbout(){
  //   this.router.navigate(['aboutcart'])
  // }

}
