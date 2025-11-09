import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { ExportService } from '@core';
import { Asset } from '@core';

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
  constructor(private exportService: ExportService) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() title: string = "";
  @Input() columns: TableColumn[] = [];
  @Input() data: Asset[] = [];

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<Asset>([]);

  ngOnInit() {
    this.displayedColumns = this.columns.map((c) => c.key);
    this.dataSource.data = this.data;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  protected deleteItem(item: Asset) {
    console.log('Delete', item); // TODO: Implement delete functionality
  }

  protected editItem(item: Asset) {
    console.log('Edit', item); // TODO: Implement edit functionality
  }

  protected exportToExcel() {
    this.exportService.exportToExcel(this.data, 'activos.xlsx');
  }

  protected exportToPDF() {
    this.exportService.exportToPDF(this.data, 'activos.pdf');
  }
}