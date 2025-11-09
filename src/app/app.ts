import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableColumn, TableComponent } from './shared/components/table-component/table-component';

export interface Product {
  photo?: string;
  code: string;
  name: string;
  category: string;
  unitPrice: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TableComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Hiventory');

  tableColumns: TableColumn[] = [
    { key: 'photo', label: 'Foto', type: 'image' },
    { key: 'code', label: 'Código' },
    { key: 'name', label: 'Nombre' },
    { key: 'category', label: 'Categoría' },
    { key: 'unitPrice', label: 'Precio', type: 'currency' },
    { key: 'actions', label: 'Acciones', type: 'actions' },
  ];

  products: Product[] = [
    {
      code: 'TECH-LAP-001',
      name: 'Laptop Dell Latitude 5420',
      category: 'Tecnología',
      unitPrice: 835000,
      photo: '',
    },
    {
      code: 'TECH-CEL-001',
      name: 'Ihone 13 Pro Max 256GB',
      category: 'Tecnología',
      unitPrice: 650000,
      photo: '/assets/iphone.jpg',
    },
    {
      code: 'TECH-MON-014',
      name: 'Monitor Samsung 24" FHD',
      category: 'Tecnología',
      unitPrice: 95000,
      photo: '',
    },
    {
      code: 'TECH-MON-015',
      name: 'Monitor Samsung 24" FHD',
      category: 'Tecnología',
      unitPrice: 95000,
      photo: '',
    },
    {
      code: 'PER-KEY-033',
      name: 'Teclado Logitech K120',
      category: 'Periféricos',
      unitPrice: 12000,
      photo: '',
    },
    {
      code: 'PER-MOU-034',
      name: 'Mouse Logitech M90',
      category: 'Periféricos',
      unitPrice: 8000,
      photo: '',
    },
    {
      code: 'MOB-CHR-007',
      name: 'Silla ergonómica de oficina',
      category: 'Mobiliario',
      unitPrice: 85000,
      photo: '',
    },
    {
      code: 'CLN-DET-011',
      name: 'Detergente industrial 5L',
      category: 'Limpieza',
      unitPrice: 5500,
      photo: '',
    },
  ];
}
