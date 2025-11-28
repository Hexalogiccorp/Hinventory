import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SummaryCardComponent } from './features/dashboard/components/summary-card-component/summary-card-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SummaryCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Hiventory');
  
}