import { Component } from '@angular/core';
import { FundoComponent } from '../../components/fundo/fundo.component';
import { GripButtonsComponent } from '../../components/grip-buttons/grip-buttons.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FundoComponent, GripButtonsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
