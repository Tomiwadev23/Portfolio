import { Routes } from '@angular/router';

import { Home } from './home/home';

import { About } from './about/about';
import { Project } from './project/project';
import { Resume } from './resume/resume';

export const routes: Routes = [
  { path: '', component: Home },
  { path: '**', redirectTo: '' }
];
