import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimationComponent } from './modules/portfolio/components/animation/animation.component';
import { WindowToken } from './app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule ,RouterOutlet, AnimationComponent],
  template: `
  <router-outlet></router-outlet>
  <app-animation/>
  `,
})

export class AppComponent {
  title = 'portfolio';


  constructor(@Inject(WindowToken) private readonly TypedWindow: Window & { VanillaTilt: any}) {
    console.log(TypedWindow.VanillaTilt);
  }
}
