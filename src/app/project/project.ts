import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ArrowRight, LucideAngularModule } from 'lucide-angular';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDialog } from '../project-dialog/project-dialog';

type Lang = { name: string; percent: number; color: string };
type Slice = { color: string; dashArray: string; dashOffset: number };

@Component({
  selector: 'app-project',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project implements OnInit {
  constructor(private dialog: MatDialog) {}

  projects: any[] = [];

  ngOnInit() {
    // Local data defined right here
    this.projects = [
      {
        name: 'Music App',
        description:
          'A music streaming application with seamless real data modification.',
        images: [
          '/assets/picno4.png',
          '/assets/picno2.png',
          '/assets/picno1.png',
          '/assets/picno3.png',
          '/assets/picno5.png'
        ],
        link: 'https://github.com/Tomiwadev23/MusicBox',
        languages: [
          { name: 'TypeScript', percent: 45, color: '#2563EB' },
          { name: 'SCSS', percent: 30.2, color: '#FF0000' },
          { name: 'HTML', percent: 24.8, color: '#F97316' },
        ]
      },
      {
        name: 'Lg-utility-class',
        description: 'Modern utility class for responsive design and ionic components.',
        images: [
          'assets/utility one.png',
          'assets/utility two.png',
          'assets/utility three.png',
        ],
        link: 'https://github.com/Tomiwadev23/Lgionicstyles',
        languages: [
          { name: 'SCSS', percent: 100, color: '#FF0000' },
        ]
      },
      {
        name: 'Portfolio Website',
        description: 'A personal portfolio to showcase my skills and projects.',
        images: [
          'assets/port 2.png',
          'assets/port 3.png',
          'assets/port 4.png',
          'assets/portx.png'
        ],
        link: 'https://github.com/Tomiwadev23/MusicBox3.0',
        languages: [
          { name: 'HTML', percent:41.8 , color: '#F97316' },
          { name: 'CSS', percent: 18.6, color: '#2563EB' },
          { name: 'TypeScript', percent: 39.6, color: '#2563EB' }
        ]
      },
      {
        name: 'Wheather App',
        description: 'Real-time chat application with user authentication.',
        images: [
          'assets/t1.jpg',
          'https://images.unsplash.com/photo-1756550120927-dede81d8b2bb?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'assets/t3.png'
        ]
      }
    ];

    this.prepareProjects(); // Precompute chart slices
  }

  // ✅ FIXED VERSION
  buildSlices(langs: Lang[]): Slice[] {
    const radius = 16;
    const circumference = 2 * Math.PI * radius;
    const total =
      langs.reduce((sum, l) => sum + (Number(l.percent) || 0), 0) || 1;

    let cumulative = 0;

    return langs.map(l => {
      const value = (Number(l.percent) / total) * circumference;
      const slice: Slice = {
        color: l.color,
        dashArray: `${value} ${circumference - value}`,
        dashOffset: -cumulative
      };
      cumulative += value;
      return slice;
    });
  }

  prepareProjects() {
    this.projects = this.projects.map(p => ({
      ...p,
      slices: this.buildSlices(p.languages || [])
    }));
  }

  openProject(project: any) {
    this.dialog.open(ProjectDialog, {
      width: '700px',
      panelClass: 'custom-dialog-container',
      data: project
    });
  }

  Arrowr = ArrowRight;

  @HostListener('window:scroll', [])
  onScroll() {
    this.checkReveal();
  }

  private checkReveal() {
    const reveals = document.querySelectorAll('.eveal');
    const windowHeight = window.innerHeight;

    reveals.forEach((el: Element) => {
      const rect = el.getBoundingClientRect();

      if (rect.top < windowHeight - 100) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }
}
