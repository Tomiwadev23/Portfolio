import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination, } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import { LucideAngularModule,User, Settings, Heart, ArrowDown } from 'lucide-angular';
import {  Menu, ArrowLeft, ArrowRight, ChevronDown, Briefcase, Mail } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import Typed from 'typed.js';
import { trigger, style, animate, transition } from '@angular/animations';





@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule,RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css'

})
export class Hero implements AfterViewInit,OnInit {

  isMenuOpen = false;
  isDarkMode = false;

  // Toggle Mobile Menu
 
  
    HomeIcon = ArrowRight;
  UserIcon = User;
  SettingsIcon = Settings;
  Arrowr =ArrowRight ;
  Arrowd=ArrowDown
  
  // Dynamic properties
  iconColor = '#3b82f6';
  iconSize = 32;
  isLiked = false;

  BriefcaseIcon = Briefcase;
  
  toggleLike() {
    this.isLiked = !this.isLiked;}
  ngOnInit(): void {
    this.chnage()
  }
  chnage(){
  // this.jor.update((jor)=>!jor)
}

  ngAfterViewInit() {
    const options = {
      strings: ["Software Developer", "Tech Enthusiast"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    };
    new Typed('#typed-text', options);
  }


  //    const swiper = new Swiper('.swiper', {
  //   modules: [Navigation, Pagination,Autoplay],
  //     direction: 'horizontal',
  // loop:false,
  //   slidesPerView: 1,
  //   spaceBetween: 10,

  //   pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //   },
  //   autoplay: {
  //       delay: 2500,
  //       disableOnInteraction: false,
  //   },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
// });

}


// jor=signal (false);

//   }

