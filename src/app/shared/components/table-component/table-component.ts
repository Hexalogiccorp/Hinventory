import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

export interface TableColumn {
  key: string; 
  label: string; 
  type?: 'text' | 'currency' | 'image' | 'actions'; 
}

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
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>([]);

  ngOnInit() {
    this.displayedColumns = this.columns.map((c) => c.key);
    this.dataSource.data = this.data;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteItem(item: any) {
    console.log('Delete', item);
  }

  editItem(item: any) {
    console.log('Edit', item);
  }
}