import { Component } from '@angular/core';
import { GripButtonsComponent } from '../../components/grip-buttons/grip-buttons.component';
import { FundoComponent } from '../../components/fundo/fundo.component';

@Component({
  selector: 'app-soft-skills',
  standalone: true,
  imports: [FundoComponent, GripButtonsComponent],
  templateUrl: './soft-skills.component.html',
  styleUrl: './soft-skills.component.scss'
})
export class SoftSkillsComponent {

}
