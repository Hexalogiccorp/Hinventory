import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from "./shared/components/table-component/table-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TableComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hiventory');
}
