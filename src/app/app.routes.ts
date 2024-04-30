import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: async () => (await import('./modules/portfolio/pages/home/home.component')).HomeComponent
    },
    {
        path: 'apresentation',
        loadComponent: async () => (await import('./modules/portfolio/pages/apresentation/apresentation.component')).ApresentationComponent
    },
    {
        path: 'skills',
        loadComponent: async () => (await import('./modules/portfolio/pages/skills/skills.component')).SkillsComponent
    },
    {
        path: 'expirience',
        loadComponent: async () => (await import('./modules/portfolio/pages/expirience/expirience.component')).ExpirienceComponent

    },
    {
        path: 'contact',
        loadComponent: async () => (await import('./modules/portfolio/pages/contact/contact.component')).ContactComponent
    }
];
