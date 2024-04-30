import { Component, signal } from '@angular/core';
import { FundoComponent } from '../../components/fundo/fundo.component';
import { GripButtonsComponent } from '../../components/grip-buttons/grip-buttons.component';
import { IExpirience } from '../../interface/IExpirience';

@Component({
  selector: 'app-expirience',
  standalone: true,
  imports: [FundoComponent, GripButtonsComponent],
  templateUrl: './expirience.component.html',
  styleUrl: './expirience.component.scss'
})
export class ExpirienceComponent {
  public arraySkills = signal<IExpirience[]>([
    {
      summary: {
        strong: "Desenvolvedor Web",
        p: "Brunsker | JAN 2024 - Present"
      },
      text: "<p>Desde Janeiro de 2024, atuo como Estágiario como Desenvolvedor na Brunsker, destacando-me nas áreas de Back-End trabalhando com PHP, no Front-End utilizando HTML, CSS e JavaScript e no Banco de Dados utilizando Oracle...</p>"
    },
    {
      summary: {
        strong: "Desenvolvedor Web",
        p: "FAC Sistemas | JAN 2023 - MAI 2023"
      },
      text: "<p>Em minha jornada como Desenvolvedor Web na FAC Sistemas, tive a minha primeira oportunidade na área de programação onde coloquei meus conhecimentos em prova e aprendi muito com eles também, ali desenvolvendo com PHP, JavaScript, HTML, CSS, no banco de dados MySQl e com a geração de Notas no StimulSoft...</p>"
    },
    {
      summary: {
        strong: "Suporte Técnico",
        p: "CNI - Centro de Formação Profissional | JUL 2022 - OUT 2022"
      },
      text: "<p>Durante meu período realizando o Estágio em Suporte Técnico na CNI de Julho de 2022 até Outubro de 2022, tive a oportunidade de trabalhar com cabeamento Estruturado, Montagem e Manutenção de Computadores, Configuração de computares Windows, Configuração de IP, Suporte N1, entres outras habilidades...</p>"
    },
  ])
}
