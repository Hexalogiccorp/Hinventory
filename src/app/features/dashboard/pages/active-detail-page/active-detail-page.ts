import { Component } from '@angular/core';
import { Asset } from '@core';
import { CardComponent, TableColumn, TableComponent } from '@shared';

@Component({
  selector: 'app-active-detail-page',
  imports: [CardComponent, TableComponent],
  templateUrl: './active-detail-page.html',
  styleUrl: './active-detail-page.css',
})
export class ActiveDetailPage {
  //Datos dinamicos para la implementación con el servicio que se va a implementar
  tableTitle!:string;
  tableData!:Asset[];

  cardDetails = [
    { title: 'Total activos', quantity: 3, styles: 'green-card mat-mdc-card', icon: 'api' },
    { title: 'Activos en reparación', quantity: 2, styles: 'warning-card mat-mdc-card', icon: 'api' },
    { title: 'Activos dañados', quantity: 2, styles: 'red-card mat-mdc-card', icon: 'api' },
  ];

  tableColumns: TableColumn[] = [
    { key: 'photo', label: 'Foto', type: 'image' },
    { key: 'code', label: 'Código' },
    { key: 'name', label: 'Nombre' },
    { key: 'category', label: 'Categoría' },
    { key: 'unitPrice', label: 'Precio', type: 'currency' },
    { key: 'actions', label: 'Acciones', type: 'actions' },
  ];

  data: Asset[] = [
    { photo: '', code: 'A12', name: 'name1', category: 'columna1', unitPrice: 2 },
    { photo: '', code: 'A16', name: 'name2', category: 'category2', unitPrice: 2 },
    { photo: '', code: 'A45', name: 'name3', category: 'category3', unitPrice: 2 },
    { photo: '', code: 'A45', name: 'name3', category: 'category3', unitPrice: 2 },
    { photo: '', code: 'A45', name: 'name3', category: 'category3', unitPrice: 2 },
    { photo: '', code: 'A45', name: 'name3', category: 'category3', unitPrice: 2 },
    { photo: '', code: 'A45', name: 'name3', category: 'category3', unitPrice: 2 },
    { photo: '', code: 'A45', name: 'name3', category: 'category3', unitPrice: 2 },
    { photo: '', code: 'A45', name: 'name3', category: 'category3', unitPrice: 2 },
    { photo: '', code: 'A45', name: 'name3', category: 'category3', unitPrice: 2 },
  ];

}
