import { Component, signal } from '@angular/core';
import { GripButtonsComponent } from '../../components/grip-buttons/grip-buttons.component';
import { FundoComponent } from '../../components/fundo/fundo.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FundoComponent, GripButtonsComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
