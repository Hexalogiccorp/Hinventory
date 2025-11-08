import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-table-component',
  imports: [CommonModule, MatTableModule, MatPaginatorModule, CurrencyPipe, MatIconModule],
  standalone: true,
  templateUrl: './table-component.html',
  styleUrls: ['./table-component.css'],
})

export class TableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() title: string = 'Assets';

  protected displayedColumns: string[] = ['photo', 'code', 'name', 'category', 'unitPrice', 'actions'];
  protected dataSource = new MatTableDataSource<Assets>(ELEMENT_DATA);

  protected deleteItem(asset: Assets) {
    console.log('Delete action', asset);
  }

  protected editItem(asset: Assets) {
    console.log('Edit action', asset);
  }

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
    photo: '',
  },
  {
    code: 1002,
    name: 'Iphone 12',
    category: 'Electronics',
    unitPrice: 485000,
    photo: 'assets/iphone.jpg',
  },
  {
    code: 1003,
    name: 'Desk Chair',
    category: 'Furniture',
    unitPrice: 95000,
    photo: '',
  },
  {
    code: 1004,
    name: 'Notebook',
    category: 'Stationery',
    unitPrice: 500000,
    photo: '',
  },
  {
    code: 1005,
    name: 'Mouse',
    category: 'Electronics',
    unitPrice: 25000,
    photo: '',
  },
  {
    code: 1006,
    name: 'Headphones',
    category: 'Electronics',
    unitPrice: 35000,
    photo: '',
  },
];