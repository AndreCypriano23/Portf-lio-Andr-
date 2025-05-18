import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Desenvolvedor Full Stack - Angular | .Net",
        p: "SISAND | Dezembro 2022 - Presente"
      },
      text: "<p>Atuei como...<p>"
    },
    {
      summary: {
        strong: "",
        p: ""
      },
      text: ""
    },
    

  ])

}
