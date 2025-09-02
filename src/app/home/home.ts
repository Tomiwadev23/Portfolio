import { AfterViewInit, Component, inject, OnInit, signal } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination, } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DataService } from '../data-service';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Project } from '../project/project';
import { Skills } from '../skills/skills';
import { Contact } from '../contact/contact';
;

@Component({
  selector: 'app-home',
  imports: [RouterOutlet,RouterLink,RouterLinkActive,Hero,About,Project,Skills,Contact],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, AfterViewInit{
  dataService=inject(DataService)
  tommy:any[]=[];
  ngOnInit() {
    this.dataService.getDta()
    this.tommy = this.dataService.iwatches()
    console.log(this.tommy);
    

  }

  
  isOpen=signal(false)
toggle(){
  this.isOpen.update((isOpen) => !isOpen);

}
changeOpen(){
  this.isOpen.update((isOpen) => !isOpen);
}
  ngAfterViewInit() {
     const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination,Autoplay],
      direction: 'horizontal',
  loop:false,
    slidesPerView: 1,
    spaceBetween: 10,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
});

}

}
