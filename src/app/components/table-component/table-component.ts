import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table-component',
  imports: [MatTableModule, MatPaginatorModule, CurrencyPipe],
  standalone: true,
  templateUrl: './table-component.html',
  styleUrls: ['./table-component.css'],
})

export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['photo', 'code', 'name', 'category', 'unitPrice', 'actions'];
  dataSource = new MatTableDataSource<Assets>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Assets {
  photo?: string;
  code: number;
  name: string;
  category: string;
  unitPrice: number;
}

const ELEMENT_DATA: Assets[] = [
  {
    code: 1001,
    name: 'Laptop',
    category: 'Electronics',
    unitPrice: 850000,
    photo: 'assets/laptop.png',
  },
  {
    code: 1002,
    name: 'Smartphone',
    category: 'Electronics',
    unitPrice: 485000,
    photo: 'assets/smartphone.png',
  },
  {
    code: 1003,
    name: 'Desk Chair',
    category: 'Furniture',
    unitPrice: 95000,
    photo: 'assets/chair.png',
  },
  {
    code: 1004,
    name: 'Notebook',
    category: 'Stationery',
    unitPrice: 500000,
    photo: 'assets/notebook.png',
  },
  { 
    code: 1005, 
    name: 'Mouse', 
    category: 'Electronics', 
    unitPrice: 25000, 
    photo: 'assets/pen.png' 
  },
  {
    code: 1006,
    name: 'Headphones',
    category: 'Electronics',
    unitPrice: 35000,
    photo: 'assets/headphones.png',
  },
];