import { Routes } from '@angular/router';
import { Login } from '../components/login';
import { DashboardComponent } from '../components/dashboard';
import { WorkComponent } from '../components/work';
import { PersonComponent } from '../components/person';
import { WelcomeComponent } from '../components/welcome';

export  const ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'dashboard', component: DashboardComponent , children: [
        { path: '', component: WelcomeComponent },
        { path: 'work', component: WorkComponent },
        { path: 'work:id', component: WorkComponent },
        { path: 'person', component: PersonComponent },
        { path: 'person:id', component: PersonComponent }
    ] }
  ];
