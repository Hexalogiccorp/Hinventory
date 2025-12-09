import { Component } from '@angular/core';
import { SummaryCard } from '../../models/dashboard.model';
import { SummaryCardComponent } from '../../components/summary-card-component/summary-card-component';

@Component({
  selector: 'app-dashboard-page',
  imports: [SummaryCardComponent],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {
  summaryCards: SummaryCard[] = [
    {
      icon: 'clean_hands',
      title: 'Limpieza',
      quantity: 120,
      backgroundColor: 'var(--hlc-warning-color)',
      route: '/inventario',
    },
    {
      icon: 'laptop_mac',
      title: 'Electrónicos',
      quantity: 18,
      backgroundColor: 'var(--hlc-primary-color)',
      route: '/ordenes',
    },
    {
      icon: 'local_shipping',
      title: 'Bodega',
      quantity: 6,
      backgroundColor: 'var(--hlc-primary-color)',
      route: '/sucursales',
    },
    {
      icon: 'laptop_mac',
      title: 'Electrónicos',
      quantity: 18,
      backgroundColor: 'var(--hlc-primary-color)',
      route: '/ordenes',
    },
    {
      icon: 'local_shipping',
      title: 'Bodega',
      quantity: 6,
      backgroundColor: 'var(--hlc-primary-color)',
      route: '/sucursales',
    },{
      icon: 'laptop_mac',
      title: 'Electrónicos',
      quantity: 18,
      backgroundColor: 'var(--hlc-primary-color)',
      route: '/ordenes',
    },
    {
      icon: 'local_shipping',
      title: 'Bodega',
      quantity: 6,
      backgroundColor: 'var(--hlc-primary-color)',
      route: '/sucursales',
    },{
      icon: 'laptop_mac',
      title: 'Electrónicos',
      quantity: 18,
      backgroundColor: 'var(--hlc-primary-color)',
      route: '/ordenes',
    },
    {
      icon: 'local_shipping',
      title: 'Bodega',
      quantity: 6,
      backgroundColor: 'var(--hlc-primary-color)',
      route: '/sucursales',
    },
  ];
}