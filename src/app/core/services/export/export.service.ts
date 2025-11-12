import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Asset } from '@core';

@Injectable({
  providedIn: 'root',
})
export class ExportService {
  private excludeColumns = ['photo'];

  private filterData(data: Asset[]): Partial<Asset>[] {
    return data.map(
      (item) =>
        Object.fromEntries(
          Object.entries(item)
            .filter(([key]) => !this.excludeColumns.includes(key))
            .filter(([_, value]) => value !== undefined)
        ) as Partial<Asset>
    );
  }

  exportToExcel(data: Asset[], fileName: string = 'data.xlsx') {
    const filteredData = this.filterData(data);
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, fileName);
  }

  exportToPDF(data: Asset[], fileName: string = 'data.pdf') {
    const filteredData = this.filterData(data);
    const doc = new jsPDF();
    autoTable(doc, {
      head: [Object.keys(filteredData[0] || {})],
      body: filteredData.map((d) => Object.values(d)),
    });
    doc.save(fileName);
  }
}
