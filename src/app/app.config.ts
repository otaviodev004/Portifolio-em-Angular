import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const WindowToken = new InjectionToken<Window & { VanillaTilt: any }>('Window', { factory: () => window as unknown as Window & { VanillaTilt: any } })

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withViewTransitions()), provideAnimationsAsync(),]
};
