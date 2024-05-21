import { 
  Component, 
  ElementRef, 
  Inject, 
  effect, 
  inject, 
  signal, 
  viewChild, 
  viewChildren 
} from '@angular/core';
import { FundoComponent } from '../../components/fundo/fundo.component';
import { GripButtonsComponent } from '../../components/grip-buttons/grip-buttons.component';
import { WindowToken } from '../../../../app.config';
import {
  provideRouter,
  RouterLink,
  RouterOutlet,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { IDialogProject } from '../../interface/IDialogProject.interface';

// usando o angular material para fazer o dialog
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
// ENUM
import { EDialogPanelClass } from '../../enum/EDialogPanelCLass.enum';
import { IProjects } from '../../interface/IProjects.interface';
import { DialogProjectsComponent } from '../../components/dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-expirience',
  standalone: true,
  imports: [FundoComponent, GripButtonsComponent, MatDialogModule],
  templateUrl: './expirience.component.html',
  styleUrl: './expirience.component.scss'
})

export class ExpirienceComponent {
  cards = viewChildren<ElementRef<HTMLElement>>('card');

  constructor(@Inject(WindowToken) private readonly TypedWindow: Window & { VanillaTilt: any }) {
    effect(() => {
      const cards = this.cards().map(el => el.nativeElement)
      TypedWindow.VanillaTilt.init(cards, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 1
      });
    });
  };

  // ANGULAR MATERIAL DIALOG
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projeto-fundo.png',
      alt: "Projeto Dieta",
      title: "Projeto Vida Saudavel.",
      with: '100px',
      height: '100px',
      description: 'Venha conhecer o Projeto designado para pessoas que querem ter uma vida mais saudavel.',
      links: [
        {
          name: 'Conheça o Projeto',
          href: ''
        }
      ]
    },
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      // CRIADO DENTRO DE ENUM UMA CLASSE
      panelClass: EDialogPanelClass.PROJECTS
    })
  }



}

bootstrapApplication(ExpirienceComponent, {
  providers: [
    provideRouter(
      [
        { path: '', pathMatch: 'full', redirectTo: '/0' },
      ],
      withViewTransitions(),
      withComponentInputBinding()
    ),
  ],
});
