import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './features/personal-details/personal-details.component';
import { CompanyDetailsComponent } from './features/company-details/company-details.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     component: AppComponent,
    // },
    {
        //path: 'personal-details',
        path: '',
        component: PersonalDetailsComponent,
    },
    {
        path: 'company-details',
        component: CompanyDetailsComponent,
    },
    { path: '**', redirectTo: '' }
];
