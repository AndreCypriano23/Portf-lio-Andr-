import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
public arrayProjects = signal<IProjects[]>([
  {
    src: 'assets/img/projects/vfull.png',
    alt: 'Projeto Vida Fullstack',
    title: "Vida Fullstack",
    width: '100px',
    height: '51px',
    description: '',
    links: [
      {
        name: 'Conheça o blog',
        href: 'https://teste'
      }
    ]

  }
])
}
