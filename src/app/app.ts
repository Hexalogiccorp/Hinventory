import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '@shared/components/card-component/card-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Hiventory');
}