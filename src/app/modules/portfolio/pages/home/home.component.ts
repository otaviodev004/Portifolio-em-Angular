import { Component } from '@angular/core';
import { FundoComponent } from '../../components/fundo/fundo.component';
import { GripButtonsComponent } from '../../components/grip-buttons/grip-buttons.component';
import { AnimationComponent } from '../../components/animation/animation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FundoComponent, GripButtonsComponent, AnimationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
