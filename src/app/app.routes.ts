import { Routes } from '@angular/router';
import { AssetPage,DashboardPage } from '@features';

export const routes: Routes = [
    {path:'asset' , component:AssetPage},
    {path:'dashboard', component:DashboardPage},
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
