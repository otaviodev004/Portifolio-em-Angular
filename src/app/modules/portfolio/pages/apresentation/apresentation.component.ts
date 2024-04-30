import { Component } from '@angular/core';
import { FundoComponent } from '../../components/fundo/fundo.component';
import { GripButtonsComponent } from '../../components/grip-buttons/grip-buttons.component';

@Component({
  selector: 'app-apresentation',
  standalone: true,
  imports: [FundoComponent, GripButtonsComponent],
  templateUrl: './apresentation.component.html',
  styleUrl: './apresentation.component.scss'
})
export class ApresentationComponent {

}
