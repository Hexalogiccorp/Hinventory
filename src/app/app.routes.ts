import { Routes } from '@angular/router';
import { AssetPage } from './features/assets/pages/asset-page/asset-page';
import { DashboardPage } from './features/dashboard/pages/dashboard-page/dashboard-page';

export const routes: Routes = [
    {path:'asset' , component:AssetPage},
    {path:'dashboard', component:DashboardPage},
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
