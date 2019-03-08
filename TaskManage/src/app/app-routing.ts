import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './_guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'tasks', loadChildren: './task/task.module#TaskModule' },
            { path: 'basic', loadChildren: './basic/basic.module#BasicModule' },
            { path: 'redux', loadChildren: './redux/redux.module#ReduxModule' },
            { path: 'rxjs', loadChildren: './rxjs/rxjs.module#RxjsModule' }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NotFoundComponent },
];
