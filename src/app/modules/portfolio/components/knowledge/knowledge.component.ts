import { Component, signal } from '@angular/core';
import { IKnowLedge } from '../../interface/IKnowledge.interface';//Interface

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowLedge[]>([
    {
      src: 'asset/icons/knowledge/html.svg',
      alt: 'ícone de conhecimento de html 5'
    },
    {
      src: 'asset/icons/knowledge/css3.svg',
      alt: 'ícone de conhecimento de Css3'
    }, {
      src: 'asset/icons/knowledge/javascript.svg',
      alt: 'ícone de conhecimento de Javascript'
    },
   {
      src: 'asset/icons/knowledge/angular.svg',
      alt: 'ícone de conhecimento de Angular'
    }, 
    {
      src: 'asset/icons/knowledge/netCore.svg',
      alt: 'ícone de conhecimento de .Net'
    }
  ])
}
